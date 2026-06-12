import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import QuickCards from "../components/QuickCards";
import AboutSection from "../components/AboutSection";
import ResultsSection from "../components/ResultsSection";
import NoticesSection from "../components/NoticesSection";
import GallerySection from "../components/GallerySection";
import SectionTitle from "../components/SectionTitle";
import useScrollReveal from "../hooks/useScrollReveal";
import Link from "next/link";

const facilities = [
  { name: "Library", icon: "📚", desc: "Well-stocked library with thousands of books and digital resources" },
  { name: "Computer Lab", icon: "💻", desc: "Modern computer lab with high-speed internet connectivity" },
  { name: "Science Labs", icon: "🔬", desc: "Fully equipped Physics, Chemistry & Biology laboratories" },
  { name: "Sports Ground", icon: "⚽", desc: "Large playground for cricket, football & athletics" },
  { name: "Smart Classes", icon: "📺", desc: "Digital classrooms with interactive smart boards" },
  { name: "Transport", icon: "🚌", desc: "Safe bus service covering all major routes" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Parent", text: "The school provides excellent education and my child has shown remarkable improvement in academics and extracurricular activities." },
  { name: "Priya Singh", role: "Parent", text: "Very transparent administration. All information is easily accessible. The faculty is dedicated and caring." },
  { name: "Amit Verma", role: "Alumni", text: "The foundation I received here helped me succeed in competitive exams. Grateful for the quality teaching." },
];

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickCards />

        {/* Premium About Section */}
        <AboutSection />

        {/* Admissions CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 text-center reveal-on-scroll">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 px-5 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/20">
              Admissions 2026-27
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-white">
              Give Your Child the <span className="text-amber-300">Best Education</span>
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our school family and experience world-class education. Limited seats available — apply now!
            </p>
            <div className="flex gap-5 justify-center flex-wrap">
              <Link href="/admissions" className="btn-shine px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl font-bold transition shadow-2xl shadow-amber-500/30 text-lg">
                Apply Now
              </Link>
              <Link href="/contact" className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition border border-white/30 backdrop-blur-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="reveal-on-scroll">
              <SectionTitle title="Our Facilities" subtitle="Modern infrastructure for holistic development" align="center" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {facilities.map((f, i) => (
                <div key={f.name} className={`reveal-on-scroll stagger-${Math.min(i + 1, 6)} glass-card p-7 group`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{f.name}</h3>
                  <p className="text-sm text-gray-600 leading-6">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Results Section */}
        <ResultsSection />

        {/* Premium Notices Section */}
        <NoticesSection />

        {/* Testimonials */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-animated-gradient" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="reveal-on-scroll">
              <div className="text-center mb-12">
                <span className="inline-block bg-pink-100/60 backdrop-blur-sm text-pink-700 px-5 py-1.5 rounded-full text-sm font-semibold mb-4 border border-pink-200/50">
                  Community Voices
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                  What <span className="text-gradient">Parents Say</span>
                </h2>
                <p className="text-gray-600 text-lg">Testimonials from our community</p>
                <div className="mt-4 mx-auto w-20 h-1.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-7">
              {testimonials.map((t, i) => (
                <div key={t.name} className={`reveal-on-scroll stagger-${i + 1} glass-card p-7 group`}>
                  <div className="flex items-center gap-1 mb-5 text-amber-400 text-lg">
                    {[...Array(5)].map((_, si) => <span key={si} className="animate-bounce-soft" style={{ animationDelay: `${si * 0.1}s` }}>★</span>)}
                  </div>
                  <p className="text-gray-600 leading-7 mb-6 italic text-sm">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Gallery Section */}
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
