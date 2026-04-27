import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About Us" },
  { href: "/p67-download/", label: "Download" },
  { href: "/blog/", label: "Blogs" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/">
          <Image
            src="/assets/images/p67-header-brand.webp"
            alt="P67 Game Information Hub"
            width={440}
            height={80}
            fetchPriority="low"
            decoding="async"
            sizes="(max-width: 520px) 200px, (max-width: 900px) 240px, 220px"
            className="brand-image"
          />
          <span className="sr-only">P67 Game Information Hub</span>
        </Link>
        <details className="nav-shell">
          <summary className="nav-toggle">Menu</summary>
          <nav id="site-nav" aria-label="Primary">
            <ul className="nav-list">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
