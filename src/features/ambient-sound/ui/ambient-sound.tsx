"use client";

import React from "react";
import { useAmbientDrone } from "@/shared/lib/use-ambient-drone";
import { BracketButton } from "@/shared/ui/bracket-button";

interface AmbientSoundToggleProps {
  className?: string;
}

export function AmbientSoundToggle({ className = "" }: AmbientSoundToggleProps) {
  const { isPlaying, toggleSound } = useAmbientDrone();

  return (
    <div className={`inline-flex items-center ${className}`}>
      <BracketButton
        onClick={toggleSound}
        variant={isPlaying ? "primary" : "subtle"}
        aria-pressed={isPlaying}
        aria-label="Toggle ambient atmospheric drone"
        className="text-[11px] sm:text-[12px] tracking-[0.2em]"
      >
        <span className="flex items-center gap-1.5">
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full ${
              isPlaying ? "bg-[#dcd6cd] animate-ping" : "bg-[#4a4742]"
            }`}
          />
          AUDIO: {isPlaying ? "ACTIVE" : "MUTED"}
        </span>
      </BracketButton>
    </div>
  );
}
