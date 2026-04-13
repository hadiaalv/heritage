"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Services() {
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

  const services = [
    {
      name: "Bookkeeping",
      description:
        "We categorise and reconcile every transaction so you always have clean, real-time financial data — no more chasing receipts or end-of-year panic.",
      badge: "Most Popular",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      ),
    },
    {
      name: "VAT Returns",
      description:
        "Accurate, MTD-compliant VAT returns submitted on time — every time. We also advise on the most tax-efficient VAT scheme for your business.",
      badge: null,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
      ),
    },
    {
      name: "Year-End Accounts",
      description:
        "Fully prepared statutory accounts with cross-referenced working papers, filed with Companies House and HMRC well ahead of any deadline.",
      badge: null,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5" />
      ),
    },
    {
      name: "Tax Planning & Self Assessment",
      description:
        "Proactive tax reviews to minimise your liability — corporation tax, personal self-assessment, and dividend planning handled together, not in silos.",
      badge: null,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      ),
    },
    {
      name: "Payroll & Auto-Enrolment",
      description:
        "End-to-end payroll processing — weekly, fortnightly, or monthly — including RTI submissions, pension auto-enrolment, and P60s for all employees.",
      badge: null,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      ),
    },
    {
      name: "Management Accounts",
      description:
        "Monthly or quarterly management reports giving you a real-time view of revenue, margins, and cash flow — so you can make informed decisions fast.",
      badge: null,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      ),
    },
    {
      name: "Cloud Accounting Setup",
      description:
        "Xero and QuickBooks migration, setup, and ongoing support — including bank feeds, expense rules, and staff training so your team hits the ground running.",
      badge: null,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      ),
    },
    {
      name: "Business Advisory",
      description:
        "Strategic advice on structure, growth, and succession — from incorporating as a limited company to planning a profitable exit.",
      badge: null,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      ),
    },
    {
      name: "Company Formation",
      description:
        "We handle Companies House registration, registered office address, and all initial compliance paperwork — so you are trading within days, not weeks.",
      badge: "New",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      ),
    },
  ];

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

        @keyframes fadeUp  { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse   { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.3); } }
        @keyframes scroll  { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        .animate-fade-up   { animation: fadeUp 0.6s ease both; }
        .animate-fade-up-1 { animation: fadeUp 0.6s ease 0.1s both; }
        .animate-fade-up-2 { animation: fadeUp 0.6s ease 0.2s both; }
        .animate-fade-up-3 { animation: fadeUp 0.6s ease 0.3s both; }

        .pulse-dot { animation: pulse 2s infinite; }

        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal-visible { opacity: 1; transform: none; }

        .service-card { transition: all 0.3s; position: relative; overflow: hidden; }
        .service-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--teal-dark), var(--green-accent)); transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; }
        .service-card:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(10,77,68,0.1); border-color: transparent !important; }
        .service-card:hover::after { transform: scaleX(1); }
        .service-card:hover .service-icon-wrap { background: var(--teal-dark) !important; }
        .service-card:hover .service-icon-wrap svg { stroke: white !important; }
        .service-icon-wrap { transition: background 0.3s; }

        .step-circle { transition: transform 0.2s, background 0.2s; }
        .step-circle:hover { transform: scale(1.1); background: var(--green-accent) !important; }

        .who-card { transition: all 0.3s; }
        .who-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(10,77,68,0.1); border-color: transparent !important; }

        .testimonial-card { transition: all 0.3s; }
        .testimonial-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(10,77,68,0.1); }

        .logo-track { display: flex; gap: 48px; align-items: center; animation: scroll 22s linear infinite; white-space: nowrap; }
        .logo-scroll-wrap { overflow: hidden; }

        .accordion-btn { transition: background 0.2s; }
        .accordion-btn:hover { background: var(--teal-light) !important; }
      `}</style>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="min-h-[60vh] flex items-center pt-[140px] pb-24 px-12 relative overflow-hidden">
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, background: "var(--teal-mid)", top: -120, right: -100, filter: "blur(80px)", opacity: 0.15 }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 280, height: 280, background: "var(--green-accent)", bottom: 40, left: 80, filter: "blur(80px)", opacity: 0.14 }} />

        <div className="max-w-6xl mx-auto w-full text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[var(--green-accent)]/40 px-4 py-[6px] rounded-full text-xs font-bold mb-6" style={{ color: "var(--teal-mid)" }}>
            <span className="pulse-dot w-2 h-2 rounded-full inline-block" style={{ background: "var(--green-accent)" }} />
            Comprehensive accounting services
          </div>

          <h1 className="animate-fade-up-1 text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
            Our <span style={{ color: "var(--green-accent)" }}>Services</span>
          </h1>

          <p className="animate-fade-up-2 mt-5 text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "var(--text-mid)" }}>
            From day-to-day bookkeeping to long-term financial strategy — we have the expertise to support every stage of your business journey.
          </p>

          <div className="animate-fade-up-3 flex flex-wrap items-center justify-center gap-6 mt-10">
            {["Fixed monthly fees", "No hidden charges", "3-hour response guarantee", "MTD compliant"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-bold" style={{ color: "var(--teal-mid)" }}>
                <span style={{ color: "var(--green-accent)" }}>✓</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL-INCLUSIVE PACKAGE BANNER ─────────────────────── */}
      <section className="px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-10 relative overflow-hidden reveal" ref={(el) => addReveal(el, 0)} style={{ background: "var(--teal-dark)" }}>
            <div className="absolute w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.12)", top: -100, right: -60 }} />
            <div className="absolute w-48 h-48 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.08)", bottom: -60, left: -40 }} />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "rgba(46,204,142,0.2)", color: "var(--green-accent)" }}>
                  ✦ Our Signature Package
                </span>
                <h2 className="text-white mb-4 text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900 }}>
                  All-inclusive accounting — from £15/month
                </h2>
                <p className="text-base" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                  One flat monthly fee. No surprises, no add-ons. Everything your business needs to stay compliant and grow with confidence.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 mt-8 rounded-full px-8 py-[13px] text-base font-black no-underline border-2 transition-all hover:-translate-y-1" style={{ background: "var(--green-accent)", borderColor: "var(--green-accent)", color: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}>
                  Get a Free Quote →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Monthly or quarterly bookkeeping",
                  "Year-end company accounts",
                  "VAT returns (if applicable)",
                  "Management reports",
                  "Regular tax reviews & advice",
                  "Self-assessment tax returns",
                  "Unlimited phone & email support",
                  "Dedicated accountant, always",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="font-black flex-shrink-0" style={{ color: "var(--green-accent)" }}>✓</span>
                    <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────────────────────── */}
      <section className="bg-white py-24 px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14 reveal" ref={(el) => addReveal(el, 10)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ What We Offer</span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>Everything your business needs, under one roof</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>Each service is delivered by a named accountant who understands your business — not a faceless team or automated system.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.name} className="service-card bg-white rounded-2xl p-9 border relative reveal" style={{ borderColor: "rgba(10,77,68,0.08)" }} ref={(el) => addReveal(el, 11 + i)}>
                {s.badge && (
                  <span className="absolute top-5 right-5 text-xs font-black px-3 py-1 rounded-full" style={{ background: "var(--teal-light)", color: "var(--teal-mid)", fontFamily: "Nunito, sans-serif" }}>
                    {s.badge}
                  </span>
                )}
                <div className="service-icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--teal-light)" }}>
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="var(--teal-dark)">{s.icon}</svg>
                </div>
                <h3 className="font-black text-lg mb-3" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{s.name}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-mid)" }}>{s.description}</p>
                <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-black no-underline" style={{ color: "var(--teal-mid)", fontFamily: "Nunito, sans-serif" }}>
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE HELP ──────────────────────────────────────── */}
      <section className="py-24 px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 reveal" ref={(el) => addReveal(el, 30)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ Who We Help</span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>Accounting for every business type</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>Whether you&apos;re just starting out or scaling up, we have a plan built around your needs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: "🧑‍💼", title: "Sole Traders",        from: "From £15/mo", desc: "Simple, stress-free self assessments, bookkeeping, and ongoing tax advice.", includes: ["Self assessment", "Bookkeeping", "Tax advice"] },
              { emoji: "🏢", title: "Limited Companies",   from: "From £50/mo", desc: "Full company accounts, CT600 returns, and director self-assessments handled end to end.", includes: ["Company accounts", "Corporation tax", "Director SA"] },
              { emoji: "🤝", title: "Partnerships & LLPs", from: "From £40/mo", desc: "Partnership tax returns and profit allocation handled with care and precision.", includes: ["Partnership SA", "VAT returns", "Management accounts"] },
              { emoji: "🔧", title: "Contractors",         from: "From £35/mo", desc: "IR35 guidance, umbrella vs limited advice, and quarterly financial reviews.", includes: ["IR35 review", "Payroll", "Expense claims"] },
            ].map((card, i) => (
              <div key={card.title} className="who-card bg-white rounded-2xl p-7 border flex flex-col reveal" style={{ borderColor: "rgba(10,77,68,0.08)" }} ref={(el) => addReveal(el, 31 + i)}>
                <div className="text-3xl mb-4">{card.emoji}</div>
                <h3 className="font-black text-base mb-2" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{card.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-mid)" }}>{card.desc}</p>
                <div className="mt-auto">
                  <div className="flex flex-col gap-1 mb-4">
                    {card.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--text-mid)" }}>
                        <span style={{ color: "var(--green-accent)" }}>✓</span>{item}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-black px-3 py-1 rounded-full" style={{ background: "var(--teal-light)", color: "var(--teal-mid)", fontFamily: "Nunito, sans-serif" }}>{card.from}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────── */}
      <section className="py-24 px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 reveal" ref={(el) => addReveal(el, 40)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ How We Work</span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>Up and running in days, not weeks</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>Switching to Heritage is simple. We manage the entire handover so there&apos;s no disruption to your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ background: "linear-gradient(90deg, var(--teal-dark), var(--green-accent))", zIndex: 0 }} />
            {[
              { step: "01", title: "Free Consultation", desc: "Tell us about your business and goals. No obligation, no jargon." },
              { step: "02", title: "Tailored Proposal",  desc: "We send a clear, fixed-price proposal within 24 hours." },
              { step: "03", title: "Smooth Handover",    desc: "We contact your previous accountant and gather all records." },
              { step: "04", title: "Ongoing Support",    desc: "Your dedicated accountant is always a call or email away." },
            ].map((phase, i) => (
              <div key={phase.step} className="text-center relative z-10 reveal" ref={(el) => addReveal(el, 41 + i)}>
                <div className="step-circle inline-flex items-center justify-center w-16 h-16 rounded-full text-xl mb-5 mx-auto cursor-default" style={{ background: "var(--teal-dark)", color: "white", fontFamily: "Nunito, sans-serif", fontWeight: 900 }}>
                  {phase.step}
                </div>
                <h3 className="font-black text-base mb-1" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{phase.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14 reveal" ref={(el) => addReveal(el, 50)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ Client Stories</span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>Trusted by businesses across the UK</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>Don&apos;t just take our word for it — here&apos;s what our clients have to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Heritage took the stress out of our year-end completely. Everything was filed on time and they found savings we had no idea we were missing.", name: "Sarah M.", role: "Director, London consultancy", stars: 5 },
              { quote: "I've used several accountants over the years — Heritage is the first one that actually feels like they're on my side. Responsive, proactive, and genuinely helpful.", name: "James T.", role: "Sole trader, West Sussex", stars: 5 },
              { quote: "Switching to Heritage was the best business decision we made last year. Our books have never been so clean and the VAT submissions are always spot on.", name: "Priya K.", role: "Co-founder, e-commerce brand", stars: 5 },
            ].map((t, i) => (
              <div key={t.name} className="testimonial-card bg-white rounded-2xl p-8 border reveal" style={{ borderColor: "rgba(10,77,68,0.08)" }} ref={(el) => addReveal(el, 51 + i)}>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="var(--green-accent)">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "var(--text-mid)" }}>&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0" style={{ background: "var(--teal-light)", color: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-black text-sm" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "var(--text-mid)" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Aggregate rating */}
          <div className="mt-12 bg-white rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-8 reveal" style={{ boxShadow: "0 8px 32px rgba(10,77,68,0.07)" }} ref={(el) => addReveal(el, 55)}>
            <div className="text-center sm:text-left flex-shrink-0">
              <p className="text-6xl font-black" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>4.9</p>
              <div className="flex gap-1 justify-center sm:justify-start mt-1">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="var(--green-accent)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs font-semibold mt-1" style={{ color: "var(--text-mid)" }}>Based on 140+ reviews</p>
            </div>
            <div className="flex-1 w-full">
              {[{ label: "5 stars", pct: 91 }, { label: "4 stars", pct: 7 }, { label: "3 stars", pct: 2 }].map((row) => (
                <div key={row.label} className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold w-12 text-right flex-shrink-0" style={{ color: "var(--text-mid)" }}>{row.label}</span>
                  <div className="flex-1 h-2 rounded-full" style={{ background: "var(--teal-light)" }}>
                    <div className="h-2 rounded-full" style={{ width: `${row.pct}%`, background: "linear-gradient(90deg, var(--teal-dark), var(--green-accent))" }} />
                  </div>
                  <span className="text-xs font-bold w-8 flex-shrink-0" style={{ color: "var(--teal-mid)" }}>{row.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOFTWARE LOGOS ───────────────────────────────────── */}
      <section className="py-16 px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-10 reveal" style={{ color: "var(--text-mid)" }} ref={(el) => addReveal(el, 60)}>
            We work with all major accounting platforms
          </p>
          <div className="logo-scroll-wrap reveal" ref={(el) => addReveal(el, 61)}>
            <div className="logo-track">
              {["Xero", "QuickBooks", "Sage", "FreeAgent", "IRIS", "TaxCalc", "Capium", "Moneysoft", "Xero", "QuickBooks", "Sage", "FreeAgent", "IRIS", "TaxCalc", "Capium", "Moneysoft"].map((name, i) => (
                <div key={i} className="flex-shrink-0 px-6 py-3 rounded-xl bg-white border font-bold text-sm" style={{ borderColor: "rgba(10,77,68,0.1)", color: "var(--teal-mid)", fontFamily: "Nunito, sans-serif" }}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14 reveal" ref={(el) => addReveal(el, 70)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ Common Questions</span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>Services FAQ</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>Quick answers to the questions we hear most often.</p>
          </div>

          {[
            { q: "Do I need to visit your office?",               a: "No — we are a fully digital practice. Everything is handled securely online, including document sharing, e-signatures, and video calls. You get the full service without leaving your desk." },
            { q: "What is included in the monthly fee?",          a: "Your quote covers everything we discuss upfront — bookkeeping, VAT, payroll, accounts, tax returns, and unlimited support. There are never any surprise invoices for routine work." },
            { q: "Can you take over from my existing accountant?", a: "Absolutely. We manage the professional clearance process, contact your previous accountant directly, and collect all the records we need. Most handovers complete within one week." },
            { q: "Which cloud software do you recommend?",        a: "For most small businesses we recommend Xero — it is intuitive, MTD-ready, and integrates with hundreds of other tools. We also fully support QuickBooks, Sage, and FreeAgent depending on your workflow." },
            { q: "How do you handle Making Tax Digital?",         a: "All of our services are fully MTD-compliant. We migrate your records to approved software, configure the digital links HMRC requires, and handle all submissions on your behalf." },
            { q: "Is there a minimum contract term?",             a: "We operate on a rolling monthly basis with no long-term lock-in. We believe if we are doing a great job, you will want to stay — we do not need a contract to guarantee that." },
          ].map((item, i) => (
            <details key={i} className="group border-b last:border-b-0 reveal" style={{ borderColor: "rgba(10,77,68,0.08)" }} ref={(el) => addReveal(el, 71 + i)}>
              <summary className="accordion-btn flex justify-between items-center py-5 px-2 rounded-xl cursor-pointer list-none" style={{ color: "var(--teal-dark)" }}>
                <span className="font-black text-base" style={{ fontFamily: "Nunito, sans-serif" }}>{item.q}</span>
                <svg className="flex-shrink-0 ml-4 transition-transform group-open:rotate-45" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="var(--teal-dark)">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </summary>
              <p className="px-2 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="mx-12 my-24 rounded-[32px] px-16 py-20 text-center relative overflow-hidden reveal" style={{ background: "var(--teal-dark)" }} ref={(el) => addReveal(el, 78)}>
        <div className="absolute w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.15)", top: -150, right: -100 }} />
        <div className="absolute w-64 h-64 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.1)", bottom: -80, left: -60 }} />
        <div className="relative z-10">
          <h2 className="text-white text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900 }}>Ready to Get Started?</h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Let&apos;s talk about how Heritage can take the stress out of your finances — book a free, no-obligation consultation today.
          </p>
          <div className="flex gap-4 justify-center mt-10 flex-wrap">
            <Link href="/contact" className="rounded-full px-9 py-[14px] text-base font-black no-underline border-2 transition-all hover:-translate-y-1 hover:shadow-xl" style={{ background: "var(--green-accent)", borderColor: "var(--green-accent)", color: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}>
              Book a Free Consultation →
            </Link>
            <Link href="/" className="rounded-full px-9 py-[14px] text-base font-black text-white no-underline border-2 border-white/30 transition-all hover:-translate-y-1 hover:border-white" style={{ fontFamily: "Nunito, sans-serif" }}>
              Back to Home ↗
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-black/5 px-12 py-8 text-center text-sm" style={{ color: "var(--text-mid)" }}>
        <p>
          © 2025 Heritage Accounting. All rights reserved. ·{" "}
          <Link href="/privacy" className="no-underline hover:underline" style={{ color: "var(--teal-mid)" }}>Privacy Policy</Link>
        </p>
      </footer>
    </>
  );
}