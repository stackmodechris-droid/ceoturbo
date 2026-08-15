import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CEOTurbo",
    short_name: "CEOTurbo",
    description: "Search, social, and street visibility systems for US businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f0e7",
    theme_color: "#101716",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
