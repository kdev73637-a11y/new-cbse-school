import Link from "next/link";

const cards = [
  { title: "Admissions", desc: "Apply for 2026-27", href: "/admissions", icon: "🎓", color: "bg-blue-50 border-blue-200", hoverColor: "group-hover:bg-blue-100 group-hover:border-blue-300", iconBg: "bg-blue-100 text-blue-600" },
  { title: "Academics", desc: "CBSE Curriculum", href: "/academics", icon: "📖", color: "bg-green-50 border-green-200", hoverColor: "group-hover:bg-green-100 group-hover:border-green-300", iconBg: "bg-green-100 text-green-600" },
  { title: "Infrastructure", desc: "Modern Facilities", href: "/infrastructure", icon: "🏫", color: "bg-purple-50 border-purple-200", hoverColor: "group-hover:bg-purple-100 group-hover:border-purple-300", iconBg: "bg-purple-100 text-purple-600" },
  { title: "Results", desc: "Our Achievements", href: "/results", icon: "🏆", color: "bg-amber-50 border-amber-200", hoverColor: "group-hover:bg-amber-100 group-hover:border-amber-300", iconBg: "bg-amber-100 text-amber-600" },
  { title: "Faculty", desc: "Expert Teachers", href: "/faculty", icon: "👩‍🏫", color: "bg-pink-50 border-pink-200", hoverColor: "group-hover:bg-pink-100 group-hover:border-pink-300", iconBg: "bg-pink-100 text-pink-600" },
  { title: "Contact", desc: "Get in Touch", href: "/contact", icon: "📞", color: "bg-cyan-50 border-cyan-200", hoverColor: "group-hover:bg-cyan-100 group-hover:border-cyan-300", iconBg: "bg-cyan-100 text-cyan-600" },
];

export default function QuickCards() {
  return (
    <section className="py-14 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cards.map((card, i) => (
            <Link key={card.title} href={card.href} className={`group ${card.color} border rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] ${card.hoverColor}`}>
              <div className={`w-14 h-14 mx-auto mb-3 ${card.iconBg} rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {card.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base group-hover:text-blue-700 transition-colors">{card.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
