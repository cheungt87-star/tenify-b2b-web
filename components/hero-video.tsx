"use client";

import { useEffect, useRef, useState } from "react";
import { attachHeroVideoPlayback } from "@/lib/hero-video-playback";

const VIDEO_SRC = "/landing/tenify-showcase.mp4";
const POSTER_SRC = "/landing/tenify-showcase-poster.jpg";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [needsGesture, setNeedsGesture] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video) return;
    return attachHeroVideoPlayback({
      video,
      gestureTarget: container ?? video,
      onAutoplayBlocked: () => setNeedsGesture(true),
      onPlaying: () => setNeedsGesture(false),
    });
  }, []);

  return (
    <div className="relative w-full max-w-[900px]">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-[var(--radius-lg)] border-[3px] border-jade-900 shadow-[0_24px_56px_rgba(26,28,28,0.18)]"
      >
        <video
          ref={videoRef}
          className="aspect-video w-full bg-jade-900 object-cover"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Tenify product showcase"
        />
        {needsGesture ? (
          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center bg-jade-900/35 transition-opacity hover:bg-jade-900/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Play showcase video"
            onClick={() => {
              const video = videoRef.current;
              if (!video) return;
              video.muted = true;
              void video.play().then(() => setNeedsGesture(false));
            }}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-jade-900 shadow-lg">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5.14v13.72L19 12 8 5.14z" />
              </svg>
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
