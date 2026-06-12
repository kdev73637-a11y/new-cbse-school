import Link from "next/link";
import useCountUp from "../hooks/useCountUp";

const stats = [
  { label: "Years of Excellence", value: 15, suffix: "+", icon: "🏆" },
  { label: "Students Enrolled", value: 1000, suffix: "+", icon: "👨‍🎓" },
  { label: "Expert Faculty", value: 50, suffix: "+", icon: "👩‍🏫" },
  { label: "Pass Rate", value: 98, suffix: "%", icon: "📊" },
  { label: "Awards Won", value: 120, suffix: "+", icon: "🏅" },
  { label: "Alumni Network", value: 5000, suffix: "+", icon: "🌍" },
];

const missionVision = [
  {
    icon: "🎯",
    title: "Our Mission",
    text: "To provide quality CBSE education in a safe, inclusive, and stimulating environment that promotes academic excellence, critical thinking, and holistic development of every student.",
    color: "from-blue-500 to-indigo-600",
    bg: "from-blue-50 to-indigo-50",
  },
  {
    icon: "👁️",
    title: "Our Vision",
    text: "To be a premier center of excellence in education, nurturing responsible citizens, innovative thinkers, and compassionate leaders who contribute positively to society.",
    color: "from-purple-500 to-violet-600",
    bg: "from-purple-50 to-violet-50",
  },
  {
    icon: "💡",
    title: "Educational Philosophy",
    text: "Every child is unique. We combine modern teaching methodologies with timeless moral values, creating an environment where curiosity thrives and each student discovers their true potential.",
    color: "from-amber-500 to-orange-600",
    bg: "from-amber-50 to-orange-50",
  },
];

const highlights = [
  { icon: "📖", text: "CBSE Affiliated Curriculum" },
  { icon: "🔬", text: "Smart Classrooms & Labs" },
  { icon: "🎨", text: "Arts & Cultural Programs" },
  { icon: "⚽", text: "Sports Excellence" },
  { icon: "🌱", text: "Value-Based Education" },
  { icon: "🚌", text: "Safe Transport Facility" },
];

function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.value, 2200 + index * 200);
  return (
    <div ref={ref} className="glass-card p-5 text-center group">
      <div className="text-2xl mb-2 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>{stat.icon}</div>
      <p className="text-3xl font-extrabold text-gradient">{count}{stat.suffix}</p>
      <p className="text-[11px] font-semibold text-gray-500 mt-1 tracking-wide uppercase">{stat.label}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-animated-gradient" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-amber-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-20 right-1/4 w-32 h-32 bg-pink-200/15 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14 reveal-on-scroll">
          <span className="inline-block bg-blue-100/60 backdrop-blur-sm text-blue-700 px-5 py-1.5 rounded-full text-sm font-semibold mb-4 border border-blue-200/50">
            Discover Our Story
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5">
            About <span className="text-gradient">the School</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We believe that education is the foundation for a brighter future. Established with a commitment to academic excellence and holistic development.
          </p>
          <div className="mt-5 mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* ===== ROW 1: Classroom Image + Intro Content ===== */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left - Rich Classroom Illustration */}
          <div className="reveal-left">
            <div className="relative">
              {/* Main classroom scene */}
              <div className="glass-strong rounded-3xl overflow-hidden shadow-premium-lg">
                <div className="bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-50 aspect-[4/3] relative overflow-hidden">
                  {/* Classroom background elements */}
                  <div className="absolute inset-0">
                    {/* Wall */}
                    <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-amber-50 to-orange-50/50" />
                    {/* Floor */}
                    <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-amber-100/60 to-transparent" />

                    {/* Blackboard */}
                    <div className="absolute top-[8%] left-[15%] w-[70%] h-[30%] bg-gradient-to-br from-green-800 to-green-900 rounded-lg shadow-inner border-4 border-amber-800/60">
                      <div className="absolute inset-3 flex flex-col justify-center items-center text-white/80">
                        <p className="text-xs md:text-sm font-mono tracking-wider">E = mc²</p>
                        <p className="text-[8px] md:text-[10px] mt-1 font-mono opacity-60">Welcome to Class!</p>
                        <div className="flex gap-3 mt-2">
                          <div className="w-6 h-1 bg-white/30 rounded" />
                          <div className="w-10 h-1 bg-white/30 rounded" />
                          <div className="w-4 h-1 bg-white/30 rounded" />
                        </div>
                      </div>
                    </div>

                    {/* Window */}
                    <div className="absolute top-[10%] right-[5%] w-[12%] h-[25%] bg-gradient-to-b from-sky-200 to-sky-100 rounded-lg border-2 border-amber-200/60 shadow-sm">
                      <div className="absolute inset-0 border-r border-amber-200/40" />
                      <div className="absolute inset-0 border-b border-amber-200/40" />
                      {/* Sun through window */}
                      <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/50" />
                    </div>

                    {/* Student desks row 1 */}
                    <div className="absolute bottom-[12%] left-[10%] flex gap-[8%]">
                      {/* Student 1 */}
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full mb-1 shadow-md" />
                        <div className="w-5 h-3 bg-blue-200 rounded-t-sm" />
                        <div className="w-12 h-5 bg-amber-200 rounded-sm shadow-sm" />
                      </div>
                      {/* Student 2 */}
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mb-1 shadow-md" />
                        <div className="w-5 h-3 bg-pink-200 rounded-t-sm" />
                        <div className="w-12 h-5 bg-amber-200 rounded-sm shadow-sm" />
                      </div>
                      {/* Student 3 */}
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-1 shadow-md" />
                        <div className="w-5 h-3 bg-green-200 rounded-t-sm" />
                        <div className="w-12 h-5 bg-amber-200 rounded-sm shadow-sm" />
                      </div>
                    </div>

                    {/* Teacher */}
                    <div className="absolute bottom-[38%] left-[5%]">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-lg" />
                      <div className="w-6 h-4 bg-indigo-200 rounded-t-sm mx-auto -mt-1" />
                    </div>

                    {/* Bookshelf */}
                    <div className="absolute top-[45%] left-[3%] w-[8%] h-[20%] bg-amber-700/40 rounded flex flex-col justify-around px-0.5">
                      <div className="flex gap-0.5">
                        <div className="w-1 h-3 bg-red-400/70 rounded-sm" />
                        <div className="w-1 h-3 bg-blue-400/70 rounded-sm" />
                        <div className="w-1 h-3 bg-green-400/70 rounded-sm" />
                      </div>
                      <div className="flex gap-0.5">
                        <div className="w-1 h-3 bg-yellow-400/70 rounded-sm" />
                        <div className="w-1 h-3 bg-purple-400/70 rounded-sm" />
                      </div>
                    </div>

                    {/* Light rays from window */}
                    <div className="absolute top-[10%] right-[5%] w-[35%] h-[60%] bg-gradient-to-bl from-yellow-200/15 to-transparent transform -skew-x-12 pointer-events-none" />
                  </div>

                  {/* Overlay text */}
                  <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-2xl px-4 py-3">
                    <p className="text-sm font-bold text-gray-800">Where Learning Comes Alive</p>
                    <p className="text-xs text-gray-500">Modern classrooms designed for engagement</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-5 -right-5 glass-strong rounded-2xl px-4 py-3 shadow-premium floating-badge">
                <p className="text-[10px] font-semibold text-gray-500 uppercase">CBSE</p>
                <p className="text-xl font-extrabold text-gradient leading-none">A+</p>
                <p className="text-[10px] text-gray-500">Grade</p>
              </div>
              <div className="absolute -bottom-5 -left-5 glass-strong rounded-2xl px-4 py-3 shadow-premium floating-badge" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">🎓</span>
                  <div>
                    <p className="text-sm font-extrabold text-blue-700 leading-none">Since 2010</p>
                    <p className="text-[10px] text-gray-500">15+ Years</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -right-3 glass-strong rounded-2xl px-3 py-2 shadow-premium floating-badge" style={{ animationDelay: "2.5s" }}>
                <div className="flex items-center gap-1.5">
                  <span className="text-base">⭐</span>
                  <p className="text-xs font-bold text-gray-700">Top Rated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Rich Content */}
          <div className="reveal-right">
            <div className="mb-2">
              <span className="inline-block bg-amber-100/60 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-amber-200/50">
                Established 2010
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
              Nurturing Excellence,<br />
              <span className="text-gradient">Building Character</span>
            </h3>

            {/* School History */}
            <div className="glass-card p-4 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-lg shrink-0 shadow-md">📜</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Our History</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Founded in 2010 with just 50 students and a dream, our school has grown into one of Jharkhand&apos;s most trusted educational institutions. Over 15 years, we&apos;ve built a legacy of academic excellence, producing board toppers, scholarship winners, and leaders across diverse fields.
                  </p>
                </div>
              </div>
            </div>

            {/* Main description */}
            <p className="text-gray-600 leading-8 mb-4 text-base">
              We are a premier CBSE private school committed to quality education, safe learning, and complete transparency. Our school nurtures every child&apos;s potential through modern teaching methods, experienced faculty, and a warm, supportive environment.
            </p>
            <p className="text-gray-600 leading-8 mb-6 text-base">
              We believe in holistic development — combining academic rigor with sports, arts, and moral education to create well-rounded individuals ready for the challenges of tomorrow.
            </p>

            {/* Quick highlights grid */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-2 glass-card px-3 py-2 group cursor-default">
                  <span className="text-lg group-hover:scale-125 transition-transform">{h.icon}</span>
                  <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-700 transition-colors">{h.text}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group btn-shine">
              Discover Our Full Story
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>

        {/* ===== ROW 2: Mission, Vision, Philosophy Cards ===== */}
        <div className="mb-16">
          <div className="text-center mb-8 md:mb-10 reveal-on-scroll">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              What <span className="text-gradient">Drives Us</span>
            </h3>
            <p className="text-gray-500 max-w-xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {missionVision.map((item, i) => (
              <div key={item.title} className={`glass-card p-5 md:p-6 group reveal-on-scroll stagger-${i + 1}`}>
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-7">{item.text}</p>
                <div className={`mt-5 w-full h-1 bg-gradient-to-r ${item.color} rounded-full opacity-30 group-hover:opacity-60 transition-opacity`} />
              </div>
            ))}
          </div>
        </div>

        {/* ===== ROW 3: Animated Stats Counter ===== */}
        <div className="reveal-on-scroll">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Our <span className="text-gradient-gold">Achievements</span> in Numbers
            </h3>
            <p className="text-gray-500">Milestones that reflect our dedication to excellence</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
