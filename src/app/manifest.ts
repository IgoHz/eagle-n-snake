import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BECOME WHO YOU ARE — Friedrich Nietzsche",
    short_name: "Eagle & Serpent",
    description:
      "A digital philosophical artifact centered around Friedrich Nietzsche's eagle and serpent imagery from Thus Spoke Zarathustra.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
