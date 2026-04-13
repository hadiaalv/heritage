"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function About() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("reveal-visible"), i * 100);
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
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }

        .animate-fade-up   { animation: fadeUp 0.6s ease both; }
        .animate-fade-up-1 { animation: fadeUp 0.6s ease 0.1s both; }
        .animate-fade-up-2 { animation: fadeUp 0.6s ease 0.2s both; }

        .pulse-dot { animation: pulse 2s infinite; }
        .float-anim { animation: float 5s ease-in-out infinite; }

        .value-card { transition: all 0.3s; }
        .value-card:hover { transform: translateY(-6px); }
        .value-card:hover .value-icon { background: var(--teal-dark) !important; }
        .value-card:hover .value-icon svg { stroke: white !important; }
        .value-icon { transition: background 0.3s; }

        .story-point { transition: all 0.25s; border-left: 3px solid transparent; }
        .story-point:hover { border-left-color: var(--green-accent); padding-left: 12px; }

        .hero-accent { position: relative; display: inline-block; }
        .hero-accent::after {
          content: '';
          position: absolute; bottom: -4px; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, var(--green-accent), var(--green-bright));
          border-radius: 4px;
        }

        .decade-card { transition: all 0.3s; }
        .decade-card:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 20px 40px rgba(10,77,68,0.12) !important; }
      `}</style>

      {/* HERO */}
      <section className="min-h-[55vh] flex items-center pt-[120px] pb-16 px-12 relative overflow-hidden">
        <div className="absolute rounded-full pointer-events-none" style={{ width: 450, height: 450, background: "var(--teal-mid)", top: -120, right: -80, filter: "blur(90px)", opacity: 0.15 }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 250, height: 250, background: "var(--green-accent)", bottom: 40, left: 40, filter: "blur(70px)", opacity: 0.14 }} />

        <div className="max-w-6xl mx-auto w-full text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[var(--green-accent)]/40 px-4 py-[6px] rounded-full text-xs font-bold mb-6" style={{ color: "var(--teal-mid)" }}>
            <span className="pulse-dot w-2 h-2 rounded-full inline-block" style={{ background: "var(--green-accent)" }} />
            Building futures since 1970
          </div>

          <h1 className="animate-fade-up-1 text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
            About <span className="hero-accent" style={{ color: "var(--green-accent)" }}>Heritage</span>
          </h1>

          <p className="animate-fade-up-2 mt-5 text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "var(--text-mid)" }}>
            Our story spans generations, blending tradition with innovation to create lasting value.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div className="reveal" ref={(el) => addReveal(el, 0)}>
              <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>
                ✦ Our Heritage
              </span>
              <h2 className="text-4xl mb-6" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
                A Legacy of Excellence
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
                Founded with a vision to preserve the best of the past while embracing the future,
                Heritage has been a cornerstone of quality and integrity for over five decades.
                Our commitment to excellence has made us a trusted partner in our community.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "Innovation with Tradition.",
                    desc: "We blend time-honored practices with cutting-edge solutions.",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />,
                  },
                  {
                    title: "Uncompromising Quality.",
                    desc: "Every project meets our rigorous standards of excellence.",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  },
                  {
                    title: "Community Focus.",
                    desc: "We invest in our community and support local initiatives.",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />,
                  },
                ].map((point) => (
                  <div key={point.title} className="story-point flex items-start gap-4 pl-0 cursor-default">
                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "var(--teal-light)" }}>
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="var(--teal-dark)">{point.icon}</svg>
                    </div>
                    <div>
                      <span className="font-black text-sm" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{point.title}</span>
                      <span className="text-sm ml-1" style={{ color: "var(--text-mid)" }}>{point.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual card */}
            <div className="reveal" ref={(el) => addReveal(el, 1)}>
              <div className="rounded-3xl p-10 relative overflow-hidden float-anim" style={{ background: "var(--teal-dark)", boxShadow: "0 32px 64px rgba(10,77,68,0.25)" }}>
                {/* decorative blobs */}
                <div className="absolute rounded-full pointer-events-none" style={{ width: 220, height: 220, background: "rgba(46,204,142,0.15)", top: -60, right: -60 }} />
                <div className="absolute rounded-full pointer-events-none" style={{ width: 140, height: 140, background: "rgba(46,204,142,0.1)", bottom: -40, left: -40 }} />

                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: "rgba(46,204,142,0.2)" }}>
                    <svg width="40" height="40" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--green-accent)">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-black mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>Our Story</h3>
                  <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>Building futures since 1970</p>

                  <div className="grid grid-cols-2 gap-4 text-left">
                    {[
                      { num: "55+", label: "Years in Business" },
                      { num: "500+", label: "Clients Served" },
                      { num: "98%", label: "Satisfaction Rate" },
                      { num: "£2M+", label: "Tax Savings Found" },
                    ].map((s) => (
                      <div key={s.label} className="decade-card rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.08)", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
                        <div className="text-2xl font-black" style={{ fontFamily: "Nunito, sans-serif", color: "var(--green-accent)" }}>{s.num}</div>
                        <div className="text-xs font-semibold mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-12 py-24">
          <div className="text-center max-w-xl mx-auto mb-16 reveal" ref={(el) => addReveal(el, 2)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>
              ✦ What We Stand For
            </span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              Our Core Values
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--text-mid)" }}>
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity",
                desc: "We act with honesty and transparency in all our dealings.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
              },
              {
                title: "Excellence",
                desc: "We strive for the highest quality in everything we undertake.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
              },
              {
                title: "Collaboration",
                desc: "We work together with our clients and community partners.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />,
              },
              {
                title: "Compassion",
                desc: "We care deeply about our impact on people and the environment.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C3.1 3.75 1 5.765 1 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
              },
            ].map((v, i) => (
              <div
                key={v.title}
                className="value-card bg-white rounded-2xl p-8 text-center border reveal"
                style={{ borderColor: "rgba(10,77,68,0.08)" }}
                ref={(el) => addReveal(el, 3 + i)}
              >
                <div
                  className="value-icon w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                  style={{ background: "var(--teal-light)" }}
                >
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="var(--teal-dark)">{v.icon}</svg>
                </div>
                <h3 className="font-black text-base mb-2" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="mx-12 my-24 rounded-[32px] px-16 py-20 text-center relative overflow-hidden reveal"
        style={{ background: "var(--teal-dark)" }}
        ref={(el) => addReveal(el, 7)}
      >
        <div className="absolute w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.15)", top: -150, right: -100 }} />
        <div className="absolute w-64 h-64 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.1)", bottom: -80, left: -60 }} />

        <div className="relative z-10">
          <h2 className="text-white" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            Join Our Heritage
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Be part of something greater. Connect with us to learn how we can work together.
          </p>
          <div className="flex gap-4 justify-center mt-10 flex-wrap">
            <Link
              href="/contact"
              className="rounded-full px-9 py-[14px] text-base font-black no-underline border-2 transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "var(--green-accent)", borderColor: "var(--green-accent)", color: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}
            >
              Get in Touch →
            </Link>
            <Link
              href="/"
              className="rounded-full px-9 py-[14px] text-base font-black text-white no-underline border-2 border-white/30 transition-all hover:-translate-y-1 hover:border-white"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Back to Home ↗
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-black/5 px-12 py-8 text-center text-sm" style={{ color: "var(--text-mid)" }}>
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