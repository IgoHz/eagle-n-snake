"use client";

import React from "react";
import { PHILOSOPHICAL_PATHS, PhilosophicalPath } from "@/entities/philosophy";

interface PathNavigationProps {
  activePathId: string;
  onSelectPath: (path: PhilosophicalPath) => void;
  className?: string;
}

export function PathNavigation({
  activePathId,
  onSelectPath,
  className = "",
}: PathNavigationProps) {
  return (
    <div
      className={`grid grid-cols-3 border-t border-[#1a1a1a] select-none ${className}`}
      role="tablist"
      aria-label="Philosophical Paths"
    >
      {PHILOSOPHICAL_PATHS.map((path, index) => {
        const isActive = activePathId === path.id;
        const isMiddle = index === 1;

        return (
          <button
            key={path.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectPath(path)}
            className={`relative flex flex-col text-left py-4 px-3 sm:py-5 sm:px-4 md:py-6 md:px-5 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:bg-[#111] group ${
              isMiddle ? "border-x border-[#1a1a1a]" : ""
            } ${isActive ? "bg-[#0c0c0c]" : "hover:bg-[#090909]"}`}
          >
            {/* Active top indicator hairline */}
            {isActive && (
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#dcd6cd]" />
            )}

            {/* Path Number */}
            <span
              className={`font-mono text-[11px] sm:text-[12px] tracking-[0.25em] mb-1.5 transition-colors duration-200 ${
                isActive ? "text-[#e6e1da] font-semibold" : "text-[#55524d] group-hover:text-[#88847d]"
              }`}
            >
              {path.number}
            </span>

            {/* Path Title */}
            <span
              className={`font-mono text-[11px] sm:text-[13px] md:text-[14px] leading-tight tracking-[0.14em] uppercase transition-colors duration-200 ${
                isActive ? "text-white font-medium" : "text-[#8e8a83] group-hover:text-[#dcd6cd]"
              }`}
            >
              {path.title}
              <br />
              <span className="opacity-90">{path.subtitle}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
