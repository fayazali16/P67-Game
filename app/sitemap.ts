import type { MetadataRoute } from "next";
import { ABOUT_US_FEATURE_PATH, HOME_HERO_BRAND_SRC, OG_DEFAULT_PATH } from "@/lib/seo-media";
import { getSiteUrl, LAST_MODIFIED } from "@/lib/site";

function absImage(base: string, publicPath: string): string[] {
  return [`${base}${publicPath}`];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastMod = new Date(LAST_MODIFIED);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1,
      images: absImage(base, HOME_HERO_BRAND_SRC),
    },
    {
      url: `${base}/p67-download/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.95,
      images: absImage(base, "/assets/images/p67-download-feature.webp"),
    },
    {
      url: `${base}/about-us/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
      images: absImage(base, ABOUT_US_FEATURE_PATH),
    },
    {
      url: `${base}/privacy-policy/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.72,
      images: absImage(base, OG_DEFAULT_PATH),
    },
    {
      url: `${base}/disclaimer/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.72,
      images: absImage(base, OG_DEFAULT_PATH),
    },
    {
      url: `${base}/contact-us/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.75,
      images: absImage(base, OG_DEFAULT_PATH),
    },
    {
      url: `${base}/blog/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.9,
      images: absImage(base, OG_DEFAULT_PATH),
    },
    {
      url: `${base}/blog/category/blogs/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.85,
      images: absImage(base, OG_DEFAULT_PATH),
    },
    {
      url: `${base}/blog/p67-game-withdrawal/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.88,
      images: absImage(base, "/assets/images/p67-game-withdrawal-feature.webp"),
    },
    {
      url: `${base}/blog/p67-account-signup/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.88,
      images: absImage(base, "/assets/images/p67-account-signup-feature.webp"),
    },
    {
      url: `${base}/blog/p67-game-deposit/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.88,
      images: absImage(base, "/assets/images/p67-game-deposit-feature.webp"),
    },
  ];
  return staticRoutes;
}
