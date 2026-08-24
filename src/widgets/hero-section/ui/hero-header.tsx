"use client";

import React from "react";
import { BracketButton } from "@/shared/ui/bracket-button";
import { PhilosophicalPath } from "@/entities/philosophy";

interface HeroHeaderProps {
  onEnter: () => void;
  activePath: PhilosophicalPath;
  part?: "full" | "statement" | "quote";
  className?: string;
}

export function HeroHeader({
  onEnter,
  activePath,
  part = "full",
  className = "",
}: HeroHeaderProps) {
  const statementBlock = (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
      <h1 className="font-mono text-3xl sm:text-4xl md:text-4xl lg:text-[52px] font-bold tracking-[0.12em] sm:tracking-[0.14em] leading-[1.08] text-white uppercase select-none">
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
      <div className="max-w-[280px] sm:max-w-xs space-y-1.5 font-mono text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#8e8a83] leading-relaxed">
        <p className="text-[#b5b0a7]">
          HE WHO HAS A WHY TO LIVE
          <br />
          CAN BEAR ALMOST ANY HOW.
        </p>
        <p className="text-[#65625b] text-[9px] sm:text-[10px] tracking-[0.22em] sm:tracking-[0.25em]">
          — NIETZSCHE
        </p>
      </div>

      {/* Interactive Enter Trigger */}
      <div className="pt-1 sm:pt-2">
        <BracketButton onClick={onEnter} aria-label="Enter philosophy archive">
          ENTER
        </BracketButton>
      </div>
    </div>
  );

  const quoteBlock = (
    <div className="space-y-2 sm:space-y-3 max-w-sm bg-[#070707]/70 backdrop-blur-[2px] p-3.5 sm:p-4 rounded-sm border border-[#1c1c1c]/50 md:bg-transparent md:backdrop-blur-none md:p-0 md:border-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
      <div className="flex items-center gap-2 text-[#65625b] font-mono text-[10px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.25em] uppercase">
        <span>{"//"} PHILOSOPHY</span>
        <span className="text-[10px] opacity-60">[{activePath.number}]</span>
      </div>

      <p className="font-serif text-[14px] sm:text-[15px] md:text-[16px] text-[#c4beb5] leading-snug italic transition-opacity duration-300">
        &ldquo;{activePath.quote}&rdquo;
      </p>

      <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] text-[#706c65] tracking-[0.18em] sm:tracking-[0.2em] uppercase">
        — {activePath.source} <span className="opacity-60 font-sans">·</span> {activePath.annotation}
      </p>
    </div>
  );

  if (part === "statement") {
    return <div className={`relative z-20 pointer-events-auto ${className}`}>{statementBlock}</div>;
  }

  if (part === "quote") {
    return <div className={`relative z-20 pointer-events-auto ${className}`}>{quoteBlock}</div>;
  }

  return (
    <div
      className={`relative z-20 flex flex-col justify-between h-full p-6 sm:p-7 md:p-8 lg:p-12 pointer-events-auto ${className}`}
    >
      {statementBlock}
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        {quoteBlock}
      </div>
    </div>
  );
}

