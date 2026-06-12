import { useState } from "react";

const categories = ["All", "Campus Life", "Sports Events", "Cultural Programs", "Annual Functions", "Science Exhibitions", "Educational Tours", "Student Achievements"];

const galleryData = [
  { id: 1, label: "Annual Day Celebration", category: "Annual Functions", icon: "🎊", color: "from-rose-400 to-pink-500", height: "tall", desc: "Students performing at the grand annual day" },
  { id: 2, label: "Cricket Tournament", category: "Sports Events", icon: "🏏", color: "from-blue-400 to-cyan-500", height: "normal", desc: "Inter-school cricket championship finals" },
  { id: 3, label: "Science Exhibition", category: "Science Exhibitions", icon: "🔬", color: "from-green-400 to-emerald-500", height: "normal", desc: "Students showcasing innovative science projects" },
  { id: 4, label: "Campus Garden", category: "Campus Life", icon: "🌿", color: "from-lime-400 to-green-500", height: "tall", desc: "Students maintaining the school eco-garden" },
  { id: 5, label: "Dance Performance", category: "Cultural Programs", icon: "💃", color: "from-purple-400 to-violet-500", height: "normal", desc: "Classical dance at cultural fest" },
  { id: 6, label: "Field Trip to Museum", category: "Educational Tours", icon: "🏛️", color: "from-amber-400 to-orange-500", height: "normal", desc: "Educational visit to the national museum" },
  { id: 7, label: "Math Olympiad Winners", category: "Student Achievements", icon: "🏅", color: "from-yellow-400 to-amber-500", height: "tall", desc: "Our math olympiad champions with trophies" },
  { id: 8, label: "Library Reading Hour", category: "Campus Life", icon: "📚", color: "from-indigo-400 to-blue-500", height: "normal", desc: "Students enjoying the reading hour in library" },
  { id: 9, label: "Basketball Match", category: "Sports Events", icon: "🏀", color: "from-orange-400 to-red-500", height: "normal", desc: "Inter-house basketball tournament" },
  { id: 10, label: "Music Concert", category: "Cultural Programs", icon: "🎵", color: "from-pink-400 to-rose-500", height: "tall", desc: "School band performing at the music concert" },
  { id: 11, label: "Robotics Workshop", category: "Science Exhibitions", icon: "🤖", color: "from-cyan-400 to-blue-500", height: "normal", desc: "Students building robots in STEM lab" },
  { id: 12, label: "Nature Walk", category: "Educational Tours", icon: "🌳", color: "from-emerald-400 to-teal-500", height: "normal", desc: "Environmental awareness nature walk" },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === "All" ? galleryData : galleryData.filter((g) => g.category === activeCategory);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-blue-50/30" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 reveal-on-scroll">
          <span className="inline-block bg-purple-100/60 backdrop-blur-sm text-purple-700 px-5 py-1.5 rounded-full text-sm font-semibold mb-4 border border-purple-200/50">
            Campus Moments
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Glimpses of school life, events, and achievements
          </p>
          <div className="mt-4 mx-auto w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="mb-10 reveal-on-scroll">
          <div className="flex gap-2 justify-center flex-wrap max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-pill ${activeCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="masonry-grid reveal-on-scroll">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="masonry-item"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div
                className="group cursor-pointer glass-card overflow-hidden p-0"
                onClick={() => setLightbox(item)}
              >
                <div className={`relative overflow-hidden ${item.height === "tall" ? "aspect-[3/4]" : "aspect-square"}`}>
                  {/* Gradient Image Placeholder */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-700 group-hover:scale-110`}>
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-transform duration-500 group-hover:scale-105">
                    <span className="text-5xl mb-3 drop-shadow-lg transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">{item.icon}</span>
                    <p className="text-white font-bold text-sm text-center drop-shadow-md">{item.label}</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-bold text-sm mb-1">{item.label}</p>
                      <p className="text-white/80 text-xs mb-2">{item.desc}</p>
                      <div className="flex items-center gap-2">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full border border-white/30">
                          {item.category}
                        </span>
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16 glass-card max-w-md mx-auto">
            <div className="text-5xl mb-4">📷</div>
            <p className="text-gray-500 font-medium">No photos in this category yet</p>
            <p className="text-gray-400 text-sm mt-1">Check back soon for new additions</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="relative max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Lightbox content */}
            <div className="glass-strong rounded-3xl overflow-hidden shadow-2xl">
              <div className={`relative aspect-video bg-gradient-to-br ${lightbox.color}`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl drop-shadow-2xl animate-scale-in">{lightbox.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200/50">
                    {lightbox.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{lightbox.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{lightbox.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
