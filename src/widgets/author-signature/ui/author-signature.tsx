"use client";

import React from "react";

interface AuthorSignatureProps {
  className?: string;
}

export function AuthorSignature({ className = "" }: AuthorSignatureProps) {
  const currentYear = new Date().getFullYear();

  return (
    <aside
      aria-label="Author Colophon"
      className={`w-full flex flex-col items-center justify-center pt-4 pb-6 sm:pt-6 sm:pb-10 text-center select-none ${className}`}
    >
      <a
        href="https://github.com/IgoHz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit IHOR T.'s GitHub profile"
        className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#55524d] hover:text-[#dcd6cd] transition-all duration-300 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8e8a83]"
      >
        <span className="transition-colors duration-300">
          &copy; {currentYear} IHOR T.
        </span>
        <span className="text-[#3a3834] group-hover:text-[#8e8a83] transition-colors duration-300 inline-flex items-center">
          &gt;<span className="inline-block animate-cursor-blink">_</span>
        </span>
      </a>
    </aside>
  );
}
