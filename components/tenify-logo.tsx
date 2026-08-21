import Image from "next/image";

type TenifyLogoProps = {
  /** Compact mark + wordmark for nav; full lockup includes the tagline. */
  variant?: "mark" | "full";
  className?: string;
  priority?: boolean;
};

const VARIANTS = {
  mark: {
    src: "/brand/tenify-logo-mark.png",
    width: 1849,
    height: 755,
    className: "h-6 w-auto sm:h-9",
  },
  full: {
    src: "/brand/tenify-logo.png",
    width: 1849,
    height: 819,
    className: "h-10 w-auto sm:h-11",
  },
} as const;

export function TenifyLogo({
  variant = "mark",
  className,
  priority = false,
}: TenifyLogoProps) {
  const asset = VARIANTS[variant];

  return (
    <Image
      src={asset.src}
      alt="Tenify"
      width={asset.width}
      height={asset.height}
      priority={priority}
      unoptimized
      className={["object-contain", asset.className, className]
        .filter(Boolean)
        .join(" ")}
      style={{ width: "auto" }}
    />
  );
}
