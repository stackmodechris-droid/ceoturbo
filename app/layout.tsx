import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

const archivo = localFont({ src: "../public/fonts/archivo-black-latin.woff2", weight: "400", variable: "--font-archivo", display: "swap" });
const source = localFont({
  src: "../public/fonts/source-sans-3-latin.woff2",
  weight: "400 900",
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "CEOTurbo | Get Found Online. Get Remembered Everywhere Else.", template: "%s | CEOTurbo" },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Get found online. Get remembered everywhere else.",
    description: SITE.description,
    url: SITE.url,
    images: [{ url: "/brand/ceoturbo-og.png", width: 1200, height: 630, alt: "CEOTurbo logo with Search, Social, and Street positioning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get found online. Get remembered everywhere else.",
    description: SITE.description,
    images: ["/brand/ceoturbo-og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/brand/icon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#101716", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${source.variable}`}>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
