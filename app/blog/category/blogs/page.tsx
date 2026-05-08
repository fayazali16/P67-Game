import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { blogsCategoryJsonLd } from "@/lib/jsonld";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const path = "/blog/category/blogs/";

export const metadata: Metadata = {
  title: { absolute: "Blogs Category – P67 Game Guides 2026" },
  description:
    "Explore the Blogs category for P67 Game: withdrawal, payment methods, limits, and practical fixes for common account issues.",
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: {
    title: "Blogs Category – P67 Game Guides 2026",
    description:
      "Explore the Blogs category for P67 Game: withdrawal, payment methods, limits, and practical fixes.",
    url: `${getSiteUrl()}${path}`,
    siteName: SITE_NAME,
  },
};

const BLOG_CARDS = [
  {
    href: "/p67-download/",
    title: "P67 Download APK 2026 — Complete Install Guide",
    image: "/assets/images/p67-download-feature.webp",
    alt: "P67 download guide feature image with APK install steps",
  },
  {
    href: "/blog/p67-account-signup/",
    title: "P67 Account Signup Guide 2026 — Register in 2 Minutes",
    image: "/assets/images/p67-account-signup-feature.webp",
    alt: "P67 account signup guide feature image with registration steps",
  },
  {
    href: "/blog/p67-game-deposit/",
    title: "P67 Game Deposit Guide 2026 — Methods, Limits & Bonuses",
    image: "/assets/images/p67-game-deposit-feature.webp",
    alt: "P67 game deposit guide feature image with methods and bonus details",
  },
  {
    href: "/blog/p67-game-withdrawal/",
    title: "P67 Game Withdrawal Guide 2026 — Fast & Easy Cash Out",
    image: "/assets/images/p67-game-withdrawal-feature.webp",
    alt: "P67 game withdrawal guide feature image with cashout steps",
  },
];

export default function BlogsCategoryPage() {
  const ld = blogsCategoryJsonLd(getSiteUrl());

  return (
    <>
      <JsonLd data={ld as unknown as Record<string, unknown>} />
      <main id="main" className="wrap home-content blogs-category-page">
      <section className="home-section blogs-category-shell" aria-labelledby="category-title">
        <p className="breadcrumb">
          <Link href="/">Home</Link> / <Link href="/blog/">Blogs</Link> /{" "}
          <span className="breadcrumb-current">Guides category</span>
        </p>
        <h1 id="category-title" className="blogs-category-title">
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
