"use client";

import { useEffect, useRef, useState } from "react";
import {
  attachHeroVideoPlayback,
  prepareMutedInlinePlayback,
} from "@/lib/hero-video-playback";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const VIDEO_SRC = "/landing/tenify-showcase.mp4";
const POSTER_SRC = "/landing/tenify-showcase-poster.jpg";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Server assumes motion is allowed so the SSR poster has no play overlay.
  const reducedMotion = usePrefersReducedMotion(false);
  const [choice, setChoice] = useState<"play" | "pause" | null>(null);
  const [blocked, setBlocked] = useState(false);
  const paused = choice ? choice === "pause" : reducedMotion;
  const userPausedRef = useRef(paused);
  const showOverlay = blocked || (reducedMotion && choice === null);

  useEffect(() => {
    userPausedRef.current = paused;
    const video = videoRef.current;
    if (!video) return;
    if (paused) {
      video.pause();
    } else if (video.paused) {
      prepareMutedInlinePlayback(video);
      video.play().catch(() => setBlocked(true));
    }
  }, [paused]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video) return;
    return attachHeroVideoPlayback({
      video,
      gestureTarget: container ?? video,
      isUserPaused: () => userPausedRef.current,
      onAutoplayBlocked: () => setBlocked(true),
      onPlaying: () => setBlocked(false),
    });
  }, []);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    userPausedRef.current = false;
    setChoice("play");
    prepareMutedInlinePlayback(video);
    void video
      .play()
      .then(() => setBlocked(false))
      .catch(() => setBlocked(true));
  }

  function pause() {
    userPausedRef.current = true;
    setChoice("pause");
    videoRef.current?.pause();
  }

  return (
    <div className="relative w-full max-w-[900px]">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-[var(--radius-lg)] border-[3px] border-navy-900 shadow-[0_24px_56px_rgba(26,28,28,0.18)]"
      >
        <video
          ref={videoRef}
          className="aspect-video w-full bg-navy-900 object-cover"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Tenify product showcase"
        />
        {showOverlay ? (
          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center bg-navy-900/35 transition-colors hover:bg-navy-900/45 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-true-white"
            aria-label="Play showcase video"
            onClick={play}
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-true-white text-navy-900 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
              <PlayGlyph size={28} />
            </span>
          </button>
        ) : (
          <button
            type="button"
            className="absolute right-3 bottom-3 flex size-11 items-center justify-center rounded-full bg-navy-900/70 text-true-white transition-colors hover:bg-navy-900/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-true-white"
            aria-label={paused ? "Play showcase video" : "Pause showcase video"}
            onClick={paused ? play : pause}
          >
            {paused ? <PlayGlyph size={18} /> : <PauseGlyph />}
          </button>
        )}
      </div>
    </div>
  );
}

function PlayGlyph({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

function PauseGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}
