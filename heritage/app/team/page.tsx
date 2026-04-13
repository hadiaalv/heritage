"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Team() {
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

  const team = [
    {
      name: "Margaret H.",
      role: "Founding Partner",
      qual: "FCA",
      years: "30+ yrs experience",
      spec: "Tax planning & year-end accounts",
      bio: "Margaret founded Heritage in 1970 with a single conviction: that great accounting starts with truly understanding the client. She still personally reviews every complex tax case that comes through the door.",
      initials: "MH",
      color: "#0a4d44",
    },
    {
      name: "David T.",
      role: "Senior Accountant",
      qual: "ACCA",
      years: "18 yrs experience",
      spec: "Limited companies & VAT",
      bio: "David leads our limited company portfolio and has a reputation for finding reliefs and savings his clients had no idea they were entitled to. He responds to every query within the hour.",
      initials: "DT",
      color: "#0d6b5e",
    },
    {
      name: "Priya K.",
      role: "Cloud Accounting Lead",
      qual: "Xero & QBO Certified",
      years: "10 yrs experience",
      spec: "MTD, cloud migration & payroll",
      bio: "Priya champions a fully digital, real-time approach to bookkeeping. She has migrated over 200 clients to cloud platforms and delivers payroll across weekly, fortnightly and monthly schedules without a single late submission.",
      initials: "PK",
      color: "#0a4d44",
    },
    {
      name: "James R.",
      role: "Advisory Specialist",
      qual: "ACA",
      years: "12 yrs experience",
      spec: "Management accounts & growth advisory",
      bio: "James works alongside owner-managed businesses to turn their numbers into a clear roadmap. From incorporation advice to exit planning, he brings a strategic lens to every client relationship.",
      initials: "JR",
      color: "#0d6b5e",
    },
    {
      name: "Rachel M.",
      role: "Payroll Manager",
      qual: "CIPP Qualified",
      years: "14 yrs experience",
      spec: "Payroll, auto-enrolment & CIS",
      bio: "Rachel manages end-to-end payroll for over 80 businesses. She handles RTI submissions, pension auto-enrolment, P60s, and CIS returns with meticulous accuracy and a calm that keeps clients stress-free.",
      initials: "RM",
      color: "#0a4d44",
    },
    {
      name: "Oliver S.",
      role: "Client Manager",
      qual: "AAT Qualified",
      years: "8 yrs experience",
      spec: "Sole traders & self assessment",
      bio: "Oliver is the first point of contact for our sole trader and contractor clients. He has a talent for explaining complex tax matters in plain English and making HMRC deadlines feel completely manageable.",
      initials: "OS",
      color: "#0d6b5e",
    },
  ];

  const stats = [
    { num: "55+", label: "Years in practice" },
    { num: "6",   label: "Qualified accountants" },
    { num: "500+", label: "Active clients" },
    { num: "98%", label: "Client retention" },
  ];

  const perks = [
    { title: "Continuous learning", desc: "Every team member holds or is studying towards a recognised professional qualification — ICAEW, ACCA, ACA, AAT, or CIPP.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /> },
    { title: "Flexible & remote-friendly", desc: "Our team works across office and home environments — meaning you always get a prompt, attentive response wherever we are.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /> },
    { title: "Client-first culture", desc: "We measure success by our clients' outcomes, not billable hours. No question is too small and no deadline is too tight.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C3.1 3.75 1 5.765 1 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /> },
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

        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal-visible { opacity: 1; transform: none; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse  { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.3); } }
        @keyframes float  { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }

        .animate-fade-up   { animation: fadeUp 0.6s ease both; }
        .animate-fade-up-1 { animation: fadeUp 0.6s ease 0.1s both; }
        .animate-fade-up-2 { animation: fadeUp 0.6s ease 0.2s both; }

        .pulse-dot { animation: pulse 2s infinite; }

        .hero-accent { position: relative; display: inline-block; }
        .hero-accent::after { content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--green-accent), var(--green-bright)); border-radius: 4px; }

        /* Team cards */
        .team-card { transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
        .team-card:hover { transform: translateY(-8px); box-shadow: 0 28px 56px rgba(10,77,68,0.12); border-color: transparent !important; }
        .team-card:hover .avatar-ring { box-shadow: 0 0 0 4px var(--green-accent); }
        .team-card:hover .team-spec { color: var(--green-accent) !important; }
        .avatar-ring { transition: box-shadow 0.3s; }

        /* Stat items */
        .stat-item { transition: transform 0.2s; }
        .stat-item:hover { transform: translateY(-4px); }

        /* Perk cards */
        .perk-card { transition: all 0.3s; }
        .perk-card:hover { transform: translateY(-5px); box-shadow: 0 16px 32px rgba(10,77,68,0.09); border-color: transparent !important; }
        .perk-card:hover .perk-icon { background: var(--teal-dark) !important; }
        .perk-card:hover .perk-icon svg { stroke: white !important; }
        .perk-icon { transition: background 0.3s; }

        /* Hiring card */
        .hiring-card { transition: all 0.3s; }
        .hiring-card:hover { transform: translateY(-4px); }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="min-h-[55vh] flex items-center pt-[120px] pb-16 px-12 relative overflow-hidden">
        <div className="absolute rounded-full pointer-events-none" style={{ width: 450, height: 450, background: "var(--teal-mid)", top: -120, right: -80, filter: "blur(90px)", opacity: 0.15 }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 260, height: 260, background: "var(--green-accent)", bottom: 30, left: 60, filter: "blur(70px)", opacity: 0.14 }} />

        <div className="max-w-6xl mx-auto w-full text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[var(--green-accent)]/40 px-4 py-[6px] rounded-full text-xs font-bold mb-6" style={{ color: "var(--teal-mid)" }}>
            <span className="pulse-dot w-2 h-2 rounded-full inline-block" style={{ background: "var(--green-accent)" }} />
            The people behind Heritage
          </div>

          <h1 className="animate-fade-up-1 text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
            Meet the <span className="hero-accent" style={{ color: "var(--green-accent)" }}>Team</span>
          </h1>

          <p className="animate-fade-up-2 mt-5 text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "var(--text-mid)" }}>
            Qualified accountants who genuinely care — you will always deal with a real, named person who knows your business inside out.
          </p>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-12 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <div key={s.label} className="stat-item rounded-2xl p-6 text-center reveal" style={{ background: "var(--teal-light)" }} ref={(el) => addReveal(el, i)}>
                <div className="text-4xl font-black mb-1" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{s.num}</div>
                <div className="text-xs font-semibold" style={{ color: "var(--text-mid)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM GRID ────────────────────────────────────────── */}
      <section style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-12 py-24">
          <div className="text-center max-w-xl mx-auto mb-16 reveal" ref={(el) => addReveal(el, 10)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>
              ✦ Our Accountants
            </span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              Your dedicated experts
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--text-mid)" }}>
              Every member of our team holds a recognised professional qualification and specialises in a specific area — so you always get the right expertise for your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="team-card bg-white rounded-2xl p-8 border flex flex-col reveal"
                style={{ borderColor: "rgba(10,77,68,0.08)" }}
                ref={(el) => addReveal(el, 11 + i)}
              >
                {/* Avatar + name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="avatar-ring w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: member.color }}>
                    <span className="text-xl font-black" style={{ fontFamily: "Nunito, sans-serif", color: "white" }}>{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-black text-base leading-tight" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{member.name}</h3>
                    <p className="text-xs font-bold mt-0.5" style={{ color: "var(--teal-mid)" }}>{member.role}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs font-black px-2 py-0.5 rounded-full" style={{ background: "var(--teal-light)", color: "var(--teal-mid)", fontFamily: "Nunito, sans-serif" }}>{member.qual}</span>
                      <span className="text-xs" style={{ color: "var(--text-mid)" }}>{member.years}</span>
                    </div>
                  </div>
                </div>

                {/* Specialism */}
                <div className="flex items-center gap-2 mb-4 pb-4" style={{ borderBottom: "1px solid rgba(10,77,68,0.07)" }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="var(--green-accent)" className="flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="team-spec text-xs font-bold transition-colors" style={{ color: "var(--teal-mid)" }}>{member.spec}</span>
                </div>

                {/* Bio */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-mid)" }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR CULTURE ──────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div className="reveal" ref={(el) => addReveal(el, 20)}>
              <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>
                ✦ How We Work
              </span>
              <h2 className="text-4xl mb-6" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
                A team you can actually talk to
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
                At Heritage, we deliberately keep our team small and specialist. That means every client has a named accountant who picks up the phone, answers emails within three hours, and genuinely understands your business — not just your numbers.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { label: "No call centres or rotating inboxes", desc: "You always reach the same person who knows your history." },
                  { label: "Plain-English explanations", desc: "We translate jargon into clear, actionable guidance." },
                  { label: "Proactive, not reactive", desc: "We flag opportunities and risks before you have to ask." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "var(--teal-light)" }}>
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="var(--teal-dark)">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-black text-sm" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{item.label}. </span>
                      <span className="text-sm" style={{ color: "var(--text-mid)" }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — dark card */}
            <div className="reveal" ref={(el) => addReveal(el, 21)}>
              <div className="rounded-3xl p-10 relative overflow-hidden" style={{ background: "var(--teal-dark)", boxShadow: "0 32px 64px rgba(10,77,68,0.2)" }}>
                <div className="absolute rounded-full pointer-events-none" style={{ width: 200, height: 200, background: "rgba(46,204,142,0.15)", top: -60, right: -60 }} />
                <div className="absolute rounded-full pointer-events-none" style={{ width: 120, height: 120, background: "rgba(46,204,142,0.1)", bottom: -30, left: -30 }} />

                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>Response guarantee</p>

                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-7xl font-black leading-none" style={{ fontFamily: "Nunito, sans-serif", color: "var(--green-accent)" }}>3</span>
                    <span className="text-2xl font-black pb-2" style={{ fontFamily: "Nunito, sans-serif", color: "white" }}>hours</span>
                  </div>
                  <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>Maximum response time during business hours — every query, every time.</p>

                  <div className="flex flex-col gap-3">
                    {[
                      { label: "Phone", val: "Always answered or called back same day" },
                      { label: "Email", val: "Replied to within 3 hours" },
                      { label: "Video call", val: "Booked within 24 hours" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.08)" }}>
                        <span className="text-xs font-black w-16 flex-shrink-0" style={{ fontFamily: "Nunito, sans-serif", color: "var(--green-accent)" }}>{row.label}</span>
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>{row.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERKS / WHY JOIN ─────────────────────────────────── */}
      <section style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-12 py-24">
          <div className="text-center max-w-xl mx-auto mb-14 reveal" ref={(el) => addReveal(el, 30)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>
              ✦ Life at Heritage
            </span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              Why our team loves what they do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {perks.map((p, i) => (
              <div
                key={p.title}
                className="perk-card bg-white rounded-2xl p-8 border reveal"
                style={{ borderColor: "rgba(10,77,68,0.08)" }}
                ref={(el) => addReveal(el, 31 + i)}
              >
                <div className="perk-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--teal-light)" }}>
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="var(--teal-dark)">{p.icon}</svg>
                </div>
                <h3 className="font-black text-base mb-2" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN US CTA ───────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-12 py-16">
          <div className="rounded-3xl p-12 relative overflow-hidden reveal" style={{ background: "var(--teal-light)" }} ref={(el) => addReveal(el, 35)}>
            <div className="absolute rounded-full pointer-events-none" style={{ width: 300, height: 300, background: "rgba(46,204,142,0.2)", top: -100, right: -60 }} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "white", color: "var(--teal-mid)" }}>
                  ✦ We&apos;re Hiring
                </span>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
                  Grow your career with Heritage
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  We are always looking for talented, curious people who want to build long-term client relationships and keep growing professionally. If that sounds like you, we would love to hear from you.
                </p>
                <div className="flex gap-4 mt-8 flex-wrap">
                  <Link
                    href="/contact"
                    className="rounded-full px-8 py-[13px] text-sm font-black no-underline border-2 transition-all hover:-translate-y-1 hover:shadow-xl"
                    style={{ background: "var(--teal-dark)", borderColor: "var(--teal-dark)", color: "white", fontFamily: "Nunito, sans-serif" }}
                  >
                    Get in Touch →
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-full px-8 py-[13px] text-sm font-black no-underline border-2 transition-all hover:-translate-y-1"
                    style={{ color: "var(--teal-dark)", borderColor: "rgba(10,77,68,0.25)", fontFamily: "Nunito, sans-serif" }}
                  >
                    About Heritage ↗
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Study support & CPD funding",
                  "Flexible working arrangements",
                  "Genuine career progression",
                  "Small team, big responsibility",
                  "Competitive salary + benefits",
                  "Modern cloud-based tools",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white" style={{ borderColor: "rgba(10,77,68,0.06)", border: "1px solid rgba(10,77,68,0.06)" }}>
                    <span style={{ color: "var(--green-accent)", fontWeight: 900 }}>✓</span>
                    <span className="text-sm font-semibold" style={{ color: "var(--teal-dark)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        className="mx-12 my-24 rounded-[32px] px-16 py-20 text-center relative overflow-hidden reveal"
        style={{ background: "var(--teal-dark)" }}
        ref={(el) => addReveal(el, 36)}
      >
        <div className="absolute w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.15)", top: -150, right: -100 }} />
        <div className="absolute w-64 h-64 rounded-full pointer-events-none" style={{ background: "rgba(46,204,142,0.1)", bottom: -80, left: -60 }} />
        <div className="relative z-10">
          <h2 className="text-white" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            Ready to meet your accountant?
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Book a free, no-obligation consultation and we will match you with the right member of the Heritage team.
          </p>
          <div className="flex gap-4 justify-center mt-10 flex-wrap">
            <Link
              href="/contact"
              className="rounded-full px-9 py-[14px] text-base font-black no-underline border-2 transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "var(--green-accent)", borderColor: "var(--green-accent)", color: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}
            >
              Book a Free Consultation →
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