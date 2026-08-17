"use client";

import React from "react";
import Image from "next/image";
import { CornerCross } from "@/shared/ui/corner-cross";
import { SigilStrip } from "@/shared/ui/sigil-glyph";
import { BracketButton } from "@/shared/ui/bracket-button";
import { GeometricAxis } from "@/shared/ui/geometric-axis";
import { useMouseParallax } from "@/shared/lib/use-mouse-parallax";

interface ZarathustraSectionProps {
  onOpenReading: (key?: string) => void;
  className?: string;
}

export function ZarathustraSection({
  onOpenReading,
  className = "",
}: ZarathustraSectionProps) {
  const parallax = useMouseParallax(0.01);

  return (
    <section
      aria-label="Thus Spoke Zarathustra"
      className={`relative flex flex-col justify-between bg-[#070707] border border-[#1c1c1c] overflow-hidden ${className}`}
    >
      <CornerCross position="top-left" />
      <CornerCross position="top-right" />
      <CornerCross position="bottom-left" />
      <CornerCross position="bottom-right" />

      {/* Main Card Content */}
      <div className="relative flex-1 p-6 sm:p-7 md:p-8 flex flex-col justify-between">
        {/* Top Header Tag */}
        <div className="flex items-center justify-between text-[#605d57] font-mono text-[11px] tracking-[0.25em] uppercase mb-4 sm:mb-6">
          <span>{"//"} THUS SPOKE ZARATHUSTRA</span>
          <span className="text-[10px] opacity-60">§ OVERMAN</span>
        </div>

        {/* Content & Artwork Split */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center flex-1 my-auto">
          {/* Left Text Block */}
          <div className="col-span-7 sm:col-span-7 z-10 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div>
              <h2 className="font-mono text-xl sm:text-2xl lg:text-[26px] font-bold tracking-[0.14em] leading-tight text-white uppercase">
                THUS SPOKE
                <br />
                ZARATHUSTRA.
              </h2>
              <div className="w-6 h-[1px] bg-[#55524d] my-3 sm:my-4" />
            </div>

            <div className="font-serif text-[14px] sm:text-[15px] md:text-[16px] text-[#c4beb5] leading-relaxed italic space-y-1">
              <p>I teach you</p>
              <p>the Overman.</p>
              <p>Man is something</p>
              <p>that shall be</p>
              <p>overcome.</p>
            </div>

            <div className="w-6 h-[1px] bg-[#55524d] my-2" />

            <div>
              <BracketButton
                onClick={() => onOpenReading("overman")}
                aria-label="Read Zarathustra Overman excerpt"
              >
                READ
              </BracketButton>
            </div>
          </div>

          {/* Right Vertical Creature Artwork */}
          <div className="col-span-5 sm:col-span-5 relative h-full min-h-[220px] sm:min-h-[260px] flex items-center justify-center pointer-events-none">
            <GeometricAxis variant="vertical" />
            <div
              className="relative w-full h-full max-h-[300px] flex items-center justify-center transition-transform duration-150 ease-out will-change-transform"
              style={{
                transform: `translate3d(${parallax.x * 0.7}px, ${parallax.y * 0.7}px, 0)`,
              }}
            >
              <Image
                src="/assets/creature/vertical-eagle-n-snake.png"
                alt="Vertical Eagle and Serpent Emblem"
                fill
                sizes="(max-width: 768px) 40vw, 260px"
                className="object-contain ink-invert drop-shadow-[0_0_25px_rgba(220,214,205,0.08)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sigil Strip */}
      <SigilStrip count={8} />
    </section>
  );
}
