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

  const faqs = [
    {
      question: "What services does Heritage offer?",
      answer: "Heritage provides comprehensive consulting, development, support, training, analysis, and innovation services tailored to meet your unique business needs.",
    },
    {
      question: "How long has Heritage been in business?",
      answer: "Heritage has been serving clients with excellence for over five decades, building a legacy of trust and quality in our industry.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we have extensive experience working with clients globally and can accommodate various time zones and cultural contexts.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "While we have broad expertise, we specialize in technology, healthcare, finance, and manufacturing sectors, adapting our approach to each industry's unique requirements.",
    },
    {
      question: "How do you ensure project quality?",
      answer: "We maintain rigorous quality standards through our proven process: discovery, planning, execution, and optimization, with continuous monitoring and improvement.",
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity, but we work closely with clients to establish realistic timelines and milestones from the outset.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely. We offer comprehensive maintenance and support services to ensure your solutions continue to perform optimally long-term.",
    },
    {
      question: "How do you handle confidential information?",
      answer: "We take confidentiality seriously and implement strict security protocols, including NDAs and secure data handling practices for all client information.",
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

        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal-visible { opacity: 1; transform: none; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }

        .animate-fade-up   { animation: fadeUp 0.6s ease both; }
        .animate-fade-up-1 { animation: fadeUp 0.6s ease 0.1s both; }
        .animate-fade-up-2 { animation: fadeUp 0.6s ease 0.2s both; }

        .hero-accent { position: relative; display: inline-block; }
        .hero-accent::after { content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--green-accent), var(--green-bright)); border-radius: 4px; }

        .faq-card { transition: all 0.35s cubic-bezier(0.4,0,0.2,1); border: 1.5px solid rgba(10,77,68,0.06); }
        .faq-card:hover { transform: translateY(-6px); box-shadow: 0 28px 56px rgba(10,77,68,0.08); border-color: var(--green-accent) !important; }
        .faq-card:hover .faq-icon { background: var(--green-accent) !important; }
        .faq-card:hover .faq-icon svg { stroke: white !important; }
        .faq-icon { transition: background 0.3s; }
      `}</style>

      <div style={{ background: "var(--cream)" }} className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-12 sm:pt-32 sm:pb-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl font-black tracking-tight" style={{ color: "var(--text-dark)" }}>
                Frequently Asked <span className="hero-accent" style={{ color: "var(--teal-dark)" }}>Questions</span>
              </h1>
              <p className="animate-fade-up-1 mt-6 text-lg sm:text-xl leading-relaxed" style={{ color: "var(--text-mid)" }}>
                Everything you need to know about Heritage and how we work.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Grid Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="space-y-6 sm:space-y-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  ref={(el) => addReveal(el, index)}
                  className="reveal faq-card rounded-2xl p-6 sm:p-8"
                  style={{ background: "white" }}
                >
                  <div className="flex gap-4 sm:gap-6">
                    <div
                      className="faq-icon flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(10,77,68,0.08)" }}
                    >
                      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="var(--teal-dark)" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.90.844-2.206 1.322-3.51 1.322m0-13.268c3.595 0 6.742 1.432 6.742 3.2S16.474 10.971 12.879 10.971m0 0c-3.595 0-6.742 1.432-6.742 3.2s3.147 3.2 6.742 3.2m0 0c1.304 0 2.581.432 3.51 1.321m-9.569 3.561c-.487.348-1.338.557-2.432.557m15.364-2.04c.487-.348 1.338-.557 2.432-.557M9 21h12a4.5 4.5 0 004.5-4.5V5.25a4.5 4.5 0 00-4.5-4.5H9a4.5 4.5 0 00-4.5 4.5v11.25a4.5 4.5 0 004.5 4.5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-dark)" }}>
                        {faq.question}
                      </h3>
                      <p className="text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 border-t" style={{ borderColor: "rgba(10,77,68,0.08)", background: "linear-gradient(135deg, rgba(232,245,243,0.5) 0%, rgba(245,249,248,0.8) 100%)" }}>
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="animate-fade-up text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: "var(--text-dark)" }}>
              Still Have Questions?
            </h2>
            <p className="animate-fade-up-1 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "var(--text-mid)" }}>
              Can't find the answer you're looking for? Our team is always happy to help. Get in touch and let's talk about how we can serve you.
            </p>
            <Link
              href="/contact"
              className="animate-fade-up-2 inline-flex items-center gap-2 rounded-full px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white no-underline border-2 transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: "var(--teal-dark)",
                borderColor: "var(--teal-dark)",
                fontFamily: "Nunito, sans-serif",
              }}
            >
              Get in Touch →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}