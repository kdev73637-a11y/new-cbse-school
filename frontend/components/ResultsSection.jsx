import Link from "next/link";
import useCountUp from "../hooks/useCountUp";

const highlights = [
  { label: "Pass Percentage", value: 98, suffix: "%", icon: "📈", color: "from-blue-500 to-indigo-600" },
  { label: "Distinction Holders", value: 72, suffix: "%", icon: "🏅", color: "from-amber-500 to-orange-600" },
  { label: "Board Toppers", value: 15, suffix: "+", icon: "🌟", color: "from-purple-500 to-violet-600" },
  { label: "Scholarship Winners", value: 35, suffix: "+", icon: "🎓", color: "from-green-500 to-emerald-600" },
];

const yearlyResults = [
  { year: "2025", class10: 98, class12: 96, topper: "Rahul Kumar", topScore: "99.2%", badge: "🥇" },
  { year: "2024", class10: 97, class12: 95, topper: "Priya Singh", topScore: "98.8%", badge: "🥈" },
  { year: "2023", class10: 96, class12: 94, topper: "Amit Verma", topScore: "98.4%", badge: "🥉" },
];

const achievements = [
  { icon: "🏆", title: "State Level Science Olympiad", desc: "3 students secured top 10 positions", color: "from-amber-50 to-yellow-50", border: "border-amber-200/50" },
  { icon: "🎯", title: "National Math Competition", desc: "5 students qualified for national finals", color: "from-blue-50 to-indigo-50", border: "border-blue-200/50" },
  { icon: "📝", title: "NTSE Scholarship", desc: "8 students awarded NTSE scholarships", color: "from-green-50 to-emerald-50", border: "border-green-200/50" },
  { icon: "💻", title: "Coding Championship", desc: "1st place in Inter-School Hackathon", color: "from-purple-50 to-violet-50", border: "border-purple-200/50" },
];

function StatHighlight({ item, index }) {
  const { count, ref } = useCountUp(item.value, 2000 + index * 300);
  return (
    <div ref={ref} className="glass-card p-6 text-center group relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />
      <div className="relative">
        <div className={`w-14 h-14 mx-auto mb-3 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
          {item.icon}
        </div>
        <p className="text-4xl font-extrabold text-gradient mb-1">{count}{item.suffix}</p>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.label}</p>
      </div>
    </div>
  );
}

function ProgressBar({ value, color }) {
  return (
    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
      <div className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${value}%` }} />
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-blue-50/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="inline-block bg-amber-100/60 backdrop-blur-sm text-amber-700 px-5 py-1.5 rounded-full text-sm font-semibold mb-4 border border-amber-200/50">
            Academic Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-gradient-gold">Results</span> & Achievements
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Consistently setting benchmarks in academic performance
          </p>
          <div className="mt-4 mx-auto w-20 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16 reveal-on-scroll">
          {highlights.map((item, i) => (
            <StatHighlight key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* Yearly Results with Charts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center reveal-on-scroll">Board Examination Results</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {yearlyResults.map((r, i) => (
              <div key={r.year} className={`glass-card p-6 reveal-scale stagger-${i + 1} group`}>
                {/* Year Header */}
                <div className="flex items-center justify-between mb-5">
                  <h4 className="text-2xl font-extrabold text-gradient">{r.year}</h4>
                  <div className="flex items-center gap-2 bg-amber-50 rounded-full px-3 py-1 border border-amber-200/50">
                    <span className="text-lg">{r.badge}</span>
                    <div>
                      <p className="text-xs font-bold text-amber-800">{r.topper}</p>
                      <p className="text-xs text-amber-600">{r.topScore}</p>
                    </div>
                  </div>
                </div>

                {/* Class X */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-600">Class X Pass %</span>
                    <span className="text-lg font-extrabold text-blue-700">{r.class10}%</span>
                  </div>
                  <ProgressBar value={r.class10} color="from-blue-500 to-indigo-500" />
                </div>

                {/* Class XII */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-600">Class XII Pass %</span>
                    <span className="text-lg font-extrabold text-purple-700">{r.class12}%</span>
                  </div>
                  <ProgressBar value={r.class12} color="from-purple-500 to-violet-500" />
                </div>

                {/* Success badge */}
                <div className="mt-5 flex items-center gap-2 text-green-600 bg-green-50 rounded-xl px-3 py-2 border border-green-100">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-xs font-semibold">Outstanding Performance</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="reveal-on-scroll">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Competitive Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((a, i) => (
              <div key={a.title} className={`glass-card p-5 group stagger-${i + 1}`}>
                <div className={`w-12 h-12 bg-gradient-to-br ${a.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm border ${a.border}`}>
                  {a.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-700 transition-colors">{a.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 reveal-on-scroll">
          <Link href="/results" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 group btn-shine">
            View All Results
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
