import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { blogHubJsonLd } from "@/lib/jsonld";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const path = "/blog/";

export const metadata: Metadata = {
  title: { absolute: "P67 Game Blogs – Latest Guides & Updates 2026" },
  description:
    "Read P67 Game blogs with practical guides for withdrawal, deposits, download, and account safety. Updated for Pakistani users in 2026.",
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: {
    title: "P67 Game Blogs – Latest Guides & Updates 2026",
    description:
      "Read P67 Game blogs with practical guides for withdrawal, deposits, download, and account safety.",
    url: `${getSiteUrl()}${path}`,
    siteName: SITE_NAME,
  },
};

const BLOG_CARDS = [
  {
    href: "/p67-download/",
    title: "P67 Download APK 2026 — Complete Install Guide",
    image: "/assets/images/p67-download-feature.webp",
    alt: "P67 download APK guide feature image",
  },
  {
    href: "/blog/p67-account-signup/",
    title: "P67 Account Signup Guide 2026 — Register in 2 Minutes",
    image: "/assets/images/p67-account-signup-feature.webp",
    alt: "P67 account signup feature image",
  },
  {
    href: "/blog/p67-game-deposit/",
    title: "P67 Game Deposit Guide 2026 — Methods, Limits & Bonuses",
    image: "/assets/images/p67-game-deposit-feature.webp",
    alt: "P67 game deposit guide feature image",
  },
  {
    href: "/blog/p67-game-withdrawal/",
    title: "P67 Game Withdrawal Guide 2026 — Fast & Easy Cash Out",
    image: "/assets/images/p67-game-withdrawal-feature.webp",
    alt: "P67 game withdrawal guide feature image",
  },
];

export default function BlogIndexPage() {
  const ld = blogHubJsonLd(getSiteUrl());

  return (
    <>
      <JsonLd data={ld as unknown as Record<string, unknown>} />
      <main id="main" className="wrap home-content blogs-category-page">
      <section className="home-section blogs-category-shell" aria-labelledby="blog-title">
        <p className="breadcrumb">
          <Link href="/">Home</Link> / Blog
        </p>
        <h1 id="blog-title" className="blogs-category-title">
          P67 BLOG
        </h1>
        <ul className="blog-post-list blogs-category-grid">
          {BLOG_CARDS.map((card) => (
            <li key={card.href} className="blog-post-card blogs-category-card">
              <Link href={card.href} className="blog-card-link">
                <span className="blog-card-image-wrap">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={1024}
                    height={576}
                    className="blog-card-image"
                    sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 31vw"
                  />
                </span>
                <strong className="blog-card-title">{card.title}</strong>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
    </>
  );
}
