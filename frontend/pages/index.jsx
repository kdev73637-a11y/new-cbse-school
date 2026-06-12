import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import QuickCards from "../components/QuickCards";
import NoticeBoard from "../components/NoticeBoard";
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

const galleryItems = [
  { label: "Annual Day 2025", icon: "🎊", color: "from-rose-100 to-pink-100", desc: "Students performing cultural dances and receiving awards on stage" },
  { label: "Sports Day", icon: "🏅", color: "from-blue-100 to-cyan-100", desc: "Athletic competitions, relay races and medal ceremonies" },
  { label: "Science Exhibition", icon: "🧪", color: "from-green-100 to-emerald-100", desc: "Students showcasing innovative science projects and models" },
  { label: "Smart Classroom", icon: "📚", color: "from-amber-100 to-yellow-100", desc: "Interactive digital learning sessions with smart boards" },
  { label: "Library Reading", icon: "📖", color: "from-purple-100 to-violet-100", desc: "Students reading and researching in the well-stocked library" },
  { label: "Cricket Ground", icon: "⚽", color: "from-teal-100 to-green-100", desc: "Inter-school cricket tournament on our spacious ground" },
  { label: "Chemistry Lab", icon: "🔬", color: "from-indigo-100 to-blue-100", desc: "Hands-on experiments in the fully equipped chemistry lab" },
  { label: "Republic Day", icon: "🇮🇳", color: "from-orange-100 to-amber-100", desc: "Flag hoisting and patriotic performances by students" },
];

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickCards />

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="reveal-on-scroll">
              <SectionTitle title="About the School" subtitle="Building futures through quality education since 2009" />
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <p className="text-gray-600 leading-8 mb-5 text-lg">
                  A CBSE-affiliated private school in Jharkhand focused on quality education, safe learning, and transparent information for parents. Our school is committed to nurturing every child&apos;s potential through modern teaching methods, experienced faculty, and a supportive environment.
                </p>
                <p className="text-gray-600 leading-8 mb-5">
                  We believe in holistic development — combining academic excellence with sports, arts, and moral education to create well-rounded individuals ready for the challenges of tomorrow.
                </p>
                <p className="text-gray-600 leading-8 mb-8">
                  With over 15 years of dedicated service in education, we have built a reputation for academic rigor, transparent governance, and a caring approach toward every student. Our campus spans 5 acres with modern infrastructure, dedicated labs, a library with 10,000+ books, and extensive sports facilities.
                </p>

                {/* Key stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { num: "1000+", label: "Students" },
                    { num: "50+", label: "Teachers" },
                    { num: "15+", label: "Years" },
                    { num: "98%", label: "Pass Rate" },
                  ].map((s) => (
                    <div key={s.label} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 text-center border border-blue-100">
                      <p className="text-2xl font-extrabold text-blue-700">{s.num}</p>
                      <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>

                <Link href="/about" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition group">
                  Learn More About Us
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Professional image frame */}
              <div className="reveal-right">
                <div className="image-frame">
                  <div className="image-frame-inner">
                    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 aspect-square flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #1e40af 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                      <div className="relative z-10 text-center p-10">
                        <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/30 animate-float">
                          <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <p className="text-3xl font-extrabold text-gray-800">Our Campus</p>
                        <p className="text-gray-500 mt-2">A place to learn and grow</p>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-6 left-6 w-16 h-16 border-2 border-blue-300/40 rounded-xl rotate-12" />
                      <div className="absolute bottom-8 right-8 w-20 h-20 border-2 border-purple-300/40 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admissions CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 text-center reveal-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-5">Admissions Open for 2026-27</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our school family and give your child the best education experience. Limited seats available.
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="reveal-on-scroll">
              <SectionTitle title="Our Facilities" subtitle="Modern infrastructure for holistic development" align="center" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {facilities.map((f, i) => (
                <div key={f.name} className={`reveal-on-scroll stagger-${Math.min(i + 1, 6)} bg-white rounded-2xl p-7 border border-gray-100 card-glow group`}>
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

        {/* Results Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="reveal-on-scroll">
              <SectionTitle title="Our Results" subtitle="Consistent academic excellence year after year" align="center" />
            </div>
            <div className="grid sm:grid-cols-3 gap-8 mb-12">
              {[
                { year: "2025", class10: "98%", class12: "96%", topper: "Rahul Kumar", topperPct: "99.2%" },
                { year: "2024", class10: "97%", class12: "95%", topper: "Priya Singh", topperPct: "98.8%" },
                { year: "2023", class10: "96%", class12: "94%", topper: "Amit Verma", topperPct: "98.4%" },
              ].map((r, i) => (
                <div key={r.year} className={`reveal-scale stagger-${i + 1} bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-100 card-lift`}>
                  <h3 className="text-3xl font-bold text-blue-700 mb-5">{r.year}</h3>
                  <div className="space-y-4 mb-5">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="text-sm text-gray-500">Class X Pass %</p>
                      <p className="text-3xl font-extrabold text-gray-900">{r.class10}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="text-sm text-gray-500">Class XII Pass %</p>
                      <p className="text-3xl font-extrabold text-gray-900">{r.class12}</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-xs text-amber-600 font-medium">School Topper</p>
                    <p className="text-sm font-bold text-gray-900">{r.topper} — {r.topperPct}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="reveal-on-scroll bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-100 mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-5 text-center">Key Achievements</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { icon: "🏆", title: "District Topper 2025", desc: "Rahul Kumar secured 1st rank in the district for Class XII board exams" },
                  { icon: "🎯", title: "100% Pass Rate", desc: "Class X achieved 100% pass rate for 5 consecutive years (2021-2025)" },
                  { icon: "🏅", title: "Science Olympiad", desc: "8 students qualified for the National Science Olympiad finals in 2024" },
                  { icon: "📊", title: "Average Score 85%+", desc: "School average score above 85% in both Class X and XII board exams" },
                ].map((a) => (
                  <div key={a.title} className="bg-white rounded-xl p-5 shadow-sm">
                    <span className="text-2xl mb-2 block">{a.icon}</span>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{a.title}</h4>
                    <p className="text-xs text-gray-600 leading-5">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center reveal-on-scroll">
              <Link href="/results" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 group">
                View All Results & Download
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        <NoticeBoard />

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="reveal-on-scroll">
              <SectionTitle title="What Parents Say" subtitle="Testimonials from our community" align="center" />
            </div>
            <div className="grid md:grid-cols-3 gap-7">
              {testimonials.map((t, i) => (
                <div key={t.name} className={`reveal-on-scroll stagger-${i + 1} bg-gray-50 rounded-2xl p-8 border border-gray-100 card-lift hover:bg-white transition-colors duration-300`}>
                  <div className="flex items-center gap-1 mb-5 text-amber-400 text-lg">
                    {[...Array(5)].map((_, i) => <span key={i} className="animate-bounce-soft" style={{ animationDelay: `${i * 0.1}s` }}>★</span>)}
                  </div>
                  <p className="text-gray-600 leading-7 mb-6 italic text-sm">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
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

        {/* Gallery with animated frames */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="reveal-on-scroll">
              <SectionTitle title="Gallery" subtitle="Glimpses of school life and memorable moments" align="center" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {galleryItems.map((item, i) => (
                <div key={item.label} className={`reveal-scale stagger-${Math.min(i + 1, 6)} group cursor-pointer`}>
                  <div className="image-frame transition-transform duration-500 group-hover:scale-[1.03] group-hover:rotate-1">
                    <div className="image-frame-inner">
                      <div className={`bg-gradient-to-br ${item.color} rounded-[calc(1rem-3px)] aspect-video flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #000 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />
                        <div className="relative z-10 text-center transition-transform duration-500 group-hover:scale-110 p-2">
                          <span className="text-4xl block mb-2 drop-shadow-sm">{item.icon}</span>
                          <p className="text-sm font-bold text-gray-700">{item.label}</p>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
                        {/* Description on hover */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-xs text-white leading-4">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10 reveal-on-scroll">
              <Link href="/student-life" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 group">
                View More in Student Life
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
