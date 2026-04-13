"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const nav = document.getElementById("navbar");
    const onScroll = () => {
      if (nav)
        nav.style.boxShadow =
          window.scrollY > 20 ? "0 4px 24px rgba(10,77,68,0.08)" : "none";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-[18px] border-b border-black/5 transition-shadow"
      style={{ background: "rgba(245,249,248,0.9)", backdropFilter: "blur(12px)" }}
    >
      <Link href="/" className="flex items-center gap-2 no-underline">
        <div
          className="w-8 h-8 rounded-[6px] flex items-center justify-center text-sm font-black text-white relative"
          style={{ background: "var(--green-accent)", fontFamily: "Nunito, sans-serif" }}
        >
          h
          <span
            className="absolute -top-[3px] -right-[3px] w-[10px] h-[10px] rounded-[3px]"
            style={{ background: "var(--green-bright)" }}
          />
        </div>
        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "1.4rem",
            color: "var(--teal-dark)",
          }}
        >
          heritage accounting
        </span>
      </Link>

      <ul className="hidden md:flex gap-8 list-none">
        {[
          { label: "Services", href: "/services" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ].map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="nav-link text-sm font-semibold no-underline"
              style={{ color: "var(--text-mid)" }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="rounded-full px-6 py-[10px] text-sm font-bold text-white no-underline border-2 transition-all hover:bg-[var(--green-accent)] hover:border-[var(--green-accent)] hover:text-[var(--teal-dark)] hover:-translate-y-0.5"
        style={{
          background: "var(--teal-dark)",
          borderColor: "var(--teal-dark)",
          fontFamily: "Nunito, sans-serif",
        }}
      >
        Get in Touch →
      </Link>
    </nav>
  );
}