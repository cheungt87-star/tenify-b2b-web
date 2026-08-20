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
    width: 368,
    height: 96,
    className: "h-7 w-auto sm:h-8",
  },
  full: {
    src: "/brand/tenify-logo.png",
    width: 353,
    height: 120,
    className: "h-10 w-auto sm:h-12",
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
      className={[asset.className, className].filter(Boolean).join(" ")}
    />
  );
}
