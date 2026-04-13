import Link from "next/link";

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 25 years of experience in the industry, Sarah leads our vision of combining tradition with innovation.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Michael brings cutting-edge technical expertise and a passion for solving complex challenges.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      bio: "Emily ensures our operations run smoothly and efficiently, maintaining our commitment to excellence.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "David Thompson",
      role: "Senior Consultant",
      bio: "David's strategic insights and deep industry knowledge help guide our clients to success.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Lisa Park",
      role: "Lead Developer",
      bio: "Lisa's innovative solutions and technical expertise drive our development initiatives forward.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "James Wilson",
      role: "Client Relations Manager",
      bio: "James builds lasting relationships with our clients, ensuring their needs are always met.",
      image: "/api/placeholder/300/300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-in-up">
              Our <span className="text-blue-600">Team</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in-up animation-delay-200">
              Meet the dedicated professionals who make Heritage a trusted partner in your success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up">
              Join Our Team
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 animate-fade-in-up animation-delay-200">
              We're always looking for talented individuals who share our passion for excellence and innovation.
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