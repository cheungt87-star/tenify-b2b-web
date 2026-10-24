import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Nunito, Space_Mono } from "next/font/google";
import { DownloadButton } from "@/components/home/download-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: "Tenify — property inspections made simple.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${jetbrains.variable} ${spaceMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Persistent shell: header + footer live here, in the root layout,
            so the exact same chrome renders on every page and stays mounted
            across client-side navigation. Pages render only their <main>.
            Exception: SiteFooter hides itself on /for-businesses. */}
        <div
          className="flex min-h-full flex-1 flex-col overflow-x-clip bg-true-white text-neutral-900"
          style={{
            paddingLeft: "env(safe-area-inset-left)",
            paddingRight: "env(safe-area-inset-right)",
          }}
        >
          <SiteHeader
            cta={
              <DownloadButton
                className="btn-primary btn-primary-sm !min-h-11"
                label="Download for iPhone"
              />
            }
            mobileCta={
              <DownloadButton
                className="btn-primary btn-primary-sm !min-h-11"
                label="Download"
              />
            }
          />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
