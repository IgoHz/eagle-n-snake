"use client";

import React, { useEffect, useRef } from "react";
import { ZARATHUSTRA_READINGS } from "@/entities/philosophy";
import { CornerCross } from "@/shared/ui/corner-cross";
import { BracketButton } from "@/shared/ui/bracket-button";
import { SigilGlyph } from "@/shared/ui/sigil-glyph";

interface ReadingModalProps {
  isOpen: boolean;
  onClose: () => void;
  readingKey?: string;
}

export function ReadingModal({
  isOpen,
  onClose,
  readingKey = "overman",
}: ReadingModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const reading = ZARATHUSTRA_READINGS[readingKey] || ZARATHUSTRA_READINGS.overman;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        try {
          dialog.showModal();
        } catch {
          // Fallback if already open
        }
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
    };

    // Fallback light-dismiss for browsers without closedby support
    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target !== dialog) return;

      const rect = dialog.getBoundingClientRect();
      const isInside =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;

      if (!isInside) {
        dialog.close();
      }
    };

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("click", handleBackdropClick);

    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("click", handleBackdropClick);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="reading-dialog-title"
      className="m-auto bg-[#070707] text-[#dcd6cd] border border-[#2a2a2a] p-0 max-w-2xl w-[92vw] max-h-[85vh] rounded-none shadow-[0_0_80px_rgba(0,0,0,0.9)] backdrop:bg-black/80 backdrop:backdrop-blur-sm transition-all overflow-hidden focus:outline-none"
    >
      <div className="relative p-6 sm:p-8 md:p-10 overflow-y-auto max-h-[85vh] flex flex-col">
        <CornerCross position="top-left" />
        <CornerCross position="top-right" />
        <CornerCross position="bottom-left" />
        <CornerCross position="bottom-right" />

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#1c1c1c] pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[#706c64] font-mono text-[11px] tracking-[0.25em] uppercase mb-1.5">
              <SigilGlyph type="cross" size={12} />
              <span>ARCHIVAL EXCERPT // NIETZSCHE</span>
            </div>
            <h2
              id="reading-dialog-title"
              className="font-mono text-base sm:text-lg text-white font-semibold tracking-[0.15em] uppercase"
            >
              {reading.title}
            </h2>
            <p className="font-mono text-[12px] text-[#7e7a73] tracking-[0.1em] mt-0.5">
              {reading.subtitle} · {reading.source}
            </p>
          </div>

          <BracketButton
            onClick={onClose}
            variant="subtle"
            className="text-[12px] -mt-2 -mr-2"
            aria-label="Close modal"
          >
            CLOSE
          </BracketButton>
        </div>

        {/* Modal Content Sections */}
        <div className="space-y-8 my-2">
          {reading.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="font-mono text-[13px] tracking-[0.2em] uppercase text-[#a39f97] border-l-2 border-[#555] pl-3">
                {sec.heading}
              </h3>
              <div className="space-y-3 pl-3 text-[#c4beb5] font-serif text-[15px] sm:text-[16px] leading-relaxed italic">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>&ldquo;{p}&rdquo;</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-5 border-t border-[#1c1c1c] flex items-center justify-between font-mono text-[11px] text-[#605d57] tracking-[0.2em]">
          <span>FRIEDRICH NIETZSCHE // 1883</span>
          <BracketButton onClick={onClose} variant="secondary">
            DISMISS
          </BracketButton>
        </div>
      </div>
    </dialog>
  );
}
