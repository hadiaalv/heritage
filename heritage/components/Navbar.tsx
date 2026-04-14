"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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

  const links = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          padding-bottom: 4px;
          transition: color 0.2s ease;
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
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .nav-cta:hover {
          background: var(--green-accent) !important;
          border-color: var(--green-accent) !important;
          color: var(--teal-dark) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(10,77,68,0.15);
        }
        .logo-mark {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .logo-wrap:hover .logo-mark {
          transform: rotate(-6deg) scale(1.08);
        }
        
        /* Mobile Menu Animations */
        .hamburger-btn {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 6px;
          transition: background-color 0.3s ease;
        }
        
        .hamburger-btn:hover {
          background-color: rgba(10,77,68,0.05);
        }
        
        .hamburger-line {
          width: 24px;
          height: 2px;
          background-color: var(--teal-dark);
          border-radius: 2px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: center;
        }
        
        .hamburger-btn.active .hamburger-line:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }
        
        .hamburger-btn.active .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: translateX(-10px);
        }
        
        .hamburger-btn.active .hamburger-line:nth-child(3) {
          transform: translateY(-10px) rotate(-45deg);
        }
        
        .mobile-menu {
          animation: slideDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          max-height: 500px;
          overflow-y: auto;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 500px;
          }
        }
        
        .mobile-nav-link {
          display: block;
          padding: 12px 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          overflow: hidden;
        }
        
        .mobile-nav-link::before {
          content: '';
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(10,77,68,0.05);
          transition: left 0.3s ease;
          z-index: -1;
        }
        
        .mobile-nav-link:hover::before,
        .mobile-nav-link.active::before {
          left: 0;
        }
        
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--teal-dark) !important;
          transform: translateX(4px);
        }
        
        .mobile-cta {
          animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
          opacity: 0;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-2 sm:py-3 border-b border-black/5 transition-shadow duration-300"
        style={{
          background: "rgba(245,249,248,0.9)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="logo-wrap flex items-center gap-3 no-underline flex-shrink-0">
            <Image
              src="/Group bb.png"
              alt="Heritage Logo"
              width={120}
              height={120}
              className="logo-mark w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 list-none items-center">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`nav-link text-sm font-semibold no-underline ${
                    pathname === href ? "active" : ""
                  }`}
                  style={{ color: "var(--text-mid)" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
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
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`hamburger-btn md:hidden ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu md:hidden mt-4 flex flex-col gap-2 pb-4">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`mobile-nav-link text-sm font-semibold no-underline ${
                  pathname === href ? "active" : ""
                }`}
                style={{ color: "var(--text-mid)" }}
              >
                {label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mobile-cta nav-cta rounded-full px-6 py-[10px] text-sm font-bold text-white no-underline border-2 text-center block mt-2"
              style={{
                background: "var(--teal-dark)",
                borderColor: "var(--teal-dark)",
                fontFamily: "Nunito, sans-serif",
              }}
            >
              Get in Touch →
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}