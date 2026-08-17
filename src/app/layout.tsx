import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "BECOME WHO YOU ARE — Friedrich Nietzsche",
  description:
    "A digital philosophical artifact centered around Friedrich Nietzsche's eagle and serpent imagery from Thus Spoke Zarathustra.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${cormorant.variable} dark bg-[#050505] text-[#dcd6cd] antialiased selection:bg-[#dcd6cd] selection:text-[#050505]`}
    >
      <body className="min-h-screen bg-[#050505] text-[#dcd6cd] flex flex-col font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
