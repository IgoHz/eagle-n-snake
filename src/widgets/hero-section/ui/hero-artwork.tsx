"use client";

import React from "react";
import Image from "next/image";
import { GeometricAxis } from "@/shared/ui/geometric-axis";
import { useMouseParallax } from "@/shared/lib/use-mouse-parallax";

interface HeroArtworkProps {
  className?: string;
}

export function HeroArtwork({ className = "" }: HeroArtworkProps) {
  const containerRef = useMouseParallax<HTMLDivElement>();

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-0 md:min-h-[520px] lg:min-h-[720px] flex items-center justify-center overflow-hidden select-none pointer-events-none [perspective:1000px] ${className}`}
      aria-hidden="true"
    >
      {/* Background Geometric Axis & Celestial Radiance (subtle counter depth) */}
      <div
        className="absolute inset-0 flex items-center justify-center will-change-transform pointer-events-none"
        style={{
          transform:
            "translate3d(calc(var(--mouse-x, 0) * -3px), calc(var(--mouse-y, 0) * -3px), 0) rotateX(calc(var(--mouse-y, 0) * 1.5deg)) rotateY(calc(var(--mouse-x, 0) * -1.5deg))",
        }}
      >
        <GeometricAxis variant="hero" />
      </div>

      {/* Main Eagle & Serpent Inverted High-Res Creature (subtle 3D angle + restrained shift) */}
      <div
        className="relative z-10 w-full h-full flex items-center justify-center will-change-transform"
        style={{
          transform:
            "translate3d(calc(var(--mouse-x, 0) * 9px), calc(var(--mouse-y, 0) * 9px), 0) rotateX(calc(var(--mouse-y, 0) * -4deg)) rotateY(calc(var(--mouse-x, 0) * 4deg))",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative w-auto h-full max-w-[300px] sm:max-w-[380px] md:w-[90%] md:max-w-[460px] lg:max-w-[620px] aspect-[7/10] sm:aspect-[3/4]">
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
