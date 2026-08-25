"use client";

import React from "react";
import Image from "next/image";
import { CornerCross } from "@/shared/ui/corner-cross";
import { GeometricAxis } from "@/shared/ui/geometric-axis";
import { useMouseParallax } from "@/shared/lib/use-mouse-parallax";

interface HighestWillSectionProps {
  className?: string;
}

export function HighestWillSection({ className = "" }: HighestWillSectionProps) {
  const parallax = useMouseParallax(0.012);

  return (
    <section
      aria-label="The Highest Will"
      className={`relative flex flex-col justify-between bg-[#070707] border border-[#1c1c1c] overflow-hidden ${className}`}
    >
      <CornerCross position="top-left" />
      <CornerCross position="top-right" />
      <CornerCross position="bottom-left" />
      <CornerCross position="bottom-right" />

      {/* Main Card Content */}
      <div className="relative flex-1 p-6 sm:p-7 md:p-8 flex flex-col justify-between">
        {/* Top Header Tag */}
        <div className="flex items-center justify-between text-[#605d57] font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-6">
          <span>{"//"} THE HIGHEST WILL</span>
          <span className="text-[10px] opacity-60">§ ASCENT</span>
        </div>

        {/* Content & Artwork Split */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center flex-1 my-auto">
          {/* Left Poetry / Manifesto Block */}
          <div className="col-span-7 z-10 space-y-1.5 sm:space-y-3 font-mono text-[11px] sm:text-[13px] md:text-[14px] leading-relaxed tracking-[0.12em] sm:tracking-[0.16em] uppercase text-[#dcd6cd]">
            <p className="text-[#8e8a83]">NOT FOR THE HERD.</p>
            <p className="text-[#8e8a83]">NOT FOR THE PRAISE.</p>
            <p className="text-[#e6e1da] font-semibold">FOR THE HEIGHTS.</p>
            <p className="text-white font-bold">FOR BECOMING.</p>
            <div className="w-6 h-[1px] bg-[#55524d] pt-1" />
          </div>

          {/* Right Mountain Eclipse Artwork */}
          <div className="col-span-5 relative h-full min-h-[200px] sm:min-h-[260px] flex items-center justify-center pointer-events-none py-1">
            <GeometricAxis variant="mountain" />
            <div
              className="relative w-full h-full max-h-[220px] sm:max-h-[270px] flex items-center justify-center transition-transform duration-150 ease-out will-change-transform"
              style={{
                transform: `translate3d(${parallax.x * 0.5}px, ${parallax.y * 0.5}px, 0)`,
              }}
            >
              <Image
                src="/assets/atmosphere/mountain-1.png"
                alt="Solitary Wanderer upon Alpine Peak under Eclipse"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-contain mountain-invert drop-shadow-[0_0_35px_rgba(220,214,205,0.06)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
