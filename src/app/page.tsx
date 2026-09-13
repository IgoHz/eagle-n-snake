"use client";

import React, { useState } from "react";
import { SiteHeader } from "@/widgets/site-header";
import { HeroSection } from "@/widgets/hero-section";
import { ZarathustraSection } from "@/widgets/zarathustra-section";
import { HighestWillSection } from "@/widgets/highest-will-section";
import { SigilExplorer } from "@/widgets/sigil-explorer";
import { SiteFooter } from "@/widgets/site-footer";
import { AuthorSignature } from "@/widgets/author-signature";
import { ReadingModal } from "@/features/reading-modal";
import { TextureOverlay } from "@/shared/ui/texture-overlay";

export default function HomePage() {
  const [isReadingOpen, setIsReadingOpen] = useState(false);
  const [readingKey, setReadingKey] = useState("overman");
  const [showSigils, setShowSigils] = useState(true);

  const handleOpenReading = (key: string = "overman") => {
    setReadingKey(key);
    setIsReadingOpen(true);
  };

  const handleCloseReading = () => {
    setIsReadingOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#dcd6cd] flex flex-col justify-between selection:bg-[#dcd6cd] selection:text-[#050505]">
      {/* Distressed Texture & Grain Overlay */}
      <TextureOverlay intensity="low" />

      {/* Top Editorial Site Header */}
      <SiteHeader
        onOpenReading={handleOpenReading}
        onToggleSigils={() => setShowSigils((prev) => !prev)}
        showSigils={showSigils}
      />

      {/* Main Board Framing Container */}
      <main className="flex-1 w-full max-w-[1680px] mx-auto p-2.5 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-6 md:space-y-8">
        {/* Primary 2-Column Editorial Grid (Content-Driven Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_auto] gap-3 sm:gap-4 md:gap-6 items-stretch">
          {/* Left Hero Panel (Spans both rows on Desktop) */}
          <HeroSection
            onOpenReading={handleOpenReading}
            className="lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:row-span-2 min-h-0"
          />

          {/* Top Right: Thus Spoke Zarathustra */}
          <ZarathustraSection
            onOpenReading={handleOpenReading}
            className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-1 min-h-0"
          />

          {/* Bottom Right: The Highest Will */}
          <HighestWillSection
            className="lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:row-span-1 min-h-0"
          />
        </div>

        {/* Sigil Explorations Section (Mockup Details Section) */}
        {showSigils && (
          <div className="pt-2">
            <SigilExplorer />
          </div>
        )}

        {/* Site Footer */}
        <SiteFooter />

        {/* Author Signature & Colophon */}
        <AuthorSignature />
      </main>

      {/* Archival Reading Modal */}
      <ReadingModal
        isOpen={isReadingOpen}
        onClose={handleCloseReading}
        readingKey={readingKey}
      />
    </div>
  );
}
