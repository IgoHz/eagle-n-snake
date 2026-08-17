import React from "react";

interface TextureOverlayProps {
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export function TextureOverlay({
  intensity = "low",
  className = "",
}: TextureOverlayProps) {
  const opacityMap = {
    low: "opacity-[0.035]",
    medium: "opacity-[0.06]",
    high: "opacity-[0.09]",
  };

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Film grain / paper noise */}
      <div
        className={`absolute inset-0 bg-repeat ${opacityMap[intensity]} mix-blend-screen`}
        style={{
          backgroundImage: "url('/assets/textures/paper-noise.png')",
          backgroundSize: "600px 400px",
        }}
      />

      {/* Scratched metal subtle edge marks */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/textures/scratched-metal.png')",
        }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
}
