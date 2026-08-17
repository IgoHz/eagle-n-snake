import React from "react";

interface GeometricAxisProps {
  className?: string;
  variant?: "hero" | "vertical" | "mountain";
}

export function GeometricAxis({ className = "", variant = "hero" }: GeometricAxisProps) {
  if (variant === "mountain") {
    return (
      <div
        className={`absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-40 select-none ${className}`}
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Radiant eclipse lines */}
          <g stroke="currentColor" strokeWidth="0.5" className="text-[#605d57]">
            <circle cx="300" cy="220" r="140" strokeDasharray="2 4" />
            <circle cx="300" cy="220" r="220" strokeDasharray="1 6" />
            <line x1="300" y1="20" x2="300" y2="420" strokeWidth="0.75" />
            <line x1="100" y1="220" x2="500" y2="220" strokeWidth="0.75" />
            <line x1="160" y1="80" x2="440" y2="360" strokeDasharray="4 4" />
            <line x1="440" y1="80" x2="160" y2="360" strokeDasharray="4 4" />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div
        className={`absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-45 select-none ${className}`}
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 400 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Vertical axis with ticks */}
          <g stroke="currentColor" strokeWidth="0.75" className="text-[#757169]">
            <line x1="200" y1="30" x2="200" y2="670" />
            {/* Horizontal ticks */}
            <line x1="185" y1="60" x2="215" y2="60" />
            <line x1="170" y1="180" x2="230" y2="180" />
            <line x1="188" y1="320" x2="212" y2="320" />
            <line x1="180" y1="460" x2="220" y2="460" />
            <line x1="190" y1="600" x2="210" y2="600" />
            {/* Diamond anchors */}
            <polygon points="200,25 204,35 200,45 196,35" fill="currentColor" />
            <polygon points="200,675 204,665 200,655 196,665" fill="currentColor" />
            {/* Celestial circle */}
            <circle cx="200" cy="90" r="28" strokeDasharray="2 3" strokeWidth="0.5" />
            <circle cx="200" cy="90" r="1.5" fill="currentColor" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-40 select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full max-h-[850px]"
        viewBox="0 0 800 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="0.75" className="text-[#65625b]">
          {/* Central vertical needle */}
          <line x1="400" y1="30" x2="400" y2="970" strokeWidth="0.85" />

          {/* Needle head & tail thorns */}
          <polygon points="400,20 405,35 400,50 395,35" fill="currentColor" />
          <polygon points="400,980 405,965 400,950 395,965" fill="currentColor" />

          {/* Horizontal cross axes */}
          <line x1="280" y1="120" x2="520" y2="120" strokeDasharray="3 3" />
          <line x1="220" y1="380" x2="580" y2="380" strokeDasharray="4 2" />
          <line x1="320" y1="620" x2="480" y2="620" />
          <line x1="360" y1="820" x2="440" y2="820" />

          {/* Celestial arc */}
          <path
            d="M 280 200 A 150 150 0 0 1 520 200"
            strokeDasharray="2 4"
            strokeWidth="0.6"
            fill="none"
          />

          {/* Cross ticks on axis */}
          <line x1="390" y1="70" x2="410" y2="70" />
          <line x1="392" y1="240" x2="408" y2="240" />
          <line x1="390" y1="500" x2="410" y2="500" />
          <line x1="392" y1="740" x2="408" y2="740" />

          {/* Small corner registration marks inside canvas */}
          <path d="M 120 120 L 140 120 M 120 120 L 120 140" strokeWidth="0.5" />
          <path d="M 680 120 L 660 120 M 680 120 L 680 140" strokeWidth="0.5" />
          <path d="M 120 880 L 140 880 M 120 880 L 120 860" strokeWidth="0.5" />
          <path d="M 680 880 L 660 880 M 680 880 L 680 860" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}
