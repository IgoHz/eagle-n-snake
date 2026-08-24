"use client";

import React, { useState } from "react";
import { CornerCross } from "@/shared/ui/corner-cross";
import { HeroArtwork } from "./hero-artwork";
import { HeroHeader } from "./hero-header";
import { PathNavigation } from "@/features/path-navigation";
import { PHILOSOPHICAL_PATHS, PhilosophicalPath } from "@/entities/philosophy";

interface HeroSectionProps {
  onOpenReading: (key?: string) => void;
  className?: string;
}

export function HeroSection({ onOpenReading, className = "" }: HeroSectionProps) {
  const [activePath, setActivePath] = useState<PhilosophicalPath>(PHILOSOPHICAL_PATHS[0]);

  return (
    <section
      aria-label="Hero - Become Who You Are"
      className={`relative flex flex-col justify-between bg-[#070707] border border-[#1c1c1c] overflow-hidden ${className}`}
    >
      {/* Editorial Corner Crosshairs (Top) */}
      <CornerCross position="top-left" />
      <CornerCross position="top-right" />

      {/* Mobile Editorial Composition (< md) */}
      <div className="flex md:hidden flex-col justify-between p-6 space-y-3">
        {/* Top Content: Heading + Aphorism + Enter Button (Zero Artwork Collision) */}
        <div className="relative z-20">
          <HeroHeader
            part="statement"
            onEnter={() => onOpenReading("overman")}
            activePath={activePath}
          />
        </div>

        {/* Central Creature Artwork: Prominent, Centered */}
        <div className="relative z-10 w-full h-[280px] sm:h-[340px] -my-1 flex items-center justify-center pointer-events-none">
          <HeroArtwork className="min-h-0 h-full w-full max-w-[340px] sm:max-w-[400px]" />
        </div>

        {/* Bottom Quote Layer */}
        <div className="relative z-20">
          <HeroHeader
            part="quote"
            onEnter={() => onOpenReading("overman")}
            activePath={activePath}
          />
        </div>
      </div>

      {/* Tablet & Desktop 2-Column Grid (md+) */}
      <div className="hidden md:grid relative flex-1 grid-cols-12 md:min-h-[580px] lg:min-h-[740px] items-stretch">
        {/* Left Typography Column */}
        <div className="col-span-6 lg:col-span-5 z-20 flex flex-col justify-between">
          <HeroHeader
            part="full"
            onEnter={() => onOpenReading("overman")}
            activePath={activePath}
          />
        </div>

        {/* Right Artwork Column (In-Flow on Tablet & Desktop) */}
        <div className="col-span-6 lg:col-span-7 relative flex items-center justify-center pointer-events-none overflow-hidden">
          <HeroArtwork />
        </div>
      </div>

      {/* Bottom Path Navigation: 01, 02, 03 */}
      <PathNavigation
        activePathId={activePath.id}
        onSelectPath={(path) => setActivePath(path)}
      />
    </section>
  );
}
