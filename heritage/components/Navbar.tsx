"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
    <>
      <style>{`
        .nav-link {
          position: relative;
          padding-bottom: 4px;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--green-accent), var(--green-bright));
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .nav-link:hover,
        .nav-link.active {
          color: var(--teal-dark) !important;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .nav-cta {
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .nav-cta:hover {
          background: var(--green-accent) !important;
          border-color: var(--green-accent) !important;
          color: var(--teal-dark) !important;
          transform: translateY(-2px);
        }
        .logo-mark {
          transition: transform 0.2s ease;
        }
        .logo-wrap:hover .logo-mark {
          transform: rotate(-6deg) scale(1.08);
        }
      `}</style>

      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-[18px] border-b border-black/5 transition-shadow"
        style={{ background: "rgba(245,249,248,0.9)", backdropFilter: "blur(12px)" }}
      >
        <Link href="/" className="logo-wrap flex items-center gap-3 no-underline">
          <Image
            src="/Group bb.png"
            alt="Heritage Logo"
            width={100}
            height={100}
            className="logo-mark"
          />
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {[
            { label: "Services", href: "/services" },
            { label: "About",    href: "/about"    },
            { label: "Team",     href: "/team"     },
            { label: "FAQ",      href: "/faq"      },
            { label: "Contact",  href: "/contact"  },
          ].map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`nav-link text-sm font-semibold no-underline ${pathname === href ? "active" : ""}`}
                style={{ color: "var(--text-mid)" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="nav-cta rounded-full px-6 py-[10px] text-sm font-bold text-white no-underline border-2"
          style={{
            background: "var(--teal-dark)",
            borderColor: "var(--teal-dark)",
            fontFamily: "Nunito, sans-serif",
          }}
        >
          Get in Touch →
        </Link>
      </nav>
    </>
  );
}