import type { Metadata } from "next";
import Image from "next/image";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const path = "/about-us/";
const FEATURE_IMAGE = "/assets/images/about-us-feature.webp";

const META_TITLE = "About Us – P67 Game App Pakistan Guide";
const META_DESCRIPTION =
  "Learn about P67GameApp.com.pk, your trusted platform for P67 game download, signup guides, features, and latest updates in Pakistan.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  keywords: ["About Us", "P67 Game App", "P67 Pakistan guide", "P67GameApp.com.pk"],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${getSiteUrl()}${path}`,
    siteName: SITE_NAME,
    images: [
      {
        url: FEATURE_IMAGE,
        width: 1024,
        height: 576,
        alt: "About Us P67 Game App Pakistan guide feature image",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [FEATURE_IMAGE],
  },
};

export default function AboutUsPage() {
  return (
    <main id="main" className="wrap home-content">
      <section className="home-section" aria-labelledby="about-title">
        <h1 id="about-title">About Us – P67 Game App</h1>
        <figure className="home-section-image">
          <Image
            src={FEATURE_IMAGE}
            alt="About us page banner for P67 Game App Pakistan with platform mission and trusted gaming guidance"
            width={1024}
            height={576}
            priority
            fetchPriority="high"
            sizes="(max-width: 900px) 96vw, 900px"
          />
          <figcaption className="sr-only">
            About Us feature image showing P67 Game App mission, platform trust, and Pakistan-focused user support.
          </figcaption>
        </figure>
        <p>
          Welcome to P67GameApp.com.pk, your trusted platform for downloading and exploring the latest
          version of the P67 Game. We are dedicated to providing users in Pakistan with a smooth, secure,
          and fast experience to access one of the most popular online gaming applications.
        </p>
        <p>
          At P67 Game App, our mission is simple: to make it easy for users to discover, download, and enjoy
          the P67 platform without confusion or delays. We understand that users want quick access, reliable
          information, and a hassle-free process, which is why we focus on delivering accurate guides and
          updated resources.
        </p>
      </section>

      <section className="home-section" aria-labelledby="who-we-are">
        <h2 id="who-we-are">Who We Are</h2>
        <p>
          We are a team of digital enthusiasts who specialize in creating helpful content for mobile gaming
          platforms. Our goal is to provide clear instructions, honest insights, and step-by-step guides so
          that users can get started within minutes.
        </p>
        <p>
          Whether you are a new user or already familiar with the platform, P67GameApp.com.pk ensures that
          you always have access to the latest updates, features, and helpful tutorials.
        </p>
      </section>

      <section className="home-section" aria-labelledby="what-we-offer">
        <h2 id="what-we-offer">What We Offer</h2>
        <p>On our website, you will find:</p>
        <ul className="home-feature-ul">
          <li>Easy-to-follow download guides for the P67 Game.</li>
          <li>Step-by-step signup and account creation tutorials.</li>
          <li>Information about features, updates, and gameplay.</li>
          <li>Tips to help you get started quickly and efficiently.</li>
          <li>Troubleshooting solutions for common issues.</li>
        </ul>
        <p>
          We regularly update our content to ensure that everything remains accurate and useful for our
          audience.
        </p>
      </section>

      <section className="home-section" aria-labelledby="why-choose-us">
        <h2 id="why-choose-us">Why Choose Us</h2>
        <p>We focus on simplicity, reliability, and user satisfaction. Our platform is designed to provide:</p>
        <ul className="home-feature-ul">
          <li>Fast and secure access to information.</li>
          <li>Beginner-friendly guides.</li>
          <li>Updated and relevant content.</li>
          <li>A smooth browsing experience.</li>
        </ul>
        <p>
          Our aim is to build a reliable resource that users can trust whenever they need guidance related to
          the P67 Game.
        </p>
      </section>

      <section className="home-section" aria-labelledby="our-vision">
        <h2 id="our-vision">Our Vision</h2>
        <p>
          Our vision is to become one of the leading informational platforms in Pakistan for mobile gaming
          applications. We strive to continuously improve our content quality and user experience so that
          visitors always find value when they visit our website.
        </p>
      </section>

      <section className="home-section home-cta-final" aria-labelledby="disclaimer">
        <h2 id="disclaimer">Disclaimer</h2>
        <p>
          P67GameApp.com.pk is an independent informational website and is not officially affiliated with the
          P67 Game developers. All logos, trademarks, and content belong to their respective owners.
        </p>
      </section>
    </main>
  );
}
