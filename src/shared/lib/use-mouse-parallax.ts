"use client";

import { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "./use-reduced-motion";

interface ParallaxOffset {
  x: number;
  y: number;
}

export function useMouseParallax(factor: number = 0.02): ParallaxOffset {
  const [offset, setOffset] = useState<ParallaxOffset>({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;
      targetX = normX * factor * 30;
      targetY = normY * factor * 30;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      setOffset({ x: currentX, y: currentY });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [factor, reducedMotion]);

  if (reducedMotion) {
    return { x: 0, y: 0 };
  }

  return offset;
}
