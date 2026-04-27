import type { Metadata } from "next";
import { HomeLongform, HOME_HERO_BRAND_SRC } from "@/components/home/HomeLongform";
import { JsonLd } from "@/components/JsonLd";
import { homePageJsonLd } from "@/lib/jsonld";
import { getSiteUrl } from "@/lib/site";

const META_TITLE = "P67 Game Download APK 2026 – Real Money Earning App";
const META_DESCRIPTION =
  "Download P67 Game APK for Android & iOS in 2026. Play casino games, earn real money via JazzCash & EasyPaisa. Full guide to register, deposit & withdraw.";

const KEYWORDS = [
  "P67 Game",
  "P67 Game APK download",
  "P67 Game real money",
  "P67 Game Pakistan",
  "P67 Game deposit withdraw",
  "P67 Game JazzCash EasyPaisa",
];

export const metadata: Metadata = {
  alternates: {
    canonical: `${getSiteUrl()}/`,
  },
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: KEYWORDS,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [
      {
        url: HOME_HERO_BRAND_SRC,
        width: 512,
        height: 512,
        alt: "P67 Game logo — P67 Game APK for Android, online card game",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [HOME_HERO_BRAND_SRC],
  },
};

export default function HomePage() {
  const base = getSiteUrl();

  return (
    <>
      <JsonLd data={homePageJsonLd(base) as unknown as Record<string, unknown>} />
      <main id="main">
        <HomeLongform />
      </main>
    </>
  );
}
