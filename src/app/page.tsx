"use client";

import React, { useState } from "react";
import { SiteHeader } from "@/widgets/site-header";
import { HeroSection } from "@/widgets/hero-section";
import { ZarathustraSection } from "@/widgets/zarathustra-section";
import { HighestWillSection } from "@/widgets/highest-will-section";
import { SigilExplorer } from "@/widgets/sigil-explorer";
import { SiteFooter } from "@/widgets/site-footer";
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
      <main className="flex-1 w-full max-w-[1680px] mx-auto p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 sm:space-y-6 md:space-y-8">
        {/* Primary 2-Column Editorial Grid (Exact Layout from Mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-6 items-stretch">
          {/* Left Hero Panel (60% Desktop Width) */}
          <div className="lg:col-span-7 flex flex-col">
            <HeroSection
              onOpenReading={handleOpenReading}
              className="flex-1"
            />
          </div>

          {/* Right Panels Stack (40% Desktop Width) */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 md:gap-6 justify-between">
            {/* Top Right: Thus Spoke Zarathustra */}
            <ZarathustraSection
              onOpenReading={handleOpenReading}
              className="flex-1"
            />

            {/* Bottom Right: The Highest Will */}
            <HighestWillSection className="flex-1" />
          </div>
        </div>

        {/* Sigil Explorations Section (Mockup Details Section) */}
        {showSigils && (
          <div className="pt-2">
            <SigilExplorer />
          </div>
        )}

        {/* Site Footer */}
        <SiteFooter />
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
