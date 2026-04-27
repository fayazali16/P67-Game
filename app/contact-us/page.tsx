import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";

const path = "/contact-us/";
const META_TITLE = "Contact Us – P67 Game App Pakistan";
const META_DESCRIPTION =
  "Contact P67GameApp.com.pk using our simple contact form for inquiries, feedback, and support-related questions.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  robots: {
    index: true,
    follow: true,
  },
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

export default function ContactUsPage() {
  return (
    <main id="main" className="wrap home-content">
      <section className="home-section" aria-labelledby="contact-us-title">
        <h1 id="contact-us-title">Contact Us</h1>
        <form className="contact-form" action="#" method="post">
          <div className="form-row">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-input" type="text" id="name" name="name" autoComplete="name" required />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="subject">
              Subject
            </label>
            <input className="form-input" type="text" id="subject" name="subject" required />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-textarea" id="message" name="message" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
