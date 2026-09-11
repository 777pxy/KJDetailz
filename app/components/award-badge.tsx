import Image from "next/image";

export function AwardBadge({ size = 72 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 rounded-full border border-primary/30 p-1.5"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-[-6px] rounded-full border border-primary/10" />
      <Image
        src="/award_badge.png"
        alt="Blandford Business Awards Winner 2026 badge"
        fill
        sizes={`${size}px`}
        className="rounded-full object-contain p-1"
      />
    </div>
  );
}
