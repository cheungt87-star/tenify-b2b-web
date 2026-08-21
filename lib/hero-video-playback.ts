/**
 * Keeps muted autoplay hero video playing on mobile when the OS/browser
 * pauses it (Low Power Mode, tab switches, brief offscreen, etc.).
 */

export type VideoPlaybackTarget = {
  paused: boolean;
  muted?: boolean;
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

export async function syncVideoPlayback(
  video: VideoPlaybackTarget,
  intent: PlaybackIntent,
): Promise<"play" | "pause" | "noop"> {
  const wantPlay = shouldBePlaying(intent);

  if (wantPlay && video.paused) {
    // iOS often rejects play() unless muted is set imperatively.
    video.muted = true;
    await video.play();
    return "play";
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
};

/**
 * Wires visibility + intersection + unexpected-pause resume.
 * Returns a cleanup function.
 */
export function attachHeroVideoPlayback({
  video,
  threshold = 0.25,
}: AttachHeroVideoPlaybackOptions): () => void {
  const intent: PlaybackIntent = {
    inView: true,
    pageVisible: document.visibilityState === "visible",
  };

  let syncing = false;

  const sync = () => {
    if (syncing) return;
    syncing = true;
    void syncVideoPlayback(video, intent)
      .catch(() => {
        // Autoplay may still be blocked; ignore.
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

  // Kick off in case autoplay was interrupted before listeners attached.
  sync();

  return () => {
    observer.disconnect();
    document.removeEventListener("visibilitychange", onVisibilityChange);
    window.removeEventListener("pageshow", onPageShow);
    video.removeEventListener("pause", onPause);
  };
}
