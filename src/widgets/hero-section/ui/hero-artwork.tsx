"use client";

import React from "react";
import Image from "next/image";
import { GeometricAxis } from "@/shared/ui/geometric-axis";
import { useMouseParallax } from "@/shared/lib/use-mouse-parallax";

interface HeroArtworkProps {
  className?: string;
}

export function HeroArtwork({ className = "" }: HeroArtworkProps) {
  const parallax = useMouseParallax(0.015);

  return (
    <div
      className={`relative w-full h-full min-h-[260px] sm:min-h-[320px] md:min-h-[520px] lg:min-h-[720px] flex items-center justify-center overflow-hidden select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Background Geometric Axis & Celestial Radiance */}
      <GeometricAxis variant="hero" />

      {/* Main Eagle & Serpent Inverted High-Res Creature */}
      <div
        className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
        }}
      >
        <div className="relative w-[88%] sm:w-[82%] md:w-[90%] max-w-[300px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[620px] aspect-[7/10] sm:aspect-[3/4]">
          <Image
            src="/assets/creature/hero-eagle-n-snake.png"
            alt="Friedrich Nietzsche's Eagle and Serpent Creature"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 600px"
            className="object-contain ink-invert drop-shadow-[0_0_40px_rgba(220,214,205,0.06)]"
          />
        </div>
      </div>
    </div>
  );
}
