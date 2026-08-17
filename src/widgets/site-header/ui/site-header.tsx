"use client";

import React from "react";
import { AmbientSoundToggle } from "@/features/ambient-sound";
import { SigilGlyph } from "@/shared/ui/sigil-glyph";
import { BracketButton } from "@/shared/ui/bracket-button";

interface SiteHeaderProps {
  onOpenReading: (key?: string) => void;
  onToggleSigils: () => void;
  showSigils: boolean;
  className?: string;
}

export function SiteHeader({
  onOpenReading,
  onToggleSigils,
  showSigils,
  className = "",
}: SiteHeaderProps) {
  return (
    <header
      className={`w-full border-b border-[#1c1c1c] bg-[#050505]/95 backdrop-blur-sm sticky top-0 z-40 px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between font-mono text-[11px] tracking-[0.2em] select-none ${className}`}
    >
      {/* Left Logo / Philosophical Identification */}
      <div className="flex items-center gap-2.5 text-[#8e8a83]">
        <SigilGlyph type="cross" size={14} className="text-[#e6e1da] opacity-90" />
        <span className="font-bold text-white tracking-[0.25em]">
          ZARATHUSTRA
        </span>
        <span className="hidden sm:inline text-[#504d48]">{"//"} NIETZSCHE 1883</span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-4">
        <BracketButton
          onClick={onToggleSigils}
          variant={showSigils ? "primary" : "subtle"}
          className="hidden md:inline-flex text-[11px]"
        >
          {showSigils ? "HIDE SIGILS" : "EXPLORE SIGILS"}
        </BracketButton>

        <BracketButton
          onClick={() => onOpenReading("overman")}
          variant="secondary"
          className="text-[11px]"
        >
          EXCERPTS
        </BracketButton>

        <AmbientSoundToggle />
      </div>
    </header>
  );
}
