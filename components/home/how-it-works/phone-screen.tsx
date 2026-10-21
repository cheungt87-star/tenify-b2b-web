"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
} from "react";
import type { StepMedia } from "./steps";
import styles from "./how-it-works.module.css";

type PhoneScreenProps = {
  media: StepMedia;
  placeholder: ComponentType;
  /** This step is the one in view (row at ~55% on desktop, centred card on mobile). */
  active: boolean;
  /** Increments each time the step becomes active, so GIFs can restart. */
  cycle: number;
};

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * One phone screen. Renders the step's configured media, or its animated
 * placeholder when `media.type` is `"component"` or the real asset is
 * missing/fails to load. Media fills the screen (`object-fit: cover`,
 * top-aligned) so aspect differences crop from the bottom.
 */
export function PhoneScreen({ media, placeholder: Placeholder, active, cycle }: PhoneScreenProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Remember which asset failed; a different src/type retries automatically.
  const mediaKey = `${media.type}:${media.src}`;
  const [failedKey, setFailedKey] = useState<string | null>(null);
  const failed = failedKey === mediaKey;

  const usePlaceholder = media.type === "component" || failed;

  // Placeholder entrance sequences run off the `is-playing` class (see
  // screens/screen.module.css). Re-adding it on each activation replays them;
  // removing it when the step leaves view resets them for the next visit.
  useEffect(() => {
    const node = ref.current;
    if (!node || !usePlaceholder) return;
    if (!active) {
      node.classList.remove("is-playing");
      return;
    }
    node.classList.remove("is-playing");
    void node.offsetWidth;
    node.classList.add("is-playing");
  }, [active, cycle, usePlaceholder]);

  let content;
  if (usePlaceholder) {
    content = <Placeholder />;
  } else if (media.type === "video") {
    content = (
      <VideoMedia
        src={media.src}
        poster={media.poster}
        alt={media.alt}
        active={active}
        onError={() => setFailedKey(mediaKey)}
      />
    );
  } else {
    content = (
      <Image
        // Remounting on each activation restarts an animated GIF from frame
        // one (the browser serves the cached file, only the element is new).
        key={`${media.src}-${cycle}`}
        src={media.src}
        alt={media.alt}
        fill
        sizes="(max-width: 1023px) 200px, 262px"
        loading="lazy"
        className={styles.shot}
        // Animated GIFs must bypass the optimizer or they flatten to frame one.
        unoptimized={media.src.endsWith(".gif")}
        onError={() => setFailedKey(mediaKey)}
      />
    );
  }

  return (
    <div ref={ref} className={styles.media} data-active={active || undefined}>
      {content}
    </div>
  );
}

type VideoMediaProps = {
  src: string;
  poster?: string;
  alt: string;
  active: boolean;
  onError: () => void;
};

function VideoMedia({ src, poster, alt, active, onError }: VideoMediaProps) {
  const ref = useRef<HTMLVideoElement>(null);

  // Restart from the beginning every time the step becomes active; stay
  // paused (poster showing) while inactive or under reduced motion.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (!active || prefersReducedMotion()) {
      video.pause();
      return;
    }
    video.currentTime = 0;
    void video.play().catch(() => {});
  }, [active]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={alt}
      className={styles.video}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      onError={onError}
    />
  );
}
