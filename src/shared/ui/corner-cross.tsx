import React from "react";

interface CornerCrossProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "custom";
  className?: string;
  size?: number;
}

export function CornerCross({
  position = "top-left",
  className = "",
  size = 11,
}: CornerCrossProps) {
  const positionClasses = {
    "top-left": "top-2 left-2 md:top-3 md:left-3",
    "top-right": "top-2 right-2 md:top-3 md:right-3",
    "bottom-left": "bottom-2 left-2 md:bottom-3 md:left-3",
    "bottom-right": "bottom-2 right-2 md:bottom-3 md:right-3",
    custom: "",
  }[position];

  return (
    <div
      className={`absolute z-20 pointer-events-none select-none text-[#55524d] flex items-center justify-center font-mono text-[11px] leading-none ${positionClasses} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-70"
      >
        <path
          d="M5.5 0V11M0 5.5H11"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
}
