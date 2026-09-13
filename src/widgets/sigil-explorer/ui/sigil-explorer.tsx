"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CornerCross } from "@/shared/ui/corner-cross";
import { SIGIL_ITEMS, SigilItem } from "@/entities/sigil";
import { BracketButton } from "@/shared/ui/bracket-button";
import { useMouseParallax } from "@/shared/lib/use-mouse-parallax";

interface SigilExplorerProps {
  className?: string;
}

export function SigilExplorer({ className = "" }: SigilExplorerProps) {
  const [selectedSigil, setSelectedSigil] = useState<SigilItem | null>(null);
  const containerRef = useMouseParallax<HTMLDivElement>();

  return (
    <section
      ref={containerRef}
      aria-label="Sigil Explorations"
      className={`relative bg-[#070707] border border-[#1c1c1c] overflow-hidden ${className}`}
    >
      <CornerCross position="top-left" />
      <CornerCross position="top-right" />
      <CornerCross position="bottom-left" />
      <CornerCross position="bottom-right" />

      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-[#1c1c1c] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#65625b] font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-1">
            <span>{"//"} EAGLE & SERPENT</span>
          </div>
          <h2 className="font-mono text-base sm:text-xl md:text-2xl font-bold tracking-[0.12em] sm:tracking-[0.14em] text-white uppercase">
            SIGIL EXPLORATIONS & OCCULT TAXONOMY
          </h2>
        </div>

        <p className="font-mono text-[10px] sm:text-[11px] text-[#706c64] tracking-[0.12em] sm:tracking-[0.15em] max-w-xs uppercase">
          Fragmented emblems of ascent, earthbound instinct, and cyclical recurrence.
        </p>
      </div>

      {/* Grid of Sigils */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 divide-x divide-y divide-[#181818] border-b border-[#1c1c1c]">
        {SIGIL_ITEMS.map((sigil) => {
          const isSelected = selectedSigil?.id === sigil.id;

          return (
            <button
              key={sigil.id}
              onClick={() => setSelectedSigil(isSelected ? null : sigil)}
              className={`relative flex flex-col items-center justify-between p-3.5 sm:p-5 md:p-6 text-left transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:bg-[#111] group ${
                isSelected ? "bg-[#111111]" : "hover:bg-[#0b0b0b]"
              }`}
            >
              {/* Top Meta */}
              <div className="w-full flex items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-[0.18em] text-[#55524d] mb-2 sm:mb-4">
                <span>{sigil.code}</span>
                <span className="opacity-70 group-hover:text-[#e6e1da] transition-colors">
                  [+]
                </span>
              </div>

              {/* Artwork Graphic with subtle 3D parallax */}
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 my-2 sm:my-3 flex items-center justify-center pointer-events-none [perspective:600px]">
                <div
                  className="relative w-full h-full flex items-center justify-center will-change-transform"
                  style={{
                    transform:
                      "translate3d(calc(var(--mouse-x, 0) * 3px), calc(var(--mouse-y, 0) * 3px), 0) rotateX(calc(var(--mouse-y, 0) * -1.5deg)) rotateY(calc(var(--mouse-x, 0) * 1.5deg))",
                  }}
                >
                  <Image
                    src={sigil.imageSrc}
                    alt={sigil.name}
                    fill
                    sizes="140px"
                    className="object-contain ink-invert group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(220,214,205,0.05)]"
                  />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="w-full mt-2 sm:mt-4 space-y-0.5 sm:space-y-1 text-center">
                <h3 className="font-mono text-[10px] sm:text-[12px] md:text-[13px] font-semibold tracking-[0.1em] sm:tracking-[0.15em] text-[#dcd6cd] group-hover:text-white uppercase leading-tight">
                  {sigil.name}
                </h3>
                <p className="font-mono text-[8.5px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.18em] text-[#605d57] uppercase leading-tight">
                  {sigil.concept}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Sigil Inspection Banner (if selected) */}
      {selectedSigil && (
        <div className="p-6 md:p-8 bg-[#0c0c0c] border-b border-[#222] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 transition-all animate-in fade-in duration-200">
          <div className="flex items-start sm:items-center gap-3 sm:gap-5">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center border border-[#222] p-1.5 sm:p-2 bg-[#050505]">
              <Image
                src={selectedSigil.imageSrc}
                alt={selectedSigil.name}
                fill
                sizes="64px"
                className="object-contain ink-invert"
              />
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-[#65625b]">
                {selectedSigil.code} {"//"} {selectedSigil.concept}
              </span>
              <h4 className="font-mono text-sm sm:text-base font-bold text-white tracking-[0.14em] sm:tracking-[0.15em] uppercase">
                {selectedSigil.name}
              </h4>
              <p className="font-serif text-[13px] sm:text-[14px] text-[#b5b0a7] italic mt-0.5 sm:mt-1 max-w-xl">
                &ldquo;{selectedSigil.description}&rdquo;
              </p>
            </div>
          </div>

          <BracketButton
            onClick={() => setSelectedSigil(null)}
            variant="subtle"
            className="text-[10px] sm:text-[11px] shrink-0 self-end md:self-center"
          >
            DISMISS
          </BracketButton>
        </div>
      )}
    </section>
  );
}
