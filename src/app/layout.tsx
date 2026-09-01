import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eagle-and-serpent.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#050505" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BECOME WHO YOU ARE — Friedrich Nietzsche",
    template: "%s | BECOME WHO YOU ARE",
  },
  description:
    "A digital philosophical artifact centered around Friedrich Nietzsche's eagle and serpent imagery from Thus Spoke Zarathustra.",
  applicationName: "Eagle & Serpent",
  keywords: [
    "Friedrich Nietzsche",
    "Thus Spoke Zarathustra",
    "Eagle and Serpent",
    "Overman",
    "Will to Power",
    "Eternal Recurrence",
    "Philosophical Artifact",
    "Philosophy",
    "Become Who You Are",
  ],
  authors: [{ name: "Friedrich Nietzsche", url: "https://en.wikipedia.org/wiki/Friedrich_Nietzsche" }],
  creator: "Friedrich Nietzsche",
  publisher: "Eagle & Serpent",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "BECOME WHO YOU ARE — Friedrich Nietzsche",
    description:
      "A digital philosophical artifact centered around Friedrich Nietzsche's eagle and serpent imagery from Thus Spoke Zarathustra.",
    siteName: "Eagle & Serpent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eagle and Serpent — Become Who You Are — Friedrich Nietzsche",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BECOME WHO YOU ARE — Friedrich Nietzsche",
    description:
      "A digital philosophical artifact centered around Friedrich Nietzsche's eagle and serpent imagery from Thus Spoke Zarathustra.",
    images: ["/og-image.png"],
    creator: "@nietzsche",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Eagle & Serpent — Friedrich Nietzsche",
      description:
        "A digital philosophical artifact centered around Friedrich Nietzsche's eagle and serpent imagery from Thus Spoke Zarathustra.",
      inLanguage: "en-US",
    },
    {
      "@type": "CreativeWork",
      "@id": `${siteUrl}/#artifact`,
      name: "Become Who You Are — Eagle and Serpent",
      headline: "Become Who You Are",
      author: {
        "@type": "Person",
        name: "Friedrich Nietzsche",
        sameAs: "https://en.wikipedia.org/wiki/Friedrich_Nietzsche",
      },
      about: [
        "Thus Spoke Zarathustra",
        "Will to Power",
        "Overman",
        "Eternal Recurrence",
      ],
      publisher: {
        "@type": "Organization",
        name: "Eagle & Serpent",
        url: siteUrl,
      },
      image: `${siteUrl}/og-image.png`,
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050505] text-[#dcd6cd] flex flex-col font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
