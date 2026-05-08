import type { Metadata } from "next";
import { HomeLongform, HOME_HERO_BRAND_SRC } from "@/components/home/HomeLongform";
import { JsonLd } from "@/components/JsonLd";
import { homePageJsonLd } from "@/lib/jsonld";
import { HOME_META_DESCRIPTION, HOME_META_TITLE } from "@/lib/seo-home";
import { getSiteUrl } from "@/lib/site";

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
  title: HOME_META_TITLE,
  description: HOME_META_DESCRIPTION,
  keywords: KEYWORDS,
  openGraph: {
    title: HOME_META_TITLE,
    description: HOME_META_DESCRIPTION,
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
    title: HOME_META_TITLE,
    description: HOME_META_DESCRIPTION,
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
