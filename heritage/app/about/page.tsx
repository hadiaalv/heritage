import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-in-up">
              About <span className="text-blue-600">Heritage</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in-up animation-delay-200">
              Our story spans generations, blending tradition with innovation to create lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8 lg:pt-4 animate-fade-in-up">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-600">Our Heritage</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A Legacy of Excellence
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Founded with a vision to preserve the best of the past while embracing the future,
                  Heritage has been a cornerstone of quality and integrity for over five decades.
                  Our commitment to excellence has made us a trusted partner in our community.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute left-1 top-1 h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                      </svg>
                      Innovation with Tradition.
                    </dt>
                    <dd className="inline ml-2">We blend time-honored practices with cutting-edge solutions.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute left-1 top-1 h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                      </svg>
                      Uncompromising Quality.
                    </dt>
                    <dd className="inline ml-2">Every project meets our rigorous standards of excellence.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute left-1 top-1 h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                        <path fillRule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clipRule="evenodd" />
                      </svg>
                      Community Focus.
                    </dt>
                    <dd className="inline ml-2">We invest in our community and support local initiatives.</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <div className="w-full max-w-md px-4 sm:px-0 lg:px-0">
                <div className="relative aspect-square rounded-2xl bg-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 opacity-20"></div>
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Our Story</h3>
                      <p className="mt-2 text-sm text-gray-600">Building futures since 1970</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in-up animation-delay-200">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              <div className="flex flex-col items-center text-center animate-fade-in-up animation-delay-400">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">Integrity</dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">We act with honesty and transparency in all our dealings.</dd>
              </div>
              <div className="flex flex-col items-center text-center animate-fade-in-up animation-delay-600">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.588m0 0a3.996 3.996 0 00-3.996 3.996M12 12.588V9.996m0 2.592a3.996 3.996 0 01-3.996-3.996m3.996 3.996a3.996 3.996 0 013.996-3.996m-3.996 0V6" />
                  </svg>
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">Excellence</dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">We strive for the highest quality in everything we undertake.</dd>
              </div>
              <div className="flex flex-col items-center text-center animate-fade-in-up animation-delay-800">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">Collaboration</dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">We work together with our clients and community partners.</dd>
              </div>
              <div className="flex flex-col items-center text-center animate-fade-in-up animation-delay-1000">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C3.1 3.75 1 5.765 1 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">Compassion</dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">We care deeply about our impact on people and the environment.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up">
              Join Our Heritage
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in-up animation-delay-200">
              Be part of something greater. Connect with us to learn how we can work together.
            </p>
            <div className="mt-8 animate-fade-in-up animation-delay-400">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-300 hover:scale-105 transform"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}