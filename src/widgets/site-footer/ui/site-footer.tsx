"use client";

import React from "react";
import Image from "next/image";
import { CornerCross } from "@/shared/ui/corner-cross";

interface SiteFooterProps {
  className?: string;
}

export function SiteFooter({ className = "" }: SiteFooterProps) {
  return (
    <footer
      className={`relative bg-[#070707] border border-[#1c1c1c] overflow-hidden select-none ${className}`}
    >
      <CornerCross position="top-left" />
      <CornerCross position="top-right" />
      <CornerCross position="bottom-left" />
      <CornerCross position="bottom-right" />

      {/* Center Content */}
      <div className="p-6 sm:p-10 md:p-12 flex flex-col items-center text-center space-y-4 sm:space-y-6 max-w-2xl mx-auto">
        {/* Ornamental Divider */}
        <div className="relative w-40 sm:w-64 h-6 sm:h-8 pointer-events-none">
          <Image
            src="/assets/graphics/divider-1.png"
            alt="Occult Divider"
            fill
            sizes="256px"
            className="object-contain ink-invert opacity-80"
          />
        </div>

        {/* Core Philosophical Conclusion */}
        <p className="font-serif text-[14px] sm:text-[17px] text-[#c4beb5] italic leading-relaxed">
          &ldquo;What is great in man is that he is a bridge and not an end:
          what can be loved in man is that he is an overture and a going under.&rdquo;
        </p>

        <div className="w-8 h-[1px] bg-[#3a3834]" />

        {/* Metadata */}
        <div className="font-mono text-[9px] sm:text-[11px] text-[#65625b] tracking-[0.2em] sm:tracking-[0.25em] uppercase space-y-1">
          <p>FRIEDRICH WILHELM NIETZSCHE // 1844–1900</p>
          <p className="text-[#4e4b46]">THE EAGLE & SERPENT // ALSO SPRACH ZARATHUSTRA</p>
        </div>
      </div>
    </footer>
  );
}
