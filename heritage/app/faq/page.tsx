import Link from "next/link";

export default function FAQ() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-in-up">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in-up animation-delay-200">
              Find answers to common questions about our services and how we work.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-12">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 animate-fade-in-up animation-delay-200">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}