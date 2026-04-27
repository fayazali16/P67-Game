"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About Us" },
  { href: "/p67-download/", label: "Download" },
  { href: "/blog/", label: "Blogs" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
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
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={toggle}
        >
          Menu
        </button>
        <nav id="site-nav" aria-label="Primary">
          <ul className={`nav-list${open ? " is-open" : ""}`}>
            {nav.map(({ href, label }) => {
              const isHome = href === "/";
              const normalized = href.replace(/\/$/, "");
              const current = isHome
                ? pathname === "/" || pathname === ""
                : pathname === href ||
                  pathname === normalized ||
                  pathname.startsWith(`${normalized}/`);
              return (
                <li key={href}>
                  <Link href={href} aria-current={current ? "page" : undefined} onClick={() => setOpen(false)}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
