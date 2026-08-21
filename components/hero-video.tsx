const VIDEO_SRC = "/landing/tenify-showcase.mp4";
const POSTER_SRC = "/landing/tenify-showcase-poster.jpg";

export function HeroVideo() {
  return (
    <div className="relative w-full max-w-[900px]">
      <div className="relative overflow-hidden rounded-[var(--radius-lg)] border-[3px] border-jade-900 shadow-[0_24px_56px_rgba(26,28,28,0.18)]">
        <video
          className="pointer-events-none aspect-video w-full bg-jade-900 object-cover"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Tenify product showcase"
        />
      </div>
    </div>
  );
}
