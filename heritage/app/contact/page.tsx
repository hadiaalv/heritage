"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1); } }

        .animate-fade-up   { animation: fadeUp 0.6s ease both; }
        .animate-fade-up-1 { animation: fadeUp 0.6s ease 0.1s both; }
        .animate-fade-up-2 { animation: fadeUp 0.6s ease 0.2s both; }
        .pulse-dot { animation: pulse 2s infinite; }
        .pop-in { animation: popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }

        .hero-accent { position: relative; display: inline-block; }
        .hero-accent::after {
          content: '';
          position: absolute; bottom: -4px; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, var(--green-accent), var(--green-bright));
          border-radius: 4px;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid rgba(10,77,68,0.15);
          border-radius: 12px;
          font-family: 'Nunito Sans', sans-serif;
          font-size: 0.95rem;
          color: var(--text-dark);
          background: var(--cream);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .form-input::placeholder { color: rgba(61,107,100,0.45); }
        .form-input:focus {
          border-color: var(--green-accent);
          box-shadow: 0 0 0 4px rgba(46,204,142,0.12);
          background: white;
        }

        .form-label {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 6px;
          color: var(--teal-dark);
          font-family: 'Nunito', sans-serif;
        }

        .info-card { transition: all 0.25s; }
        .info-card:hover { transform: translateX(6px); }
        .info-card:hover .info-icon { background: var(--teal-dark) !important; }
        .info-card:hover .info-icon svg { stroke: white !important; }
        .info-icon { transition: background 0.25s; }

        .submit-btn {
          width: 100%;
          background: var(--teal-dark);
          color: white;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 1rem;
          font-family: 'Nunito', sans-serif;
          border: 2px solid var(--teal-dark);
          cursor: pointer;
          transition: all 0.2s;
        }
        .submit-btn:hover { background: var(--teal-mid); transform: translateY(-2px); box-shadow: 0 12px 32px rgba(10,77,68,0.25); }
        .submit-btn:active { transform: translateY(0); }
      `}</style>

      {/* HERO */}
      <section className="min-h-[50vh] flex items-center pt-[120px] pb-16 px-12 relative overflow-hidden">
        <div className="absolute rounded-full pointer-events-none" style={{ width: 450, height: 450, background: "var(--teal-mid)", top: -120, right: -80, filter: "blur(90px)", opacity: 0.15 }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 250, height: 250, background: "var(--green-accent)", bottom: 20, left: 60, filter: "blur(70px)", opacity: 0.14 }} />

        <div className="max-w-6xl mx-auto w-full text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[var(--green-accent)]/40 px-4 py-[6px] rounded-full text-xs font-bold mb-6" style={{ color: "var(--teal-mid)" }}>
            <span className="pulse-dot w-2 h-2 rounded-full inline-block" style={{ background: "var(--green-accent)" }} />
            We respond within 24 hours
          </div>

          <h1 className="animate-fade-up-1 text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
            Contact <span className="hero-accent" style={{ color: "var(--green-accent)" }}>Us</span>
          </h1>

          <p className="animate-fade-up-2 mt-5 text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "var(--text-mid)" }}>
            Ready to start your journey with Heritage? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* FORM */}
            <div className="reveal" ref={(el) => addReveal(el, 0)}>
              <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>
                ✦ Drop us a line
              </span>
              <h2 className="text-3xl mb-8" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
                Send us a message
              </h2>

              {submitted ? (
                <div className="pop-in flex flex-col items-center justify-center text-center py-16 px-8 rounded-3xl border-2" style={{ borderColor: "rgba(46,204,142,0.3)", background: "var(--teal-light)" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: "var(--green-accent)" }}>
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black mb-2" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: "var(--text-mid)" }}>Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-bold underline"
                    style={{ color: "var(--teal-mid)" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input type="text" id="firstName" name="firstName" className="form-input" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input type="text" id="lastName" name="lastName" className="form-input" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="form-label">Company</label>
                    <input type="text" id="company" name="company" className="form-input" placeholder="Your Company" />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="form-input"
                      style={{ resize: "none" }}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button type="submit" className="submit-btn">
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* INFO */}
            <div className="reveal flex flex-col gap-2" ref={(el) => addReveal(el, 1)}>
              <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-xs font-bold mb-4 self-start" style={{ background: "var(--teal-light)", color: "var(--teal-mid)" }}>
                ✦ Find us here
              </span>
              <h2 className="text-3xl mb-8" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "var(--teal-dark)" }}>
                Get in touch
              </h2>

              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "Office",
                    lines: ["123 Heritage Street", "Business District", "City, State 12345"],
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    ),
                  },
                  {
                    title: "Phone",
                    lines: ["+1 (555) 123-4567", "Mon–Fri  9AM – 6PM EST"],
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    ),
                  },
                  {
                    title: "Email",
                    lines: ["hello@heritage.com", "support@heritage.com"],
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    ),
                  },
                  {
                    title: "Business Hours",
                    lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Saturday: 10:00 AM – 4:00 PM", "Sunday: Closed"],
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    ),
                  },
                ].map((item) => (
                  <div key={item.title} className="info-card flex items-start gap-4 bg-white rounded-2xl p-5 border" style={{ borderColor: "rgba(10,77,68,0.08)" }}>
                    <div className="info-icon w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: "var(--teal-light)" }}>
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="var(--teal-dark)">{item.icon}</svg>
                    </div>
                    <div>
                      <h3 className="font-black text-sm mb-1" style={{ fontFamily: "Nunito, sans-serif", color: "var(--teal-dark)" }}>{item.title}</h3>
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-12 py-16">
          <div className="reveal rounded-3xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(10,77,68,0.1)" }} ref={(el) => addReveal(el, 2)}>
            <div className="h-80 relative flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--teal-dark) 0%, var(--teal-mid) 100%)" }}>
              {/* decorative grid */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* decorative blobs */}
              <div className="absolute rounded-full" style={{ width: 200, height: 200, background: "rgba(46,204,142,0.15)", top: -50, right: -30, filter: "blur(60px)" }} />
              <div className="absolute rounded-full" style={{ width: 150, height: 150, background: "rgba(46,204,142,0.1)", bottom: -30, left: 60, filter: "blur(50px)" }} />

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(46,204,142,0.2)" }}>
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--green-accent)">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-black mb-1" style={{ fontFamily: "Nunito, sans-serif" }}>Find Us</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>123 Heritage Street, Business District</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 rounded-full px-5 py-2 text-sm font-bold no-underline transition-all hover:-translate-y-0.5"
                  style={{ background: "var(--green-accent)", color: "var(--teal-dark)", fontFamily: "Nunito, sans-serif" }}
                >
                  Open in Maps ↗
                </a>
              </div>
            </div>
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