import type { Metadata, Viewport } from "next";
import { Fraunces, Sora } from "next/font/google";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { OG_DEFAULT_PATH } from "@/lib/seo-media";
import { getMetadataBase, getSiteUrl, SITE_NAME, THEME_COLOR } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  adjustFontFallback: true,
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  adjustFontFallback: true,
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${SITE_NAME} | P67 Game — Platform basics, safety, responsible play`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Independent informational hub on P67 Game and online betting: platform basics, security signals, legality awareness, payments, and responsible gambling resources.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: siteUrl,
    images: [
      {
        url: OG_DEFAULT_PATH,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/assets/favicon-192.webp", sizes: "192x192", type: "image/webp" },
      { url: "/assets/favicon-512.webp", sizes: "512x512", type: "image/webp" },
    ],
    apple: [{ url: "/assets/favicon-192.webp", sizes: "192x192", type: "image/webp" }],
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sora.variable}`}>
      <body>
        <Link href="#main" className="skip-link">
          Skip to main content
        </Link>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
