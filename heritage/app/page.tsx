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
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

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

        .service-pill { transition: all 0.25s; border: 1.5px solid rgba(10,77,68,0.1); }
        .service-pill:hover { background: var(--teal-dark) !important; color: white !important; border-color: var(--teal-dark); transform: translateY(-3px); box-shadow: 0 12px 28px rgba(10,77,68,0.15); }
        .service-pill:hover span { color: white !important; }
        .service-pill:hover .pill-icon { background: rgba(255,255,255,0.15) !important; }
        .service-pill:hover .pill-icon svg { stroke: white !important; }

        .stat-item { transition: transform 0.2s; }
        .stat-item:hover { transform: translateY(-4px); }

        .bar { transition: background 0.2s; border-radius: 6px 6px 0 0; }
        .bar:hover { background: var(--green-accent) !important; }

        .hero-accent { position: relative; display: inline-block; }
        .hero-accent::after { content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--green-accent), var(--green-bright)); border-radius: 4px; }

        .testimonial-card { transition: all 0.3s; }
        .testimonial-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(10,77,68,0.1); }

        .logo-track { display: flex; gap: 48px; align-items: center; animation: scroll 20s linear infinite; white-space: nowrap; }
        .logo-scroll-wrap { overflow: hidden; }

        .why-item { transition: all 0.25s; }
        .why-item:hover .why-num { color: var(--green-accent) !important; }

        .accordion-btn { transition: background 0.2s; }
        .accordion-btn:hover { background: var(--teal-light) !important; }
      `}</style>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center pt-[120px] pb-20 px-12 relative overflow-hidden">
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, background: "var(--teal-mid)", top: -100, right: -80, filter: "blur(80px)", opacity: 0.18 }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 300, height: 300, background: "var(--green-accent)", bottom: 80, left: 60, filter: "blur(80px)", opacity: 0.18 }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto w-full">
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[var(--green-accent)]/40 px-4 py-[6px] rounded-full text-xs font-bold mb-6" style={{ color: "var(--teal-mid)" }}>
              <span className="pulse-dot w-2 h-2 rounded-full inline-block" style={{ background: "var(--green-accent)" }} />
              Trusted by 500+ businesses
            </div>

            <h1 className="animate-fade-up-1 text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              Welcome to <br />
              <span className="hero-accent" style={{ color: "var(--green-accent)" }}>Heritage</span>
            </h1>

            <p className="animate-fade-up-2 mt-5 text-lg leading-relaxed" style={{ color: "var(--text-mid)" }}>
              Preserving tradition, embracing innovation. Building a legacy that lasts — with accounting that&apos;s clear, modern, and built for you.
            </p>

            <div className="animate-fade-up-3 flex gap-4 mt-9 flex-wrap">
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full px-8 py-[14px] text-base font-black text-white no-underline border-2 transition-all hover:-translate-y-1 hover:shadow-xl" style={{ background: "var(--teal-dark)", borderColor: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}>
                Learn More →
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full px-8 py-[14px] text-base font-black no-underline border-2 transition-all hover:-translate-y-1 hover:border-[var(--teal-dark)]" style={{ color: "var(--teal-dark)", borderColor: "rgba(10,77,68,0.2)", fontFamily: "Nunito, sans-serif" }}>
                Our Services ↗
              </Link>
            </div>
          </div>

          {/* Stats card */}
          <div className="animate-fade-up-2">
            <div className="bg-white rounded-3xl p-8 relative overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(10,77,68,0.12)" }}>
              <div className="absolute top-0 left-0 right-0 h-[5px]" style={{ background: "linear-gradient(90deg, var(--teal-dark), var(--green-accent))" }} />
              <div className="flex items-center justify-between mb-6">
                <span className="font-black text-base" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>Financial Overview</span>
                <span className="flex items-center gap-2 text-xs font-bold" style={{ color: "var(--green-accent)" }}>
                  <span className="pulse-dot w-2 h-2 rounded-full inline-block" style={{ background: "var(--green-accent)" }} />
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
                    <div className="text-3xl font-black" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{s.num}</div>
                    <div className="text-xs font-semibold mt-1" style={{ color: "var(--text-mid)" }}>{s.label}</div>
                    <div className="text-xs font-bold mt-0.5" style={{ color: "var(--green-accent)" }}>{s.change}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl p-4" style={{ background: "var(--teal-light)" }}>
                <div className="flex items-end gap-2 h-14">
                  {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className={`bar flex-1 bar-anim ${i === 6 ? "bg-[var(--green-accent)]" : "bg-[var(--teal-mid)]"}`} style={{ height: `${h}%`, animationDelay: `${0.5 + i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-xs font-semibold mt-2" style={{ color: "var(--text-mid)" }}>Monthly client growth — last 7 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES QUICK-LINKS ─────────────────────────────── */}
      <section className="bg-white py-20 px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 reveal" ref={(el) => addReveal(el, 20)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ Our Services</span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>Everything your business needs, under one roof</h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>From daily bookkeeping to long-term tax strategy — we handle the numbers so you can focus on growing your business.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: "Bookkeeping",        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /> },
              { label: "VAT Returns",        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" /> },
              { label: "Year-End Accounts",  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5" /> },
              { label: "Payroll",            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /> },
              { label: "Tax Planning",       icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /> },
              { label: "Management Accounts",icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /> },
              { label: "Cloud Accounting",   icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /> },
              { label: "Self Assessment",    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> },
            ].map((s, i) => (
              <Link
                key={s.label}
                href="/services"
                className="service-pill reveal flex items-center gap-3 bg-white rounded-2xl px-5 py-4 no-underline"
                ref={(el) => addReveal(el, 21 + i)}
              >
                <div className="pill-icon w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--teal-light)" }}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="var(--teal-dark)">{s.icon}</svg>
                </div>
                <span className="text-sm font-bold" style={{ color: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}>{s.label}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 reveal" ref={(el) => addReveal(el, 30)}>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full px-8 py-[13px] text-sm font-black no-underline border-2 transition-all hover:-translate-y-1" style={{ color: "var(--teal-dark)", borderColor: "rgba(10,77,68,0.2)", fontFamily: "Nunito, sans-serif" }}>
              View All Services ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY HERITAGE (split layout) ──────────────────────── */}
      <section className="py-24 px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div className="reveal" ref={(el) => addReveal(el, 40)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-5" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ Why Heritage?</span>
            <h2 className="text-4xl mb-5" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              Bespoke accounting — because one size never fits all
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
              Whether you&apos;re a sole trader just starting out or an established limited company planning your next chapter, we tailor our approach around your goals — not the other way around.
            </p>
            {[
              { num: "01", title: "Fixed, transparent fees",       desc: "No surprise bills. You know exactly what you pay from day one." },
              { num: "02", title: "Dedicated accountant",          desc: "A real person who knows your business and is always on hand." },
              { num: "03", title: "3-hour response guarantee",     desc: "No question is too small. We always reply within three hours." },
              { num: "04", title: "MTD-ready & fully digital",     desc: "We keep you compliant with Making Tax Digital at every step." },
            ].map((item) => (
              <div key={item.num} className="why-item flex gap-5 mb-6">
                <div className="why-num text-3xl font-black flex-shrink-0 leading-none" style={{ fontFamily: "Nunito, sans-serif", color: "rgba(10,77,68,0.12)" }}>{item.num}</div>
                <div>
                  <h4 className="font-black text-base mb-1" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — visual card stack */}
          <div className="reveal" ref={(el) => addReveal(el, 41)}>
            <div className="relative">
              {/* Background card */}
              <div className="absolute inset-0 rounded-3xl translate-x-4 translate-y-4" style={{ background: "var(--teal-light)", zIndex: 0 }} />
              <div className="relative rounded-3xl p-8 bg-white z-10" style={{ boxShadow: "0 16px 48px rgba(10,77,68,0.1)" }}>
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: "linear-gradient(90deg, var(--teal-dark), var(--green-accent))" }} />

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "var(--teal-light)" }}>
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="var(--teal-dark)">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black text-base" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>Your 2024/25 Tax Review</p>
                    <p className="text-xs" style={{ color: "var(--text-mid)" }}>Completed · No action needed</p>
                  </div>
                  <span className="ml-auto text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(46,204,142,0.15)", color: "var(--teal-mid)" }}>✓ Filed</span>
                </div>

                {[
                  { label: "Corporation Tax",   val: "£4,820",  pct: 72 },
                  { label: "VAT Liability",     val: "£1,340",  pct: 45 },
                  { label: "Tax Savings Found", val: "£2,100",  pct: 88 },
                ].map((row) => (
                  <div key={row.label} className="mb-5">
                    <div className="flex justify-between text-xs font-semibold mb-1" style={{ color: "var(--text-mid)" }}>
                      <span>{row.label}</span><span style={{ color: "var(--teal-dark)", fontWeight: 700 }}>{row.val}</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: "var(--teal-light)" }}>
                      <div className="h-2 rounded-full" style={{ width: `${row.pct}%`, background: "linear-gradient(90deg, var(--teal-dark), var(--green-accent))" }} />
                    </div>
                  </div>
                ))}

                <div className="mt-6 rounded-2xl p-4 flex items-center gap-4" style={{ background: "var(--teal-light)" }}>
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="text-xs font-black" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>Your accountant left a note</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-mid)" }}>We&apos;ve identified a further £640 relief you can claim next quarter.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────────── */}
      <section className="bg-white" id="features">
        <div className="max-w-6xl mx-auto px-12 py-24">
          <div className="text-center max-w-xl mx-auto reveal" ref={(el) => addReveal(el, 0)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ Why Choose Heritage?</span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              We combine decades of experience with modern approaches
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "Timeless Values",
                desc: "We uphold the principles that have guided us for generations — integrity, accuracy, and care in everything we do.",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
                title: "Innovation",
                desc: "We embrace new technologies and methodologies to stay ahead — delivering smarter financial solutions for your business.",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />,
                title: "Community",
                desc: "We are committed to serving and strengthening our community — because when our clients thrive, we all do.",
              },
            ].map((f, i) => (
              <div key={f.title} className="feature-card bg-white rounded-2xl p-9 border reveal" style={{ borderColor: "rgba(10,77,68,0.08)" }} ref={(el) => addReveal(el, i + 1)}>
                <div className="feature-icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--teal-light)" }}>
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="var(--teal-dark)">{f.icon}</svg>
                </div>
                <h3 className="font-black text-lg mb-3" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE HELP ──────────────────────────────────────── */}
      <section className="py-24 px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 reveal" ref={(el) => addReveal(el, 50)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ Who We Help</span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>Accounting for every stage of your journey</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Sole Traders",        desc: "Simple, stress-free self assessments and bookkeeping from £15/month.",           emoji: "🧑‍💼" },
              { title: "Limited Companies",   desc: "Full company accounts, CT600 returns, and director self-assessments.",           emoji: "🏢" },
              { title: "Partnerships & LLPs", desc: "Partnership tax returns and profit allocation handled with care.",              emoji: "🤝" },
              { title: "Contractors",         desc: "IR35 guidance, umbrella vs limited advice, and quarterly reviews included.",    emoji: "🔧" },
            ].map((card, i) => (
              <div key={card.title} className="feature-card bg-white rounded-2xl p-7 border reveal" style={{ borderColor: "rgba(10,77,68,0.08)" }} ref={(el) => addReveal(el, 51 + i)}>
                <div className="text-3xl mb-4">{card.emoji}</div>
                <h3 className="font-black text-base mb-2" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="bg-white py-24 px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14 reveal" ref={(el) => addReveal(el, 60)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ Client Stories</span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>Our clients love working with us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Heritage took the stress out of our year-end completely. Everything was filed on time and they found savings we had no idea we were missing.",
                name: "Sarah M.",
                role: "Director, London-based consultancy",
                stars: 5,
              },
              {
                quote: "I've used several accountants over the years — Heritage is the first one that actually feels like they're on my side. Responsive, proactive, and genuinely helpful.",
                name: "James T.",
                role: "Sole trader, West Sussex",
                stars: 5,
              },
              {
                quote: "Switching to Heritage was the best business decision we made last year. Our books have never been so clean and the VAT submissions are always spot on.",
                name: "Priya K.",
                role: "Co-founder, e-commerce brand",
                stars: 5,
              },
            ].map((t, i) => (
              <div key={t.name} className="testimonial-card bg-white rounded-2xl p-8 border reveal" style={{ borderColor: "rgba(10,77,68,0.08)" }} ref={(el) => addReveal(el, 61 + i)}>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="var(--green-accent)">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "var(--text-mid)" }}>&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black" style={{ background: "var(--teal-light)", color: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}>
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
        </div>
      </section>

      {/* ─── SOFTWARE LOGOS ───────────────────────────────────── */}
      <section className="py-16 px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-10 reveal" style={{ color: "var(--text-mid)" }} ref={(el) => addReveal(el, 70)}>
            We work with all major accounting platforms
          </p>
          <div className="logo-scroll-wrap reveal" ref={(el) => addReveal(el, 71)}>
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
      <section className="bg-white py-24 px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14 reveal" ref={(el) => addReveal(el, 80)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ Common Questions</span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>Frequently asked questions</h2>
          </div>

          {[
            { q: "How much do your services cost?", a: "We offer fixed monthly fees starting from £15/month for sole traders. There are no hidden charges — your quote covers everything discussed, and we review it together before any work begins." },
            { q: "Can I switch accountants mid-year?", a: "Absolutely. We handle the entire handover process, including contacting your previous accountant for all records and correspondence. Most clients are fully onboarded within one week." },
            { q: "Do you support Making Tax Digital (MTD)?", a: "Yes. We are fully MTD-compliant and help all clients migrate to compatible software such as Xero or QuickBooks, ensuring you meet every HMRC digital requirement." },
            { q: "How quickly do you respond to queries?", a: "We guarantee a maximum three-hour response time during business hours. You will always have a dedicated accountant — not a call centre — who knows your business personally." },
            { q: "What software do you use?", a: "We work with all major platforms including Xero, QuickBooks, Sage, FreeAgent, IRIS, and TaxCalc. We will recommend the best fit for your business size and industry." },
          ].map((item, i) => (
            <details key={i} className="group border-b last:border-b-0 reveal" style={{ borderColor: "rgba(10,77,68,0.08)" }} ref={(el) => addReveal(el, 81 + i)}>
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
      <section id="cta" className="mx-12 my-24 rounded-[32px] px-16 py-20 text-center relative overflow-hidden reveal" style={{ background: "var(--teal-dark)" }} ref={(el) => addReveal(el, 4)}>
        <div className="absolute w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.15)", top: -150, right: -100 }} />
        <div className="absolute w-64 h-64 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.1)", bottom: -80, left: -60 }} />

        <div className="relative z-10">
          <h2 className="text-4xl text-white" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900 }}>Ready to Start Your Journey?</h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Contact us today to learn how we can help preserve your heritage and build your future.
          </p>
          <div className="flex gap-4 justify-center mt-10 flex-wrap">
            <Link href="/contact" className="rounded-full px-9 py-[14px] text-base font-black no-underline border-2 transition-all hover:-translate-y-1 hover:shadow-xl" style={{ background: "var(--green-accent)", borderColor: "var(--green-accent)", color: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}>
              Get in Touch →
            </Link>
            <Link href="/services" className="rounded-full px-9 py-[14px] text-base font-black text-white no-underline border-2 border-white/30 transition-all hover:-translate-y-1 hover:border-white" style={{ fontFamily: "Nunito, sans-serif" }}>
              Our Services ↗
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