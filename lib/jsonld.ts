import { faqItems } from "./faq-data";
import { homeFaqItems } from "./home-faq-data";
import { homeScreenshots } from "./home-screenshots";
import {
  ABOUT_US_FEATURE_PATH,
  HOME_HERO_BRAND_SRC,
  OG_DEFAULT_PATH,
  ORG_LOGO_WEBP_PATH,
} from "./seo-media";
import { HOME_H1_TEXT, HOME_META_DESCRIPTION } from "./seo-home";
import { LAST_MODIFIED } from "./site";

const dateModifiedISO = (): string =>
  LAST_MODIFIED.includes("T") ? LAST_MODIFIED : `${LAST_MODIFIED}T08:00:00.000Z`;

/** Base URL with no trailing slash */
export function homePageJsonLd(base: string) {
  const faqMainEntity = homeFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));
  const screenshotMainEntity = homeScreenshots.map((image, index) => ({
    "@type": "ImageObject",
    "@id": `${base}/#screenshot-${image.id}`,
    name: image.name,
    description: image.description,
    contentUrl: `${base}${image.src}`,
    url: `${base}${image.src}`,
    width: image.width,
    height: image.height,
    caption: image.alt,
    representativeOfPage: index === 0,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "P67 Game Information Hub",
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${base}/#logo`,
          url: `${base}${ORG_LOGO_WEBP_PATH}`,
          width: 192,
          height: 192,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "P67 Game Information Hub",
        description: HOME_META_DESCRIPTION,
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-US",
        copyrightHolder: { "@id": `${base}/#organization` },
      },
      {
        "@type": "ItemList",
        "@id": `${base}/#sitenav`,
        name: "Important site sections (matches live navigation URLs)",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: 8,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "About Us", item: `${base}/about-us/` },
          { "@type": "ListItem", position: 3, name: "Download guide", item: `${base}/p67-download/` },
          { "@type": "ListItem", position: 4, name: "Blog index", item: `${base}/blog/` },
          { "@type": "ListItem", position: 5, name: "Blogs category", item: `${base}/blog/category/blogs/` },
          { "@type": "ListItem", position: 6, name: "Privacy Policy", item: `${base}/privacy-policy/` },
          { "@type": "ListItem", position: 7, name: "Disclaimer", item: `${base}/disclaimer/` },
          { "@type": "ListItem", position: 8, name: "Contact", item: `${base}/contact-us/` },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${base}/#webpage`,
        url: `${base}/`,
        name: HOME_H1_TEXT,
        isPartOf: { "@id": `${base}/#website` },
        about: {
          "@type": "Thing",
          name: "P67 Game",
          description:
            "P67 Game Android APK and P67 Game — three-card Pakistani card game, download, rules, and online play.",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}${HOME_HERO_BRAND_SRC}`,
          width: 512,
          height: 512,
          caption: "P67 Game — P67 Game APK download for Android",
        },
        dateModified: dateModifiedISO(),
        inLanguage: "en-US",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#speakable-summary", "#quick-answer"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${base}/#faq`,
        mainEntity: faqMainEntity,
      },
      {
        "@type": "ImageGallery",
        "@id": `${base}/#screenshots`,
        name: "P67 Game Screenshots Gallery",
        about: { "@type": "Thing", name: "P67 Game" },
        url: `${base}/#screenshots-gallery`,
        hasPart: screenshotMainEntity,
      },
    ],
  };
}

/** Blog landing — discoverability for pillar + posts. */
export function blogHubJsonLd(base: string) {
  const hub = `${base}/blog/`;
  const items = [
    { name: "P67 Download APK 2026 — Complete Install Guide", path: `${base}/p67-download/` },
    { name: "P67 Account Signup Guide 2026 — Register in 2 Minutes", path: `${base}/blog/p67-account-signup/` },
    { name: "P67 Game Deposit Guide 2026 — Methods, Limits & Bonuses", path: `${base}/blog/p67-game-deposit/` },
    { name: "P67 Game Withdrawal Guide 2026 — Fast & Easy Cash Out", path: `${base}/blog/p67-game-withdrawal/` },
  ];
  const listElements = items.map((row, idx) => ({
    "@type": "ListItem" as const,
    position: idx + 1,
    name: row.name,
    item: row.path,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "P67 Game Information Hub",
        url: `${base}/`,
        logo: { "@type": "ImageObject", "@id": `${base}/#logo`, url: `${base}${ORG_LOGO_WEBP_PATH}`, width: 192, height: 192 },
      },
      { "@type": "WebSite", "@id": `${base}/#website`, url: `${base}/`, name: "P67 Game Information Hub" },
      {
        "@type": "CollectionPage",
        "@id": `${hub}#collection`,
        url: hub,
        name: "P67 Game Blogs – Latest Guides & Updates 2026",
        description: "Browse P67 Game informational guides covering download, signup, deposits, and withdrawals.",
        isPartOf: { "@id": `${base}/#website` },
        inLanguage: "en-US",
        mainEntityOfPage: { "@id": `${hub}#itemlist` },
      },
      { "@type": "ItemList", "@id": `${hub}#itemlist`, itemListOrder: "https://schema.org/ItemListOrderAscending", numberOfItems: items.length, itemListElement: listElements },
      {
        "@type": "BreadcrumbList",
        "@id": `${hub}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Blogs", item: hub },
        ],
      },
    ],
  };
}

/** Category listing — reinforces hub → category crawl path. */
export function blogsCategoryJsonLd(base: string) {
  const hub = `${base}/blog/category/blogs/`;
  const items = [
    { name: "P67 Download APK 2026 — Complete Install Guide", path: `${base}/p67-download/` },
    { name: "P67 Account Signup Guide 2026 — Register in 2 Minutes", path: `${base}/blog/p67-account-signup/` },
    { name: "P67 Game Deposit Guide 2026 — Methods, Limits & Bonuses", path: `${base}/blog/p67-game-deposit/` },
    { name: "P67 Game Withdrawal Guide 2026 — Fast & Easy Cash Out", path: `${base}/blog/p67-game-withdrawal/` },
  ];
  const listElements = items.map((row, idx) => ({
    "@type": "ListItem" as const,
    position: idx + 1,
    name: row.name,
    item: row.path,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "P67 Game Information Hub",
        url: `${base}/`,
        logo: { "@type": "ImageObject", "@id": `${base}/#logo`, url: `${base}${ORG_LOGO_WEBP_PATH}`, width: 192, height: 192 },
      },
      { "@type": "WebSite", "@id": `${base}/#website`, url: `${base}/`, name: "P67 Game Information Hub" },
      {
        "@type": "CollectionPage",
        "@id": `${hub}#collection`,
        url: hub,
        name: "Blogs Category – P67 Game Guides 2026",
        description: "Category page listing P67 Game guides and APK resources.",
        isPartOf: { "@id": `${base}/#website` },
        inLanguage: "en-US",
        mainEntityOfPage: { "@id": `${hub}#itemlist` },
      },
      { "@type": "ItemList", "@id": `${hub}#itemlist`, itemListOrder: "https://schema.org/ItemListOrderAscending", numberOfItems: items.length, itemListElement: listElements },
      {
        "@type": "BreadcrumbList",
        "@id": `${hub}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Blogs", item: `${base}/blog/` },
          { "@type": "ListItem", position: 3, name: "Blogs category", item: hub },
        ],
      },
    ],
  };
}

/** Pillar article pages — reinforces internal linking hub for crawling. */
export function blogPostingJsonLd(
  base: string,
  opts: {
    path: string;
    headline: string;
    description: string;
    imagePath: string;
    keywords?: readonly string[];
  },
) {
  const pathNorm = opts.path.startsWith("/") ? opts.path : `/${opts.path}`;
  const url = `${base}${pathNorm}`;
  const iso = dateModifiedISO();
  const breadcrumbHref = `${url}#breadcrumb`;
  const imageUrl = `${base}${opts.imagePath}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "P67 Game Information Hub",
        url: `${base}/`,
        logo: { "@type": "ImageObject", "@id": `${base}/#logo`, url: `${base}${ORG_LOGO_WEBP_PATH}`, width: 192, height: 192 },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "P67 Game Information Hub",
        publisher: { "@id": `${base}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: opts.headline,
        description: opts.description,
        isPartOf: { "@id": `${base}/#website` },
        inLanguage: "en-US",
      },
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        headline: opts.headline,
        description: opts.description,
        url,
        image: [imageUrl],
        keywords: opts.keywords?.join(", "),
        copyrightHolder: { "@id": `${base}/#organization` },
        author: { "@type": "Organization", name: "P67 Game Information Hub", url: `${base}/` },
        publisher: {
          "@type": "Organization",
          "@id": `${base}/#organization`,
          logo: { "@type": "ImageObject", "@id": `${base}/#logo`, url: `${base}${ORG_LOGO_WEBP_PATH}`, width: 192, height: 192 },
        },
        datePublished: iso,
        dateModified: iso,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbHref,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Blogs", item: `${base}/blog/` },
          { "@type": "ListItem", position: 3, name: "Blogs category", item: `${base}/blog/category/blogs/` },
          { "@type": "ListItem", position: 4, name: opts.headline, item: url },
        ],
      },
    ],
  };
}

/** Download guide pillar — not a BlogPosting, but crawl + breadcrumb clarity. */
export function downloadGuideJsonLd(base: string, opts: { headline: string; description: string; imagePath: string }) {
  const url = `${base}/p67-download/`;
  const iso = dateModifiedISO();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "P67 Game Information Hub",
        url: `${base}/`,
        logo: { "@type": "ImageObject", "@id": `${base}/#logo`, url: `${base}${ORG_LOGO_WEBP_PATH}`, width: 192, height: 192 },
      },
      { "@type": "WebSite", "@id": `${base}/#website`, url: `${base}/`, name: "P67 Game Information Hub" },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: opts.headline,
        description: opts.description,
        isPartOf: { "@id": `${base}/#website` },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}${opts.imagePath}`,
          width: 1024,
          height: 576,
        },
        dateModified: iso,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: opts.headline, item: url },
        ],
      },
    ],
  };
}

export function guidePageJsonLd(base: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "P67 Game Information Hub",
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          url: `${base}${ORG_LOGO_WEBP_PATH}`,
          width: 192,
          height: 192,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "P67 Game Information Hub",
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${base}/guide/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Platform guide",
            item: `${base}/guide/`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${base}/guide/#webpage`,
        url: `${base}/guide/`,
        name: "How to evaluate an online betting platform",
        isPartOf: { "@id": `${base}/#website` },
        dateModified: LAST_MODIFIED,
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}${OG_DEFAULT_PATH}`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "Article",
        "@id": `${base}/guide/#article`,
        headline: "How to evaluate an online betting platform",
        description:
          "Educational framework for licensing, bonuses, security, and payments on digital betting sites.",
        author: { "@id": `${base}/#organization` },
        publisher: { "@id": `${base}/#organization` },
        dateModified: LAST_MODIFIED,
        mainEntityOfPage: { "@id": `${base}/guide/#webpage` },
        image: `${base}${OG_DEFAULT_PATH}`,
        inLanguage: "en-US",
        about: {
          "@type": "Thing",
          name: "Online gambling operator due diligence",
        },
      },
      {
        "@type": "HowTo",
        "@id": `${base}/guide/#howto`,
        name: "Evaluate an online betting platform",
        description:
          "Seven-step checklist to assess legality, licensing, bonuses, security, payments, support, and risk signals.",
        totalTime: "PT8M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Confirm jurisdiction",
            text: "Before creating an account, confirm whether remote betting is permitted for you under current local law.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Verify the license",
            text: "Copy the license number from the operator footer and confirm it in the regulator’s public register.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Read bonus terms",
            text: "Extract wagering requirements, game weighting, time limits, and max bet rules before accepting an offer.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Check security basics",
            text: "Expect HTTPS, a clear privacy policy, optional two-factor authentication, and transparent KYC steps.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Review payments",
            text: "Compare withdrawal timelines, fees, limits, and reasons delays may occur.",
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: "Assess support and disputes",
            text: "Confirm whether ADR or regulator escalation exists for account and balance disputes.",
          },
          {
            "@type": "HowToStep",
            position: 7,
            name: "Watch for red flags",
            text: "Opaque ownership, anonymous-only payments, guaranteed-profit claims, or pressure to deposit quickly are high-risk patterns.",
          },
        ],
      },
    ],
  };
}

export function faqPageJsonLd(base: string) {
  const mainEntity = faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "P67 Game Information Hub",
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          url: `${base}${ORG_LOGO_WEBP_PATH}`,
          width: 192,
          height: 192,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "P67 Game Information Hub",
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${base}/faq/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "FAQ", item: `${base}/faq/` },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${base}/faq/#webpage`,
        url: `${base}/faq/`,
        name: "FAQ: P67 Game and online betting platforms",
        isPartOf: { "@id": `${base}/#website` },
        dateModified: LAST_MODIFIED,
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}${OG_DEFAULT_PATH}`,
          width: 1200,
          height: 630,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#faq-list-title"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${base}/faq/#faq`,
        mainEntity,
      },
    ],
  };
}

export function responsiblePageJsonLd(base: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "P67 Game Information Hub",
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          url: `${base}${ORG_LOGO_WEBP_PATH}`,
          width: 192,
          height: 192,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "P67 Game Information Hub",
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${base}/responsible-gambling/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Responsible gambling",
            item: `${base}/responsible-gambling/`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${base}/responsible-gambling/#webpage`,
        url: `${base}/responsible-gambling/`,
        name: "Responsible gambling: help and resources",
        description:
          "Warning signs, budgeting, self-exclusion, and support resources for problem gambling.",
        isPartOf: { "@id": `${base}/#website` },
        dateModified: LAST_MODIFIED,
        inLanguage: "en-US",
        about: {
          "@type": "Thing",
          name: "Responsible gambling",
          description: "Risk-aware play, self-exclusion tools, and pathways to professional support.",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}${OG_DEFAULT_PATH}`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${base}/responsible-gambling/#help-directories`,
        name: "Example international help directories (verify locally)",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "BeGambleAware",
            url: "https://www.begambleaware.org/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "National Council on Problem Gambling",
            url: "https://www.ncpgambling.org/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Gamblers Anonymous",
            url: "https://www.gamblersanonymous.org/",
          },
        ],
      },
    ],
  };
}

const ABOUT_PAGE_TITLE = "About Us – P67 Game App Pakistan Guide";
const ABOUT_PAGE_DESCRIPTION =
  "Learn about P67GameApp.com.pk, your trusted platform for P67 game download, signup guides, features, and latest updates in Pakistan.";

export function aboutPageJsonLd(base: string) {
  const pageUrl = `${base}/about-us/`;
  const featureUrl = `${base}${ABOUT_US_FEATURE_PATH}`;
  const featureImage = {
    "@type": "ImageObject" as const,
    url: featureUrl,
    width: 1024,
    height: 576,
    caption: ABOUT_PAGE_TITLE,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "P67 Game Information Hub",
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${base}/#logo`,
          url: `${base}${ORG_LOGO_WEBP_PATH}`,
          width: 192,
          height: 192,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "P67 Game Information Hub",
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#about`,
        url: pageUrl,
        name: ABOUT_PAGE_TITLE,
        description: ABOUT_PAGE_DESCRIPTION,
        inLanguage: "en-US",
        isPartOf: { "@id": `${base}/#website` },
        image: [featureUrl],
        primaryImageOfPage: featureImage,
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: ABOUT_PAGE_TITLE,
        description: ABOUT_PAGE_DESCRIPTION,
        isPartOf: { "@id": `${base}/#website` },
        primaryImageOfPage: featureImage,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "About Us", item: pageUrl },
        ],
      },
    ],
  };
}
