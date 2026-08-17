import React from "react";

export type GlyphType =
  | "cross"
  | "sunburst"
  | "trident"
  | "arrow"
  | "knot"
  | "pillar"
  | "compass"
  | "astral"
  | "eclipse"
  | "wheel";

interface SigilGlyphProps {
  type: GlyphType | number;
  className?: string;
  size?: number;
}

export function SigilGlyph({ type, className = "", size = 18 }: SigilGlyphProps) {
  const glyphIndex =
    typeof type === "number"
      ? (["cross", "sunburst", "trident", "arrow", "knot", "pillar", "compass", "astral"][
          type % 8
        ] as GlyphType)
      : type;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none opacity-60 hover:opacity-100 transition-opacity duration-300 ${className}`}
      aria-hidden="true"
    >
      {glyphIndex === "cross" && (
        <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <line x1="10" y1="4" x2="14" y2="4" strokeWidth="0.75" />
          <line x1="10" y1="20" x2="14" y2="20" strokeWidth="0.75" />
          <line x1="4" y1="10" x2="4" y2="14" strokeWidth="0.75" />
          <line x1="20" y1="10" x2="20" y2="14" strokeWidth="0.75" />
        </g>
      )}

      {glyphIndex === "sunburst" && (
        <g stroke="currentColor" strokeWidth="1">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="5" y1="5" x2="19" y2="19" strokeWidth="0.75" />
          <line x1="5" y1="19" x2="19" y2="5" strokeWidth="0.75" />
          <circle cx="12" cy="12" r="3" fill="none" strokeWidth="0.75" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </g>
      )}

      {glyphIndex === "trident" && (
        <g stroke="currentColor" strokeWidth="1">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="6" y1="8" x2="18" y2="8" />
          <line x1="6" y1="8" x2="6" y2="12" />
          <line x1="18" y1="8" x2="18" y2="12" />
          <line x1="8" y1="16" x2="16" y2="16" strokeWidth="0.75" />
          <circle cx="12" cy="5" r="1" fill="currentColor" />
        </g>
      )}

      {glyphIndex === "arrow" && (
        <g stroke="currentColor" strokeWidth="1">
          <line x1="4" y1="12" x2="20" y2="12" />
          <polyline points="14,6 20,12 14,18" />
          <line x1="8" y1="8" x2="8" y2="16" strokeWidth="0.75" />
          <line x1="5" y1="9" x2="5" y2="15" strokeWidth="0.75" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </g>
      )}

      {glyphIndex === "knot" && (
        <g stroke="currentColor" strokeWidth="1">
          <circle cx="9" cy="12" r="4.5" fill="none" />
          <circle cx="15" cy="12" r="4.5" fill="none" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <line x1="12" y1="4" x2="12" y2="7" strokeWidth="0.75" />
          <line x1="12" y1="17" x2="12" y2="20" strokeWidth="0.75" />
        </g>
      )}

      {glyphIndex === "pillar" && (
        <g stroke="currentColor" strokeWidth="1">
          <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1.25" />
          <line x1="7" y1="3" x2="17" y2="3" strokeWidth="1" />
          <line x1="7" y1="21" x2="17" y2="21" strokeWidth="1" />
          <line x1="9" y1="8" x2="15" y2="8" strokeWidth="0.75" />
          <line x1="9" y1="16" x2="15" y2="16" strokeWidth="0.75" />
          <circle cx="12" cy="12" r="2" fill="none" strokeWidth="0.75" />
        </g>
      )}

      {glyphIndex === "compass" && (
        <g stroke="currentColor" strokeWidth="0.85">
          <circle cx="12" cy="12" r="6" strokeDasharray="1 2" />
          <line x1="12" y1="1" x2="12" y2="23" strokeWidth="1" />
          <line x1="1" y1="12" x2="23" y2="12" strokeWidth="1" />
          <polygon points="12,7 13.5,12 12,17 10.5,12" fill="currentColor" />
        </g>
      )}

      {glyphIndex === "astral" && (
        <g stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="7" fill="none" />
          <line x1="12" y1="2" x2="12" y2="22" strokeWidth="0.75" />
          <line x1="2" y1="12" x2="22" y2="12" strokeWidth="0.75" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <circle cx="12" cy="5" r="0.75" fill="currentColor" />
          <circle cx="12" cy="19" r="0.75" fill="currentColor" />
          <circle cx="5" cy="12" r="0.75" fill="currentColor" />
          <circle cx="19" cy="12" r="0.75" fill="currentColor" />
        </g>
      )}

      {glyphIndex === "eclipse" && (
        <g stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="5" fill="#050505" stroke="currentColor" strokeWidth="1.5" />
          <line x1="12" y1="1" x2="12" y2="6" strokeWidth="0.75" />
          <line x1="12" y1="18" x2="12" y2="23" strokeWidth="0.75" />
          <line x1="1" y1="12" x2="6" y2="12" strokeWidth="0.75" />
          <line x1="18" y1="12" x2="23" y2="12" strokeWidth="0.75" />
        </g>
      )}

      {glyphIndex === "wheel" && (
        <g stroke="currentColor" strokeWidth="0.75">
          <circle cx="12" cy="12" r="8" fill="none" />
          <circle cx="12" cy="12" r="4" fill="none" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="12" y1="4" x2="12" y2="20" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </g>
      )}
    </svg>
  );
}

export function SigilStrip({ count = 8, className = "" }: { count?: number; className?: string }) {
  const glyphs: GlyphType[] = [
    "cross",
    "sunburst",
    "trident",
    "arrow",
    "knot",
    "pillar",
    "compass",
    "astral",
  ];

  return (
    <div
      className={`flex items-center justify-between gap-2 px-4 py-3 border-t border-[#1a1a1a] text-[#706c64] select-none ${className}`}
    >
      {glyphs.slice(0, count).map((g, idx) => (
        <SigilGlyph key={idx} type={g} size={15} className="hover:text-[#e6e1da] transition-colors" />
      ))}
    </div>
  );
}
