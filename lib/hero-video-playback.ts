/**
 * Keeps muted autoplay hero video playing on mobile when the OS/browser
 * pauses it (Low Power Mode, tab switches, brief offscreen, etc.).
 */

export type VideoPlaybackTarget = {
  paused: boolean;
  muted?: boolean;
  defaultMuted?: boolean;
  setAttribute?: (name: string, value: string) => void;
  play: () => Promise<void>;
  pause: () => void;
};

export type PlaybackIntent = {
  inView: boolean;
  pageVisible: boolean;
};

export function shouldBePlaying(intent: PlaybackIntent): boolean {
  return intent.inView && intent.pageVisible;
}

/** iOS often rejects play() unless muted/playsInline are set as DOM properties. */
export function prepareMutedInlinePlayback(video: VideoPlaybackTarget): void {
  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute?.("muted", "");
  video.setAttribute?.("playsinline", "");
  video.setAttribute?.("webkit-playsinline", "");
}

export async function syncVideoPlayback(
  video: VideoPlaybackTarget,
  intent: PlaybackIntent,
): Promise<"play" | "pause" | "noop" | "blocked"> {
  const wantPlay = shouldBePlaying(intent);

  if (wantPlay && video.paused) {
    prepareMutedInlinePlayback(video);
    try {
      await video.play();
      return "play";
    } catch {
      return "blocked";
    }
  }

  if (!wantPlay && !video.paused) {
    video.pause();
    return "pause";
  }

  return "noop";
}

export type AttachHeroVideoPlaybackOptions = {
  video: HTMLVideoElement;
  threshold?: number;
  /** Called when autoplay is rejected while playback is still intended. */
  onAutoplayBlocked?: () => void;
  /** Called after a successful play() (autoplay or gesture). */
  onPlaying?: () => void;
  /** Element that receives the gesture fallback (defaults to video). */
  gestureTarget?: HTMLElement;
};

/**
 * Wires visibility + intersection + unexpected-pause resume + gesture fallback.
 * Returns a cleanup function.
 */
export function attachHeroVideoPlayback({
  video,
  threshold = 0.25,
  onAutoplayBlocked,
  onPlaying,
  gestureTarget,
}: AttachHeroVideoPlaybackOptions): () => void {
  const intent: PlaybackIntent = {
    inView: true,
    pageVisible: document.visibilityState === "visible",
  };

  let syncing = false;
  const hitTarget = gestureTarget ?? video;

  prepareMutedInlinePlayback(video);

  const sync = () => {
    if (syncing) return;
    syncing = true;
    void syncVideoPlayback(video, intent)
      .then((result) => {
        if (result === "play") {
          onPlaying?.();
        } else if (result === "blocked") {
          onAutoplayBlocked?.();
        }
      })
      .finally(() => {
        syncing = false;
      });
  };

  const onVisibilityChange = () => {
    intent.pageVisible = document.visibilityState === "visible";
    sync();
  };

  const onPause = () => {
    // OS/browser may pause while we still intend to play — resume.
    if (shouldBePlaying(intent)) {
      sync();
    }
  };

  const onPageShow = () => {
    intent.pageVisible = true;
    sync();
  };

  const onReady = () => {
    sync();
  };

  const onGesture = () => {
    if (!shouldBePlaying(intent) || !video.paused) return;
    prepareMutedInlinePlayback(video);
    void video
      .play()
      .then(() => {
        onPlaying?.();
      })
      .catch(() => {
        onAutoplayBlocked?.();
      });
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry) return;
      intent.inView = entry.isIntersecting;
      sync();
    },
    { threshold },
  );

  observer.observe(video);
  document.addEventListener("visibilitychange", onVisibilityChange);
  window.addEventListener("pageshow", onPageShow);
  video.addEventListener("pause", onPause);
  video.addEventListener("loadeddata", onReady);
  video.addEventListener("canplay", onReady);
  hitTarget.addEventListener("pointerdown", onGesture);
  hitTarget.addEventListener("touchstart", onGesture, { passive: true });

  // Kick off in case autoplay was interrupted before listeners attached.
  sync();

  return () => {
    observer.disconnect();
    document.removeEventListener("visibilitychange", onVisibilityChange);
    window.removeEventListener("pageshow", onPageShow);
    video.removeEventListener("pause", onPause);
    video.removeEventListener("loadeddata", onReady);
    video.removeEventListener("canplay", onReady);
    hitTarget.removeEventListener("pointerdown", onGesture);
    hitTarget.removeEventListener("touchstart", onGesture);
  };
}
