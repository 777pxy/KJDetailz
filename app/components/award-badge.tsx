import Image from "next/image";

// Matches the line-height of the premium-services page h1
// (font-size clamp(2.4rem,6vw,5.5rem) * leading-[1.04]).
const DEFAULT_SIZE = "clamp(2.496rem, 6.24vw, 5.72rem)";

export function AwardBadge({ size = DEFAULT_SIZE }: { size?: string }) {
  return (
    <div
      className="relative shrink-0 rounded-full border border-primary/30 bg-background p-1.5"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-[-6px] rounded-full border border-primary/10" />
      <Image
        src="/award_badge.png"
        alt="Blandford Business Awards Winner 2026 badge"
        fill
        sizes="160px"
        className="rounded-full object-contain p-1"
      />
    </div>
  );
}
