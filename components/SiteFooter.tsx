import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" aria-label="P67 Game home" className="footer-brand-link">
              <Image
                src="/assets/images/p67-footer-brand.webp"
                alt="P67 Game"
                width={440}
                height={80}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 520px) 180px, 200px"
                className="footer-brand-image"
              />
            </Link>
            <p>
              Download the latest version of P67 Game with clear steps, safe-use guidance, and simple support
              links.
            </p>
          </div>
          <div>
            <h2>Important Links</h2>
            <ul>
              <li>
                <Link href="/about-us/">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us/">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer/">Disclaimer</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Important Pages</h2>
            <ul>
              <li>
                <Link href="/p67-download/">Download Guide</Link>
              </li>
              <li>
                <Link href="/blog/p67-account-signup/">Account Signup Guide</Link>
              </li>
              <li>
                <Link href="/blog/p67-game-deposit/">Deposit Guide</Link>
              </li>
              <li>
                <Link href="/blog/p67-game-withdrawal/">Withdrawal Guide</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap legal-note">
        <p className="legal-home">
          <span aria-hidden>© 2026 </span>
          <Link href="/">P67 Game</Link>
        </p>
        <p>
          18+ only where permitted by law. Gambling can be addictive. Set limits and play responsibly.
        </p>
      </div>
    </footer>
  );
}
