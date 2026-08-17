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
      {/* Editorial Corner Crosshairs */}
      <CornerCross position="top-left" />
      <CornerCross position="top-right" />
      <CornerCross position="bottom-left" />
      <CornerCross position="bottom-right" />

      {/* Main Body Grid: Overlay Hero Header + Creature Artwork */}
      <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-[560px] md:min-h-[640px] lg:min-h-[740px]">
        {/* Left Typography Column */}
        <div className="lg:col-span-5 z-20 flex flex-col justify-between">
          <HeroHeader
            onEnter={() => onOpenReading("overman")}
            activePath={activePath}
          />
        </div>

        {/* Center/Right Artwork Column */}
        <div className="lg:col-span-7 absolute inset-0 lg:relative flex items-center justify-center pointer-events-none">
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
