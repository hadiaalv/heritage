"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("reveal-visible"), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (el: HTMLElement | null, index: number) => {
    revealRefs.current[index] = el;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Nunito+Sans:wght@400;600;700&display=swap');

        :root {
          --teal-dark: #0a4d44;
          --teal-mid: #0d6b5e;
          --teal-light: #e8f5f3;
          --green-accent: #2ecc8e;
          --green-bright: #00e5a0;
          --cream: #f5f9f8;
          --text-dark: #0a2e2a;
          --text-mid: #3d6b64;
        }

        body { font-family: 'Nunito Sans', sans-serif; background: var(--cream); overflow-x: hidden; }

        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal-visible { opacity: 1; transform: none; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.3); } }
        @keyframes barGrow { from { height: 0 !important; } }

        .animate-fade-up   { animation: fadeUp 0.6s ease both; }
        .animate-fade-up-1 { animation: fadeUp 0.6s ease 0.1s both; }
        .animate-fade-up-2 { animation: fadeUp 0.6s ease 0.2s both; }
        .animate-fade-up-3 { animation: fadeUp 0.6s ease 0.3s both; }

        .pulse-dot { animation: pulse 2s infinite; }

        .bar-anim { animation: barGrow 1s ease both; }

        .nav-link { position: relative; padding-bottom: 4px; transition: color 0.2s; }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: var(--green-accent); border-radius: 2px; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: var(--teal-dark) !important; }

        .feature-card { transition: all 0.3s; position: relative; overflow: hidden; }
        .feature-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--teal-dark), var(--green-accent)); transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(10,77,68,0.1); border-color: transparent !important; }
        .feature-card:hover::after { transform: scaleX(1); }
        .feature-card:hover .feature-icon-wrap { background: var(--teal-dark) !important; }
        .feature-card:hover .feature-icon-wrap svg { stroke: white !important; }
        .feature-icon-wrap { transition: background 0.3s; }

        .stat-item { transition: transform 0.2s; }
        .stat-item:hover { transform: translateY(-4px); }

        .bar { transition: background 0.2s; border-radius: 6px 6px 0 0; }
        .bar:hover { background: var(--green-accent) !important; }

        .hero-accent { position: relative; display: inline-block; }
        .hero-accent::after { content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--green-accent), var(--green-bright)); border-radius: 4px; }
      `}</style>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-[120px] pb-20 px-12 relative overflow-hidden">
        {/* Background blobs */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 500, height: 500,
            background: "var(--teal-mid)",
            top: -100, right: -80,
            filter: "blur(80px)", opacity: 0.18,
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 300, height: 300,
            background: "var(--green-accent)",
            bottom: 80, left: 60,
            filter: "blur(80px)", opacity: 0.18,
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto w-full">
          {/* Left */}
          <div>
            <div
              className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[var(--green-accent)]/40 px-4 py-[6px] rounded-full text-xs font-bold mb-6"
              style={{ color: "var(--teal-mid)" }}
            >
              <span
                className="pulse-dot w-2 h-2 rounded-full inline-block"
                style={{ background: "var(--green-accent)" }}
              />
              Trusted by 500+ businesses
            </div>

            <h1
              className="animate-fade-up-1 text-5xl lg:text-6xl leading-tight"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}
            >
              Welcome to <br />
              <span className="hero-accent" style={{ color: "var(--green-accent)" }}>Heritage</span>
            </h1>

            <p
              className="animate-fade-up-2 mt-5 text-lg leading-relaxed"
              style={{ color: "var(--text-mid)" }}
            >
              Preserving tradition, embracing innovation. Building a legacy that lasts — with
              accounting that&apos;s clear, modern, and built for you.
            </p>

            <div className="animate-fade-up-3 flex gap-4 mt-9 flex-wrap">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full px-8 py-[14px] text-base font-black text-white no-underline border-2 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: "var(--teal-dark)",
                  borderColor: "var(--teal-dark)",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                Learn More →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full px-8 py-[14px] text-base font-black no-underline border-2 transition-all hover:-translate-y-1 hover:border-[var(--teal-dark)]"
                style={{
                  color: "var(--teal-dark)",
                  borderColor: "rgba(10,77,68,0.2)",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                Our Services ↗
              </Link>
            </div>
          </div>

          {/* Right — Stats Card */}
          <div className="animate-fade-up-2">
            <div
              className="bg-white rounded-3xl p-8 relative overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(10,77,68,0.12)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[5px]"
                style={{ background: "linear-gradient(90deg, var(--teal-dark), var(--green-accent))" }}
              />

              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-black text-base"
                  style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}
                >
                  Financial Overview
                </span>
                <span
                  className="flex items-center gap-2 text-xs font-bold"
                  style={{ color: "var(--green-accent)" }}
                >
                  <span
                    className="pulse-dot w-2 h-2 rounded-full inline-block"
                    style={{ background: "var(--green-accent)" }}
                  />
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "98%",  label: "Client Satisfaction", change: "↑ +2% this year" },
                  { num: "15+",  label: "Years Experience",    change: "↑ Growing strong" },
                  { num: "500+", label: "Businesses Served",   change: "↑ +45 this quarter" },
                  { num: "£2M+", label: "Tax Savings Found",   change: "↑ +18% vs last year" },
                ].map((s) => (
                  <div key={s.label} className="stat-item rounded-2xl p-5" style={{ background: "var(--teal-light)" }}>
                    <div
                      className="text-3xl font-black"
                      style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}
                    >
                      {s.num}
                    </div>
                    <div className="text-xs font-semibold mt-1" style={{ color: "var(--text-mid)" }}>{s.label}</div>
                    <div className="text-xs font-bold mt-0.5" style={{ color: "var(--green-accent)" }}>{s.change}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl p-4" style={{ background: "var(--teal-light)" }}>
                <div className="flex items-end gap-2 h-14">
                  {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className={`bar flex-1 bar-anim ${i === 6 ? "bg-[var(--green-accent)]" : "bg-[var(--teal-mid)]"}`}
                      style={{ height: `${h}%`, animationDelay: `${0.5 + i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-xs font-semibold mt-2" style={{ color: "var(--text-mid)" }}>
                  Monthly client growth — last 7 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white" id="features">
        <div className="max-w-6xl mx-auto px-12 py-24">
          <div
            className="text-center max-w-xl mx-auto reveal"
            ref={(el) => addReveal(el, 0)}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4"
              style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}
            >
              ✦ Why Choose Heritage?
            </span>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              We combine decades of experience with modern approaches
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: "Timeless Values",
                desc: "We uphold the principles that have guided us for generations — integrity, accuracy, and care in everything we do.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                ),
                title: "Innovation",
                desc: "We embrace new technologies and methodologies to stay ahead — delivering smarter financial solutions for your business.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                ),
                title: "Community",
                desc: "We are committed to serving and strengthening our community — because when our clients thrive, we all do.",
              },
            ].map((f, i) => (
              <div
                key={f.title}
                className="feature-card bg-white rounded-2xl p-9 border reveal"
                style={{ borderColor: "rgba(10,77,68,0.08)" }}
                ref={(el) => addReveal(el, i + 1)}
              >
                <div
                  className="feature-icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "var(--teal-light)" }}
                >
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="var(--teal-dark)">
                    {f.icon}
                  </svg>
                </div>
                <h3
                  className="font-black text-lg mb-3"
                  style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="mx-12 my-24 rounded-[32px] px-16 py-20 text-center relative overflow-hidden reveal"
        style={{ background: "var(--teal-dark)" }}
        ref={(el) => addReveal(el, 4)}
      >
        <div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "rgba(46,204,142,0.15)", top: -150, right: -100 }}
        />
        <div
          className="absolute w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "rgba(46,204,142,0.1)", bottom: -80, left: -60 }}
        />

        <div className="relative z-10">
          <h2
            className="text-white"
            style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900 }}
          >
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Contact us today to learn how we can help preserve your heritage and build your future.
          </p>
          <div className="flex gap-4 justify-center mt-10 flex-wrap">
            <Link
              href="/contact"
              className="rounded-full px-9 py-[14px] text-base font-black no-underline border-2 transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: "var(--green-accent)",
                borderColor: "var(--green-accent)",
                color: "var(--teal-dark)",
                fontFamily: "Nunito, sans-serif",
              }}
            >
              Get in Touch →
            </Link>
            <Link
              href="/services"
              className="rounded-full px-9 py-[14px] text-base font-black text-white no-underline border-2 border-white/30 transition-all hover:-translate-y-1 hover:border-white"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Our Services ↗
            </Link>
          </div>
        </div>
      </section>

      <footer
        className="bg-white border-t border-black/5 px-12 py-8 text-center text-sm"
        style={{ color: "var(--text-mid)" }}
      >
        <p>
          © 2025 Heritage Accounting. All rights reserved. ·{" "}
          <Link href="/privacy" className="no-underline hover:underline" style={{ color: "var(--teal-mid)" }}>
            Privacy Policy
          </Link>
        </p>
      </footer>
    </>
  );
}