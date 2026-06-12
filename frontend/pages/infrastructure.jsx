import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Infrastructure() {
  useScrollReveal();

  const facilities = [
    { name: "Classrooms", icon: "🏫", desc: "40+ spacious, well-ventilated classrooms with smart boards and comfortable seating", features: ["Smart Boards", "AC Available", "CCTV Monitored"], color: "from-blue-50 to-indigo-50" },
    { name: "Library", icon: "📚", desc: "A well-stocked library with over 10,000 books, journals, magazines, and digital resources", features: ["Reading Area", "Digital Catalog", "Weekly Issues"], color: "from-amber-50 to-yellow-50" },
    { name: "Science Labs", icon: "🔬", desc: "Separate fully equipped laboratories for Physics, Chemistry, and Biology with modern equipment", features: ["Physics Lab", "Chemistry Lab", "Biology Lab"], color: "from-green-50 to-emerald-50" },
    { name: "Computer Lab", icon: "💻", desc: "Modern computer lab with latest hardware, high-speed internet, and educational software", features: ["50+ Computers", "High-Speed Internet", "Educational Software"], color: "from-purple-50 to-violet-50" },
    { name: "Sports Complex", icon: "🏟️", desc: "Large sports ground with facilities for cricket, football, basketball, volleyball, and athletics", features: ["Cricket Ground", "Basketball Court", "Running Track"], color: "from-teal-50 to-cyan-50" },
    { name: "Auditorium", icon: "🎭", desc: "A fully air-conditioned auditorium with capacity for 500 people for events and functions", features: ["500 Capacity", "Stage", "Sound System"], color: "from-rose-50 to-pink-50" },
    { name: "Transport", icon: "🚌", desc: "Fleet of well-maintained buses covering all major routes with trained drivers and attendants", features: ["GPS Tracked", "Trained Drivers", "All Routes"], color: "from-orange-50 to-amber-50" },
    { name: "Medical Room", icon: "🏥", desc: "On-campus medical facility with a qualified nurse and tie-up with nearby hospitals", features: ["First Aid", "Qualified Nurse", "Emergency Tie-up"], color: "from-red-50 to-rose-50" },
    { name: "Cafeteria", icon: "🍽️", desc: "Hygienic cafeteria serving nutritious meals prepared in a clean kitchen", features: ["Hygienic Food", "Clean Kitchen", "Nutritious Menu"], color: "from-green-50 to-lime-50" },
  ];

  const galleryItems = [
    { label: "Main Building", icon: "🏛️", color: "from-blue-100 to-indigo-100" },
    { label: "Library", icon: "📚", color: "from-amber-100 to-yellow-100" },
    { label: "Sports Ground", icon: "🏟️", color: "from-green-100 to-emerald-100" },
    { label: "Classroom", icon: "📖", color: "from-purple-100 to-violet-100" },
    { label: "Science Lab", icon: "🔬", color: "from-teal-100 to-cyan-100" },
    { label: "Computer Lab", icon: "💻", color: "from-rose-100 to-pink-100" },
    { label: "Auditorium", icon: "🎭", color: "from-orange-100 to-amber-100" },
    { label: "Cafeteria", icon: "🍽️", color: "from-green-100 to-lime-100" },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="reveal-on-scroll">
              <SectionTitle title="Infrastructure & Facilities" subtitle="World-class campus for holistic development" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {facilities.map((f, i) => (
                <div key={f.name} className={`reveal-on-scroll stagger-${Math.min(i + 1, 6)} bg-white rounded-2xl p-7 border border-gray-200 card-glow group`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${f.color} rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{f.name}</h3>
                  <p className="text-sm text-gray-600 leading-6 mb-5">{f.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.features.map((feat) => (
                      <span key={feat} className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full font-medium border border-gray-200">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="reveal-on-scroll">
              <SectionTitle title="Campus Gallery" subtitle="Take a virtual tour of our beautiful campus" align="center" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {galleryItems.map((item, i) => (
                <div key={item.label} className={`reveal-scale stagger-${Math.min(i + 1, 6)} group cursor-pointer`}>
                  <div className="image-frame transition-transform duration-500 group-hover:scale-[1.04] group-hover:rotate-1">
                    <div className="image-frame-inner">
                      <div className={`bg-gradient-to-br ${item.color} rounded-[calc(1rem-3px)] aspect-video flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #000 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />
                        <div className="relative z-10 text-center transition-transform duration-500 group-hover:scale-110">
                          <span className="text-4xl block mb-2 drop-shadow-sm">{item.icon}</span>
                          <p className="text-sm font-bold text-gray-700">{item.label}</p>
                        </div>
                        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
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
