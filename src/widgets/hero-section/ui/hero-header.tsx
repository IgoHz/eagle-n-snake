"use client";

import React from "react";
import { BracketButton } from "@/shared/ui/bracket-button";
import { PhilosophicalPath } from "@/entities/philosophy";

interface HeroHeaderProps {
  onEnter: () => void;
  activePath: PhilosophicalPath;
  className?: string;
}

export function HeroHeader({
  onEnter,
  activePath,
  className = "",
}: HeroHeaderProps) {
  return (
    <div
      className={`relative z-20 flex flex-col justify-between h-full p-6 sm:p-8 md:p-10 lg:p-12 pointer-events-auto ${className}`}
    >
      {/* Top Block: Main Statement */}
      <div className="space-y-6 sm:space-y-8">
        <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-[0.14em] leading-[1.08] text-white uppercase select-none">
          BECOME
          <br />
          WHO YOU
          <br />
          ARE.
          <span className="animate-cursor-blink text-[#e6e1da] font-normal ml-1 inline-block">
            _
          </span>
        </h1>

        {/* Nietzsche Subtitle Aphorism */}
        <div className="max-w-[280px] sm:max-w-xs space-y-1.5 font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#8e8a83] leading-relaxed">
          <p className="text-[#b5b0a7]">
            HE WHO HAS A WHY TO LIVE
            <br />
            CAN BEAR ALMOST ANY HOW.
          </p>
          <p className="text-[#65625b] text-[10px] tracking-[0.25em]">
            — NIETZSCHE
          </p>
        </div>

        {/* Interactive Enter Trigger */}
        <div className="pt-2">
          <BracketButton onClick={onEnter} aria-label="Enter philosophy archive">
            ENTER
          </BracketButton>
        </div>
      </div>

      {/* Bottom Block: Philosophy Quote Section */}
      <div className="mt-12 sm:mt-16 md:mt-20 max-w-sm space-y-3">
        <div className="flex items-center gap-2 text-[#65625b] font-mono text-[11px] tracking-[0.25em] uppercase">
          <span>{"//"} PHILOSOPHY</span>
          <span className="text-[10px] opacity-60">[{activePath.number}]</span>
        </div>

        <p className="font-serif text-[15px] sm:text-[16px] text-[#c4beb5] leading-snug italic transition-opacity duration-300">
          &ldquo;{activePath.quote}&rdquo;
        </p>

        <p className="font-mono text-[10px] sm:text-[11px] text-[#706c65] tracking-[0.2em] uppercase">
          — {activePath.source} <span className="opacity-60 font-sans">·</span> {activePath.annotation}
        </p>
      </div>
    </div>
  );
}
