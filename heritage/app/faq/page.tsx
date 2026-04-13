"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function FAQ() {
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

  const categories = [
    {
      label: "Our Services",
      faqs: [
        { q: "What services does Heritage offer?", a: "Heritage provides comprehensive bookkeeping, VAT returns, year-end accounts, payroll, tax planning, management accounts, cloud accounting, and self-assessment — all under one fixed monthly fee." },
        { q: "What industries do you specialise in?", a: "We serve clients across all sectors, with particular depth in technology, professional services, retail, e-commerce, healthcare, and construction — adapting our approach to each industry's requirements." },
        { q: "Do you work with international clients?", a: "Yes. We have extensive experience working with clients globally and can accommodate various time zones, currencies, and multi-jurisdictional tax considerations." },
      ],
    },
    {
      label: "Pricing & Onboarding",
      faqs: [
        { q: "How much do your services cost?", a: "We offer fixed monthly fees starting from £15/month for sole traders. There are no hidden charges — your quote covers everything discussed, and we review it together before any work begins." },
        { q: "Can I switch accountants mid-year?", a: "Absolutely. We manage the professional clearance process, contact your previous accountant directly, and collect all records we need. Most handovers complete within one week." },
        { q: "Is there a minimum contract term?", a: "We operate on a rolling monthly basis with no long-term lock-in. We believe if we are doing a great job, you will want to stay — we do not need a contract to guarantee that." },
      ],
    },
    {
      label: "Compliance & Technology",
      faqs: [
        { q: "Do you support Making Tax Digital (MTD)?", a: "Yes. We are fully MTD-compliant and help all clients migrate to compatible software such as Xero or QuickBooks, ensuring you meet every HMRC digital requirement." },
        { q: "Which cloud software do you recommend?", a: "For most small businesses we recommend Xero — intuitive, MTD-ready, and integrates with hundreds of tools. We also fully support QuickBooks, Sage, and FreeAgent depending on your workflow." },
        { q: "How do you handle confidential information?", a: "We implement strict security protocols including NDAs, encrypted file transfer, and role-based access controls. Your data is never shared with third parties without explicit consent." },
      ],
    },
    {
      label: "Working With Us",
      faqs: [
        { q: "Do I need to visit your office?", a: "No — we are a fully digital practice. Everything is handled securely online, including document sharing, e-signatures, and video calls. You get the full service without leaving your desk." },
        { q: "How quickly do you respond to queries?", a: "We guarantee a maximum three-hour response time during business hours. You will always have a dedicated accountant — not a call centre — who knows your business personally." },
        { q: "Do you provide ongoing support after year-end?", a: "Absolutely. All packages include year-round support. We proactively reach out ahead of deadlines and flag tax-saving opportunities as they arise throughout the year." },
      ],
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

        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse  { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.3); } }

        .animate-fade-up   { animation: fadeUp 0.6s ease both; }
        .animate-fade-up-1 { animation: fadeUp 0.6s ease 0.1s both; }
        .animate-fade-up-2 { animation: fadeUp 0.6s ease 0.2s both; }
        .animate-fade-up-3 { animation: fadeUp 0.6s ease 0.3s both; }

        .pulse-dot { animation: pulse 2s infinite; }

        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal-visible { opacity: 1; transform: none; }

        .faq-category-card { transition: all 0.3s; position: relative; overflow: hidden; }
        .faq-category-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--teal-dark), var(--green-accent)); transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; }
        .faq-category-card:hover::after { transform: scaleX(1); }

        .accordion-btn { transition: background 0.2s; }
        .accordion-btn:hover { background: var(--teal-light) !important; }

        .step-circle { transition: transform 0.2s, background 0.2s; }
        .step-circle:hover { transform: scale(1.1); background: var(--green-accent) !important; }

        .who-card { transition: all 0.3s; }
        .who-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(10,77,68,0.1); border-color: transparent !important; }
      `}</style>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="min-h-[60vh] flex items-center pt-[140px] pb-24 px-12 relative overflow-hidden">
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, background: "var(--teal-mid)", top: -120, right: -100, filter: "blur(80px)", opacity: 0.15 }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 280, height: 280, background: "var(--green-accent)", bottom: 40, left: 80, filter: "blur(80px)", opacity: 0.14 }} />

        <div className="max-w-6xl mx-auto w-full text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[var(--green-accent)]/40 px-4 py-[6px] rounded-full text-xs font-bold mb-6" style={{ color: "var(--teal-mid)" }}>
            <span className="pulse-dot w-2 h-2 rounded-full inline-block" style={{ background: "var(--green-accent)" }} />
            Got a question? We've got answers.
          </div>

          <h1 className="animate-fade-up-1 text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
            Frequently Asked <span style={{ color: "var(--green-accent)" }}>Questions</span>
          </h1>

          <p className="animate-fade-up-2 mt-5 text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "var(--text-mid)" }}>
            Everything you need to know about Heritage — from pricing and onboarding to compliance and day-to-day support.
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

      {/* ─── QUICK CONTACT BANNER ─────────────────────────────── */}
      <section className="px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-10 relative overflow-hidden reveal" ref={(el) => addReveal(el, 0)} style={{ background: "var(--teal-dark)" }}>
            <div className="absolute w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.12)", top: -100, right: -60 }} />
            <div className="absolute w-48 h-48 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.08)", bottom: -60, left: -40 }} />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "rgba(46,204,142,0.2)", color: "var(--green-accent)" }}>
                  ✦ Still Have Questions?
                </span>
                <h2 className="text-white mb-4" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900 }}>
                  Can't find the answer you're looking for?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                  Our team is always on hand to help. Reach out and we'll get back to you within three hours — no jargon, no obligation.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 mt-8 rounded-full px-8 py-[13px] text-base font-black no-underline border-2 transition-all hover:-translate-y-1" style={{ background: "var(--green-accent)", borderColor: "var(--green-accent)", color: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}>
                  Get in Touch →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Dedicated accountant, always",
                  "3-hour response guarantee",
                  "Free initial consultation",
                  "Fixed, transparent pricing",
                  "No minimum contract term",
                  "Fully digital — no office visits needed",
                  "MTD-ready & cloud accounting setup",
                  "Trusted by 500+ UK businesses",
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

      {/* ─── FAQ ACCORDIONS ───────────────────────────────────── */}
      <section className="bg-white py-24 px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14 reveal" ref={(el) => addReveal(el, 10)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ Common Questions</span>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>Browse by topic</h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>Use the categories below to find what you need — or scroll through everything at once.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((cat, ci) => (
              <div
                key={cat.label}
                className="faq-category-card bg-white rounded-2xl border overflow-hidden reveal"
                style={{ borderColor: "rgba(10,77,68,0.08)" }}
                ref={(el) => addReveal(el, 11 + ci)}
              >
                <div className="px-8 py-5 border-b" style={{ borderColor: "rgba(10,77,68,0.08)", background: "var(--teal-light)" }}>
                  <h3 className="font-black text-base" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{cat.label}</h3>
                </div>
                <div>
                  {cat.faqs.map((item, fi) => (
                    <details key={fi} className="group border-b last:border-b-0" style={{ borderColor: "rgba(10,77,68,0.06)" }}>
                      <summary className="accordion-btn flex justify-between items-center py-4 px-6 cursor-pointer list-none" style={{ color: "var(--teal-dark)" }}>
                        <span className="font-black text-sm pr-4" style={{ fontFamily: "Nunito, sans-serif" }}>{item.q}</span>
                        <svg className="flex-shrink-0 transition-transform group-open:rotate-45" width="18" height="18" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="var(--teal-dark)">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </summary>
                      <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE HELP ──────────────────────────────────────── */}
      <section className="py-24 px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 reveal" ref={(el) => addReveal(el, 20)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ Who We Help</span>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>Accounting for every business type</h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>Whether you're just starting out or scaling up, we have a plan built around your needs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: "🧑‍💼", title: "Sole Traders",        from: "From £15/mo", desc: "Simple, stress-free self assessments, bookkeeping, and ongoing tax advice.", includes: ["Self assessment", "Bookkeeping", "Tax advice"] },
              { emoji: "🏢",  title: "Limited Companies",   from: "From £50/mo", desc: "Full company accounts, CT600 returns, and director self-assessments handled end to end.", includes: ["Company accounts", "Corporation tax", "Director SA"] },
              { emoji: "🤝",  title: "Partnerships & LLPs", from: "From £40/mo", desc: "Partnership tax returns and profit allocation handled with care and precision.", includes: ["Partnership SA", "VAT returns", "Management accounts"] },
              { emoji: "🔧",  title: "Contractors",         from: "From £35/mo", desc: "IR35 guidance, umbrella vs limited advice, and quarterly financial reviews.", includes: ["IR35 review", "Payroll", "Expense claims"] },
            ].map((card, i) => (
              <div key={card.title} className="who-card bg-white rounded-2xl p-7 border flex flex-col reveal" style={{ borderColor: "rgba(10,77,68,0.08)" }} ref={(el) => addReveal(el, 21 + i)}>
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

      {/* ─── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-24 px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 reveal" ref={(el) => addReveal(el, 30)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>✦ How We Work</span>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>Up and running in days, not weeks</h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>Switching to Heritage is simple. We manage the entire handover so there's no disruption to your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ background: "linear-gradient(90deg, var(--teal-dark), var(--green-accent))", zIndex: 0 }} />
            {[
              { step: "01", title: "Free Consultation", desc: "Tell us about your business and goals. No obligation, no jargon." },
              { step: "02", title: "Tailored Proposal",  desc: "We send a clear, fixed-price proposal within 24 hours." },
              { step: "03", title: "Smooth Handover",    desc: "We contact your previous accountant and gather all records." },
              { step: "04", title: "Ongoing Support",    desc: "Your dedicated accountant is always a call or email away." },
            ].map((phase, i) => (
              <div key={phase.step} className="text-center relative z-10 reveal" ref={(el) => addReveal(el, 31 + i)}>
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

      {/* ─── AGGREGATE RATING ─────────────────────────────────── */}
      <section className="py-16 px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-8 reveal" style={{ boxShadow: "0 8px 32px rgba(10,77,68,0.07)" }} ref={(el) => addReveal(el, 40)}>
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
            <div className="flex-shrink-0 text-center sm:text-right">
              <p className="text-sm font-black mb-3" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>Join 500+ happy clients</p>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-[10px] text-sm font-black text-white no-underline border-2 transition-all hover:-translate-y-1" style={{ background: "var(--teal-dark)", borderColor: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}>
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="mx-12 my-24 rounded-[32px] px-16 py-20 text-center relative overflow-hidden reveal" style={{ background: "var(--teal-dark)" }} ref={(el) => addReveal(el, 50)}>
        <div className="absolute w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.15)", top: -150, right: -100 }} />
        <div className="absolute w-64 h-64 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.1)", bottom: -80, left: -60 }} />
        <div className="relative z-10">
          <h2 className="text-white" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900 }}>Ready to Get Started?</h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Let's talk about how Heritage can take the stress out of your finances — book a free, no-obligation consultation today.
          </p>
          <div className="flex gap-4 justify-center mt-10 flex-wrap">
            <Link href="/contact" className="rounded-full px-9 py-[14px] text-base font-black no-underline border-2 transition-all hover:-translate-y-1 hover:shadow-xl" style={{ background: "var(--green-accent)", borderColor: "var(--green-accent)", color: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}>
              Book a Free Consultation →
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