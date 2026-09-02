"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "./use-reduced-motion";

/**
 * Hook for smooth, performant pointer parallax effect.
 * Attaches pointermove listener and uses requestAnimationFrame lerping
 * to write `--mouse-x` and `--mouse-y` CSS variables on the returned container ref
 * without triggering React component re-renders.
 */
export function useMouseParallax<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", "0");
        containerRef.current.style.setProperty("--mouse-y", "0");
      }
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number | null = null;
    let isRunning = false;

    const updateFrame = () => {
      // Atmospheric, smooth interpolation
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;

      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", currentX.toFixed(4));
        containerRef.current.style.setProperty("--mouse-y", currentY.toFixed(4));
      }

      const diffX = Math.abs(targetX - currentX);
      const diffY = Math.abs(targetY - currentY);

      if (diffX > 0.0001 || diffY > 0.0001) {
        rafId = requestAnimationFrame(updateFrame);
      } else {
        // Snap to exact target to allow RAF to idle when cursor is resting
        currentX = targetX;
        currentY = targetY;
        if (containerRef.current) {
          containerRef.current.style.setProperty("--mouse-x", currentX.toFixed(4));
          containerRef.current.style.setProperty("--mouse-y", currentY.toFixed(4));
        }
        isRunning = false;
        rafId = null;
      }
    };

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(updateFrame);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      // Ignore touch events to preserve standard touch/mobile behavior
      if (e.pointerType === "touch") {
        return;
      }

      const { innerWidth, innerHeight } = window;
      if (innerWidth === 0 || innerHeight === 0) return;

      // Normalized coordinates from -1 (top/left) to +1 (bottom/right)
      const rawX = (e.clientX / innerWidth - 0.5) * 2;
      const rawY = (e.clientY / innerHeight - 0.5) * 2;

      targetX = Math.max(-1, Math.min(1, rawX));
      targetY = Math.max(-1, Math.min(1, rawY));

      startAnimation();
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
      startAnimation();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [reducedMotion]);

  return containerRef;
}
