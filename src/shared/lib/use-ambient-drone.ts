"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function useAmbientDrone() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const toggleSound = useCallback(() => {
    if (isPlaying) {
      // Fade out
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(
          0.0001,
          audioCtxRef.current.currentTime,
          0.5
        );
        setTimeout(() => {
          oscillatorsRef.current.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {}
          });
          oscillatorsRef.current = [];
          setIsPlaying(false);
        }, 600);
      } else {
        setIsPlaying(false);
      }
    } else {
      // Initialize AudioContext
      try {
        const AudioContextClass =
          window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
        // Fade in to 0.08 (subtle, non-piercing)
        masterGain.gain.exponentialRampToValueAtTime(0.065, ctx.currentTime + 2.5);

        // Lowpass filter for warm dark rumble
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(140, ctx.currentTime);
        filter.Q.setValueAtTime(3, ctx.currentTime);

        masterGain.connect(filter);
        filter.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Sub oscillator: fundamental 55Hz (A1)
        const osc1 = ctx.createOscillator();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(55, ctx.currentTime);

        // Detuned harmonic oscillator: 55.4Hz for binaural beating
        const osc2 = ctx.createOscillator();
        osc2.type = "sawtooth";
        osc2.frequency.setValueAtTime(55.4, ctx.currentTime);
        const osc2Gain = ctx.createGain();
        osc2Gain.gain.setValueAtTime(0.3, ctx.currentTime);
        osc2.connect(osc2Gain);
        osc2Gain.connect(masterGain);

        // Overtone oscillator: 110Hz (A2)
        const osc3 = ctx.createOscillator();
        osc3.type = "sine";
        osc3.frequency.setValueAtTime(110, ctx.currentTime);
        const osc3Gain = ctx.createGain();
        osc3Gain.gain.setValueAtTime(0.2, ctx.currentTime);
        osc3.connect(osc3Gain);
        osc3Gain.connect(masterGain);

        osc1.connect(masterGain);

        osc1.start();
        osc2.start();
        osc3.start();

        oscillatorsRef.current = [osc1, osc2, osc3];
        setIsPlaying(true);
      } catch (e) {
        console.error("AudioContext initialization failed", e);
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {}
      });
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return { isPlaying, toggleSound };
}
