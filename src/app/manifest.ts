import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Weather App",
    short_name: "Weather",
    description:
      "weather-app is a smart, fast, and modern weather web app built with Next.js. It auto-detects your location using your IP address, fetches real-time weather data, provides a powerful fuzzy search experience for millions of cities, and lets you manage your favorite locations — all with a simple designed interface.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
