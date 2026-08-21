import Image from "next/image";

type TenifyLogoProps = {
  /** Compact lockup for nav; full is the same lockup sized for footer. */
  variant?: "mark" | "full";
  className?: string;
  priority?: boolean;
};

const VARIANTS = {
  mark: {
    src: "/brand/tenify-logo-mark.png",
    width: 835,
    height: 279,
    className: "h-5 w-auto sm:h-7",
  },
  full: {
    src: "/brand/tenify-logo.png",
    width: 835,
    height: 279,
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
