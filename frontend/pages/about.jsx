import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  useScrollReveal();

  const values = [
    { title: "Academic Excellence", icon: "🎯", desc: "Pursuing the highest standards in education and learning outcomes." },
    { title: "Moral Values", icon: "🌟", desc: "Instilling integrity, respect, and responsibility in every student." },
    { title: "Innovation", icon: "💡", desc: "Embracing modern teaching methods and encouraging creative thinking." },
    { title: "Inclusivity", icon: "🤝", desc: "Creating an environment where every child feels valued and supported." },
    { title: "Transparency", icon: "📋", desc: "Maintaining open communication with parents and stakeholders." },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="reveal-on-scroll">
              <SectionTitle title="About Our School" subtitle="Nurturing minds, building futures" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div className="reveal-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-5">Our History</h3>
                <p className="text-gray-600 leading-8 mb-5 text-lg">
                  Founded with the vision of providing quality education in Jharkhand, our school has grown to become one of the most trusted educational institutions in the region. Over the years, we have produced numerous achievers who have excelled in various fields.
                </p>
                <p className="text-gray-600 leading-8">
                  Our journey has been marked by continuous improvement, innovation in teaching methodologies, and a deep commitment to student welfare. We follow the CBSE curriculum with enrichment activities that develop well-rounded individuals.
                </p>
              </div>
              {/* Professional image placeholder */}
              <div className="reveal-right">
                <div className="image-frame">
                  <div className="image-frame-inner">
                    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #1e40af 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                      <div className="relative z-10 text-center p-8">
                        <div className="w-28 h-28 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/30 animate-float">
                          <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <p className="text-2xl font-bold text-gray-800">15+ Years</p>
                        <p className="text-gray-500 mt-1">of Excellence</p>
                      </div>
                      <div className="absolute top-5 right-5 w-14 h-14 border-2 border-amber-300/40 rounded-full" />
                      <div className="absolute bottom-6 left-6 w-10 h-10 bg-amber-400/20 rounded-lg rotate-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-14">
              <div className="reveal-left bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-lg">🎯</span>
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-7 text-lg">
                  To be a center of excellence in education, nurturing responsible citizens and future leaders who contribute positively to society.
                </p>
              </div>
              <div className="reveal-right bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-lg">🚀</span>
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-7 text-lg">
                  To provide quality CBSE education in a safe, inclusive, and stimulating environment that promotes academic excellence and holistic development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="reveal-on-scroll">
              <SectionTitle title="Our Core Values" subtitle="Principles that guide everything we do" align="center" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((v, i) => (
                <div key={v.title} className={`reveal-scale stagger-${i + 1} bg-white rounded-2xl p-7 text-center border border-gray-100 card-glow`}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-5">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="reveal-on-scroll">
              <SectionTitle title="School at a Glance" align="center" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
              {[
                { label: "Students Enrolled", value: "1000+", icon: "👨‍🎓" },
                { label: "Faculty Members", value: "50+", icon: "👩‍🏫" },
                { label: "Years of Excellence", value: "15+", icon: "🏆" },
                { label: "Board Pass Rate", value: "98%", icon: "📊" },
              ].map((s, i) => (
                <div key={s.label} className={`reveal-scale stagger-${i + 1} bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-100 card-lift`}>
                  <span className="text-4xl block mb-3">{s.icon}</span>
                  <p className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">{s.value}</p>
                  <p className="text-sm text-gray-600 mt-2 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
