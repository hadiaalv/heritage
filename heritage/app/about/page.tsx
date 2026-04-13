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

        /* Process steps */
        .process-step { transition: all 0.3s; }
        .process-step:hover { transform: translateY(-6px); }
        .process-step:hover .step-num { background: var(--teal-dark) !important; color: white !important; }
        .step-num { transition: all 0.3s; }

        /* Team cards */
        .team-card { transition: all 0.3s; }
        .team-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(10,77,68,0.1); }
        .team-card:hover .team-avatar { background: var(--teal-dark) !important; }
        .team-card:hover .team-avatar span { color: white !important; }
        .team-avatar { transition: background 0.3s; }

        /* Timeline */
        .timeline-item { transition: all 0.25s; }
        .timeline-item:hover .timeline-dot { background: var(--green-accent) !important; box-shadow: 0 0 0 6px rgba(46,204,142,0.2); }
        .timeline-dot { transition: all 0.3s; }

        /* Cert badges */
        .cert-badge { transition: all 0.25s; }
        .cert-badge:hover { background: var(--teal-dark) !important; border-color: var(--teal-dark) !important; }
        .cert-badge:hover span { color: white !important; }
        .cert-badge:hover .cert-icon { background: rgba(255,255,255,0.15) !important; }
        .cert-badge:hover .cert-icon svg { stroke: white !important; }
        .cert-icon { transition: background 0.25s; }

        /* Scrolling logos */
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .logo-track { display: flex; gap: 48px; align-items: center; animation: scroll 20s linear infinite; white-space: nowrap; }
        .logo-scroll-wrap { overflow: hidden; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
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

      {/* ── STORY SECTION ────────────────────────────────────── */}
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

      {/* ── HOW WE WORK ──────────────────────────────────────── */}
      <section style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-12 py-24">
          <div className="text-center max-w-xl mx-auto mb-16 reveal" ref={(el) => addReveal(el, 10)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>
              ✦ Getting Started
            </span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              Onboarding in four simple steps
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--text-mid)" }}>
              Switching to Heritage is effortless. Most clients are fully up and running within one week — we handle every detail of the transition for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Free consultation",
                desc: "We start with a no-obligation call to understand your business, goals, and current accounting setup.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
              },
              {
                num: "02",
                title: "We handle the switch",
                desc: "We contact your previous accountant on your behalf, collect all records, and notify HMRC that we are your new agent.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />,
              },
              {
                num: "03",
                title: "Tailored setup",
                desc: "We review your existing systems and recommend the right cloud software — Xero, QuickBooks, or another platform that fits your workflow.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />,
              },
              {
                num: "04",
                title: "Ongoing partnership",
                desc: "Your dedicated accountant is on hand year-round — proactively reviewing your position and responding to queries within three hours.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />,
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className="process-step bg-white rounded-2xl p-7 border reveal"
                style={{ borderColor: "rgba(10,77,68,0.08)" }}
                ref={(el) => addReveal(el, 11 + i)}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="step-num w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0" style={{ background: "var(--teal-light)", color: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}>
                    {step.num}
                  </div>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--teal-light)" }}>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="var(--teal-dark)">{step.icon}</svg>
                  </div>
                </div>
                <h3 className="font-black text-base mb-2" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ─────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-12 py-24">
          <div className="text-center max-w-xl mx-auto mb-16 reveal" ref={(el) => addReveal(el, 20)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>
              ✦ The People Behind Heritage
            </span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              Your dedicated accountants
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--text-mid)" }}>
              You will always deal with a real, named accountant who knows your business inside out — not a call centre or a rotating inbox.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Margaret H.",
                role: "Founding Partner",
                qual: "FCA · 30+ yrs",
                spec: "Tax planning & year-end accounts",
                bio: "Margaret founded Heritage in 1970 with a single conviction: that great accounting starts with truly understanding the client.",
                initials: "MH",
              },
              {
                name: "David T.",
                role: "Senior Accountant",
                qual: "ACCA · 18 yrs",
                spec: "Limited companies & VAT",
                bio: "David leads our limited company portfolio and is known for finding savings his clients had no idea they were missing.",
                initials: "DT",
              },
              {
                name: "Priya K.",
                role: "Cloud Accounting Lead",
                qual: "Xero & QBO certified",
                spec: "MTD, cloud migration & payroll",
                bio: "Priya keeps every client MTD-compliant and champions a paperless, real-time approach to bookkeeping.",
                initials: "PK",
              },
              {
                name: "James R.",
                role: "Advisory Specialist",
                qual: "ACA · 12 yrs",
                spec: "Management accounts & growth advisory",
                bio: "James works alongside owner-managed businesses to turn their numbers into a clear roadmap for sustainable growth.",
                initials: "JR",
              },
            ].map((member, i) => (
              <div
                key={member.name}
                className="team-card bg-white rounded-2xl p-7 border reveal flex flex-col"
                style={{ borderColor: "rgba(10,77,68,0.08)" }}
                ref={(el) => addReveal(el, 21 + i)}
              >
                <div className="team-avatar w-14 h-14 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0" style={{ background: "var(--teal-light)" }}>
                  <span className="text-lg font-black" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{member.initials}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-base mb-0.5" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{member.name}</h3>
                  <p className="text-xs font-bold mb-1" style={{ color: "var(--teal-mid)" }}>{member.role}</p>
                  <span className="inline-block text-xs font-bold px-2 py-[3px] rounded-full mb-3" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>{member.qual}</span>
                  <p className="text-xs font-semibold mb-2" style={{ color: "var(--green-accent)" }}>{member.spec}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────── */}
      <section style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto px-12 py-24">
          <div className="text-center max-w-xl mx-auto mb-16 reveal" ref={(el) => addReveal(el, 30)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>
              ✦ Milestones
            </span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              Five decades of growth
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-3 bottom-3 w-[2px] rounded-full" style={{ background: "var(--teal-light)" }} />

            <div className="flex flex-col gap-10">
              {[
                { year: "1970", title: "Heritage is founded", desc: "Margaret H. opens the firm's first office with a mission to bring honest, plain-English accounting to local businesses and families." },
                { year: "1985", title: "Expanding the team", desc: "The practice grows to a team of five qualified accountants, taking on our first limited company clients and extending into payroll services." },
                { year: "1998", title: "First digital systems", desc: "Heritage embraces desktop accounting software ahead of competitors, cutting client year-end preparation times by more than half." },
                { year: "2012", title: "Cloud-first transition", desc: "We become an early Xero and QuickBooks certified practice, migrating our entire client base to cloud accounting well ahead of the MTD mandate." },
                { year: "2018", title: "500 clients milestone", desc: "Heritage surpasses 500 active clients and hires its first dedicated cloud accounting and payroll specialists." },
                { year: "Today", title: "MTD-ready & still growing", desc: "Fully compliant with Making Tax Digital, we continue to invest in our team and technology — so our clients are always one step ahead." },
              ].map((item, i) => (
                <div
                  key={item.year}
                  className="timeline-item flex gap-8 items-start reveal"
                  ref={(el) => addReveal(el, 31 + i)}
                >
                  <div className="flex-shrink-0 flex flex-col items-center" style={{ width: 40 }}>
                    <div className="timeline-dot w-10 h-10 rounded-full flex items-center justify-center font-black text-xs border-2 border-white" style={{ background: "var(--teal-dark)", color: "white", fontFamily: "Nunito, sans-serif", boxShadow: "0 0 0 4px var(--teal-light)" }}>
                      {item.year === "Today" ? "Now" : item.year.slice(2)}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex-1 border" style={{ borderColor: "rgba(10,77,68,0.08)" }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-black px-3 py-1 rounded-full" style={{ background: "var(--teal-light)", color: "var(--teal-mid)", fontFamily: "Nunito, sans-serif" }}>{item.year}</span>
                    </div>
                    <h4 className="font-black text-base mb-1" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{item.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALIFICATIONS & SOFTWARE ─────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-12 py-24">
          <div className="text-center max-w-xl mx-auto mb-12 reveal" ref={(el) => addReveal(el, 40)}>
            <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>
              ✦ Credentials &amp; Technology
            </span>
            <h2 className="text-4xl" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              Qualified, certified, and compliant
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--text-mid)" }}>
              Our team holds the highest professional qualifications in the UK accountancy sector and is certified across all major cloud platforms.
            </p>
          </div>

          {/* Qualifications row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: "ICAEW Members", sub: "Chartered Accountants", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /> },
              { label: "ACCA Qualified", sub: "Globally recognised", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /> },
              { label: "MTD Compliant", sub: "Making Tax Digital ready", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /> },
              { label: "ICO Registered", sub: "Data protection compliant", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /> },
            ].map((cert, i) => (
              <div
                key={cert.label}
                className="cert-badge flex items-start gap-4 bg-white rounded-2xl p-5 border reveal"
                style={{ borderColor: "rgba(10,77,68,0.1)" }}
                ref={(el) => addReveal(el, 41 + i)}
              >
                <div className="cert-icon w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "var(--teal-light)" }}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="var(--teal-dark)">{cert.icon}</svg>
                </div>
                <div>
                  <span className="block font-black text-sm" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{cert.label}</span>
                  <span className="block text-xs mt-0.5" style={{ color: "var(--text-mid)" }}>{cert.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Software logos — scrolling marquee */}
          <div className="reveal" ref={(el) => addReveal(el, 46)}>
            <p className="text-center text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-mid)" }}>
              We work with all major accounting platforms
            </p>
            <div className="logo-scroll-wrap">
              <div className="logo-track">
                {["Xero", "QuickBooks", "Sage", "FreeAgent", "IRIS", "TaxCalc", "Capium", "Moneysoft",
                  "Xero", "QuickBooks", "Sage", "FreeAgent", "IRIS", "TaxCalc", "Capium", "Moneysoft"].map((name, i) => (
                  <div key={i} className="flex-shrink-0 px-6 py-3 rounded-xl bg-white border font-bold text-sm" style={{ borderColor: "rgba(10,77,68,0.1)", color: "var(--teal-mid)", fontFamily: "Nunito, sans-serif" }}>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ────────────────────────────────────── */}
      <section style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-12 py-24">
          <div className="text-center max-w-xl mx-auto mb-16 reveal" ref={(el) => addReveal(el, 50)}>
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
                ref={(el) => addReveal(el, 51 + i)}
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

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        className="mx-12 my-24 rounded-[32px] px-16 py-20 text-center relative overflow-hidden reveal"
        style={{ background: "var(--teal-dark)" }}
        ref={(el) => addReveal(el, 56)}
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