import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";

const path = "/privacy-policy/";
const META_TITLE = "Privacy Policy – P67 Game App Pakistan";
const META_DESCRIPTION =
  "Read the Privacy Policy of P67GameApp.com.pk to understand how we collect, use, and protect your personal information.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  keywords: ["Privacy Policy", "P67 Game App Pakistan", "P67GameApp.com.pk"],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${getSiteUrl()}${path}`,
  },
  twitter: {
    card: "summary",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main" className="wrap home-content">
      <section className="home-section" aria-labelledby="privacy-policy-title">
        <h1 id="privacy-policy-title">Privacy Policy</h1>
        <p>
          Welcome to P67GameApp.com.pk. Your privacy is important to us, and this Privacy Policy explains how
          we collect, use, and safeguard your information when you visit our website.
        </p>
      </section>

      <section className="home-section" aria-labelledby="information-we-collect">
        <h2 id="information-we-collect">Information We Collect</h2>
        <p>We may collect limited personal and non-personal information, including:</p>
        <ul className="home-feature-ul">
          <li>Your name and email address (if voluntarily submitted).</li>
          <li>Device type, browser, and IP address.</li>
          <li>Website usage data through cookies and analytics tools.</li>
        </ul>
        <p>This information helps us improve user experience and website performance.</p>
      </section>

      <section className="home-section" aria-labelledby="how-we-use">
        <h2 id="how-we-use">How We Use Your Information</h2>
        <p>We use collected data to:</p>
        <ul className="home-feature-ul">
          <li>Improve website functionality and content.</li>
          <li>Respond to user inquiries and feedback.</li>
          <li>Monitor traffic and user behavior.</li>
          <li>Ensure security and prevent misuse.</li>
        </ul>
        <p>We do not sell, trade, or share your personal information with third parties.</p>
      </section>

      <section className="home-section" aria-labelledby="cookies-policy">
        <h2 id="cookies-policy">Cookies Policy</h2>
        <p>
          Our website may use cookies to enhance user experience. Cookies help us understand user preferences and
          improve site performance.
        </p>
        <p>You can choose to disable cookies through your browser settings at any time.</p>
      </section>

      <section className="home-section" aria-labelledby="third-party-services">
        <h2 id="third-party-services">Third-Party Services</h2>
        <p>
          We may use trusted third-party tools such as analytics services to better understand user interaction.
          These services may collect anonymized data in accordance with their own privacy policies.
        </p>
        <p>
          We are not responsible for the privacy practices of external websites linked on our platform.
        </p>
      </section>

      <section className="home-section" aria-labelledby="data-security">
        <h2 id="data-security">Data Security</h2>
        <p>
          We take appropriate measures to protect your information from unauthorized access, alteration, or
          disclosure.
        </p>
        <p>However, no online platform can guarantee complete security.</p>
      </section>

      <section className="home-section" aria-labelledby="children-info">
        <h2 id="children-info">Children&apos;s Information</h2>
        <p>
          Our website is not intended for users under the age of 13. We do not knowingly collect personal
          information from children.
        </p>
      </section>

      <section className="home-section" aria-labelledby="changes-to-policy">
        <h2 id="changes-to-policy">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page.
        </p>
      </section>

      <section className="home-section home-cta-final" aria-labelledby="contact-us">
        <h2 id="contact-us">Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy, you can contact us through our website.
        </p>
      </section>
    </main>
  );
}
