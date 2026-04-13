import Link from "next/link";

export default function Services() {
  const services = [
    {
      name: "Tax Planning & Compliance",
      description:
        "Strategic tax planning and year-round compliance support to minimise your liability and keep you on the right side of HMRC.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
        />
      ),
    },
    {
      name: "Business Accounting",
      description:
        "End-to-end bookkeeping, management accounts, and annual reporting so you always have a clear picture of your financial health.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      ),
    },
    {
      name: "Payroll Services",
      description:
        "Accurate, on-time payroll processing, auto-enrolment pension administration, and RTI submissions handled seamlessly on your behalf.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      ),
    },
    {
      name: "Business Advisory",
      description:
        "Forward-looking strategic advice to help you grow, structure, and protect your business — from start-up to succession.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      ),
    },
    {
      name: "VAT Returns",
      description:
        "Timely and accurate VAT preparation, submission, and Making Tax Digital compliance — no missed deadlines, no surprises.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      name: "Cloud Accounting",
      description:
        "Xero and QuickBooks setup, migration, and ongoing support — giving you real-time financial clarity from any device.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
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

        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.3); } }

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

        .nav-link { position: relative; padding-bottom: 4px; transition: color 0.2s; }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: var(--green-accent); border-radius: 2px; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
      `}</style>

      {/* HERO */}
      <section className="min-h-[60vh] flex items-center pt-[140px] pb-24 px-12 relative overflow-hidden">
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 500, height: 500, background: "var(--teal-mid)", top: -120, right: -100, filter: "blur(80px)", opacity: 0.15 }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 280, height: 280, background: "var(--green-accent)", bottom: 40, left: 80, filter: "blur(80px)", opacity: 0.14 }}
        />

        <div className="max-w-6xl mx-auto w-full text-center">
          <div
            className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[var(--green-accent)]/40 px-4 py-[6px] rounded-full text-xs font-bold mb-6"
            style={{ color: "var(--teal-mid)" }}
          >
            <span className="pulse-dot w-2 h-2 rounded-full inline-block" style={{ background: "var(--green-accent)" }} />
            Comprehensive accounting services
          </div>

          <h1
            className="animate-fade-up-1 text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}
          >
            Our <span style={{ color: "var(--green-accent)" }}>Services</span>
          </h1>

          <p
            className="animate-fade-up-2 mt-5 text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--text-mid)" }}
          >
            From day-to-day bookkeeping to long-term financial strategy — we have the expertise
            to support every stage of your business journey.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white py-24 px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span
              className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4"
              style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}
            >
              ✦ What We Offer
            </span>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              Everything your business needs, under one roof
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="service-card bg-white rounded-2xl p-9 border"
                style={{ borderColor: "rgba(10,77,68,0.08)" }}
              >
                <div
                  className="service-icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "var(--teal-light)" }}
                >
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="var(--teal-dark)">
                    {s.icon}
                  </svg>
                </div>
                <h3
                  className="font-black text-lg mb-3"
                  style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}
                >
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span
              className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4"
              style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}
            >
              ✦ How We Work
            </span>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
              A process built around you
            </h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
              We keep things simple, transparent, and focused on your goals from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We learn your goals and challenges" },
              { step: "02", title: "Planning",   desc: "We build a tailored action plan" },
              { step: "03", title: "Execution",  desc: "We handle the numbers precisely" },
              { step: "04", title: "Review",     desc: "Continuous insight and support" },
            ].map((phase, i) => (
              <div key={phase.step} className="text-center" style={{ animationDelay: `${i * 0.15}s` }}>
                <div
                  className="step-circle inline-flex items-center justify-center w-16 h-16 rounded-full text-xl mb-4 cursor-default"
                  style={{
                    background: "var(--teal-dark)",
                    color: "white",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 900,
                  }}
                >
                  {phase.step}
                </div>
                <h3
                  className="font-black text-base mb-1"
                  style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}
                >
                  {phase.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-mid)" }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="mx-12 my-24 rounded-[32px] px-16 py-20 text-center relative overflow-hidden"
        style={{ background: "var(--teal-dark)" }}
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
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Let&apos;s talk about how Heritage can take the stress out of your finances.
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
              href="/"
              className="rounded-full px-9 py-[14px] text-base font-black text-white no-underline border-2 border-white/30 transition-all hover:-translate-y-1 hover:border-white"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Back to Home ↗
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