import Link from "next/link";
import useCountUp from "../hooks/useCountUp";

const stats = [
  { label: "Years of Excellence", value: 15, suffix: "+", icon: "🏆" },
  { label: "Students Enrolled", value: 1000, suffix: "+", icon: "👨‍🎓" },
  { label: "Expert Faculty", value: 50, suffix: "+", icon: "👩‍🏫" },
  { label: "Pass Rate", value: 98, suffix: "%", icon: "📊" },
];

const philosophy = [
  { icon: "🎯", title: "Our Mission", text: "To provide quality CBSE education in a safe, inclusive environment that promotes academic excellence and holistic development." },
  { icon: "👁️", title: "Our Vision", text: "To be a center of excellence nurturing responsible citizens, innovative thinkers, and future leaders." },
  { icon: "💡", title: "Philosophy", text: "Every child is unique. We combine modern pedagogy with timeless values to unlock each student's full potential." },
];

function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.value, 2200 + index * 200);
  return (
    <div ref={ref} className="glass-card p-5 text-center group">
      <div className="text-2xl mb-2 animate-float" style={{ animationDelay: `${index * 0.4}s` }}>{stat.icon}</div>
      <p className="text-3xl font-extrabold text-gradient">{count}{stat.suffix}</p>
      <p className="text-xs font-medium text-gray-500 mt-1 tracking-wide uppercase">{stat.label}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-animated-gradient" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-amber-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="inline-block bg-blue-100/60 backdrop-blur-sm text-blue-700 px-5 py-1.5 rounded-full text-sm font-semibold mb-4 border border-blue-200/50">
            Discover Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About <span className="text-gradient">the School</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Building futures through quality education since 2010
          </p>
          <div className="mt-4 mx-auto w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Left - Image Area */}
          <div className="reveal-left">
            <div className="relative">
              {/* Main image card */}
              <div className="glass-strong rounded-3xl overflow-hidden shadow-premium-lg">
                <div className="bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  <div className="relative z-10 text-center p-8">
                    <div className="w-28 h-28 mx-auto mb-5 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/40 animate-float">
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-2xl font-extrabold text-gray-800">Bright Futures Academy</p>
                    <p className="text-gray-500 mt-1 text-sm">Where Learning Comes Alive</p>
                  </div>
                  {/* Decorative */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-blue-300/30 rounded-2xl rotate-12 floating-badge" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-amber-200/40 rounded-xl rotate-6 floating-badge" />
                </div>
              </div>
              
              {/* Floating stat badges */}
              <div className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 shadow-premium floating-badge">
                <p className="text-xs font-semibold text-gray-500">CBSE</p>
                <p className="text-lg font-extrabold text-gradient">A+</p>
                <p className="text-xs text-gray-500">Grade</p>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3 shadow-premium floating-badge" style={{ animationDelay: "1.5s" }}>
                <p className="text-xs font-semibold text-gray-500">Since</p>
                <p className="text-lg font-extrabold text-blue-700">2010</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="reveal-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-5">
              Nurturing Excellence, Building Character
            </h3>
            <p className="text-gray-600 leading-8 mb-5 text-base">
              A premier CBSE private school in Jharkhand focused on quality education, safe learning, and complete transparency. Our school is committed to nurturing every child&apos;s potential through modern teaching methods, experienced faculty, and a warm, supportive environment.
            </p>
            <p className="text-gray-600 leading-8 mb-8 text-base">
              We believe in holistic development — combining academic rigor with sports, arts, and moral education to create well-rounded individuals ready for the challenges of tomorrow.
            </p>

            {/* Philosophy cards */}
            <div className="space-y-4 mb-8">
              {philosophy.map((p) => (
                <div key={p.title} className="glass-card p-4 flex items-start gap-4 group cursor-default">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-700 transition-colors">{p.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group btn-shine">
              Discover More
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>

        {/* Animated Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 reveal-on-scroll">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
