import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";

const path = "/disclaimer/";
const META_TITLE = "Disclaimer – P67 Game App Information";
const META_DESCRIPTION =
  "Read the disclaimer of P67GameApp.com.pk to understand limitations of liability, third-party links, and informational content usage.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  keywords: ["Disclaimer", "P67 Game App Information", "P67GameApp.com.pk"],
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

export default function DisclaimerPage() {
  return (
    <main id="main" className="wrap home-content">
      <section className="home-section" aria-labelledby="disclaimer-title">
        <h1 id="disclaimer-title">Disclaimer</h1>
        <p>Welcome to P67GameApp.com.pk.</p>
        <p>
          All information provided on this website is published in good faith and for general informational
          purposes only.
        </p>
      </section>

      <section className="home-section" aria-labelledby="general-information">
        <h2 id="general-information">General Information</h2>
        <p>
          P67GameApp.com.pk does not make any warranties about the completeness, reliability, or accuracy of the
          information provided.
        </p>
        <p>
          Any action you take based on the information found on this website is strictly at your own risk.
        </p>
      </section>

      <section className="home-section" aria-labelledby="no-official-affiliation">
        <h2 id="no-official-affiliation">No Official Affiliation</h2>
        <p>
          P67GameApp.com.pk is an independent website and is not officially affiliated with the P67 Game
          developers or any related company.
        </p>
        <p>All logos, trademarks, and brand names belong to their respective owners.</p>
      </section>

      <section className="home-section" aria-labelledby="external-links-disclaimer">
        <h2 id="external-links-disclaimer">External Links Disclaimer</h2>
        <p>
          Our website may contain links to external websites for additional information or resources.
        </p>
        <p>
          While we strive to provide only quality links, we have no control over the content and nature of these
          external sites.
        </p>
      </section>

      <section className="home-section" aria-labelledby="content-accuracy">
        <h2 id="content-accuracy">Content Accuracy</h2>
        <p>
          We aim to keep all information updated and accurate. However, we do not guarantee that all content is
          always up-to-date or error-free.
        </p>
      </section>

      <section className="home-section" aria-labelledby="user-responsibility">
        <h2 id="user-responsibility">User Responsibility</h2>
        <p>Users are responsible for how they use the information provided on this website.</p>
        <p>
          We are not liable for any losses, damages, or issues arising from the use of our website.
        </p>
      </section>

      <section className="home-section" aria-labelledby="consent">
        <h2 id="consent">Consent</h2>
        <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
      </section>

      <section className="home-section home-cta-final" aria-labelledby="updates">
        <h2 id="updates">Updates</h2>
        <p>This Disclaimer may be updated at any time without prior notice.</p>
      </section>
    </main>
  );
}
