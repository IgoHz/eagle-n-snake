"use client";

import React from "react";
import { AmbientSoundToggle } from "@/features/ambient-sound";
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
      className={`w-full max-w-full border-b border-[#1c1c1c] bg-[#050505]/95 backdrop-blur-sm sticky top-0 z-40 select-none overflow-hidden ${className}`}
    >
      <div className="w-full flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 md:px-8 py-2 sm:py-2.5 font-mono text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.2em] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-x-contain">
        {/* Left Logo / Philosophical Identification */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 text-[#8e8a83] shrink-0">
          <span className="font-bold text-white tracking-[0.18em] sm:tracking-[0.25em] whitespace-nowrap">
            ZARATHUSTRA
          </span>
          <span className="hidden sm:inline text-[#504d48] whitespace-nowrap">{"//"} NIETZSCHE 1883</span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <div className="hidden md:block">
            <BracketButton
              onClick={onToggleSigils}
              variant={showSigils ? "primary" : "subtle"}
              className="text-[10px] sm:text-[11px]"
            >
              {showSigils ? "HIDE SIGILS" : "EXPLORE SIGILS"}
            </BracketButton>
          </div>

          <BracketButton
            onClick={() => onOpenReading("overman")}
            variant="secondary"
            className="text-[10px] sm:text-[11px]"
          >
            EXCERPTS
          </BracketButton>

          <AmbientSoundToggle />
        </div>
      </div>
    </header>
  );
}
