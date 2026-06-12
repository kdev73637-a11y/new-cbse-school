import { useState, useEffect } from "react";
import Link from "next/link";
import api from "../utils/api";

const categories = ["All", "general", "exam", "event", "holiday", "urgent"];

const categoryConfig = {
  urgent: { color: "bg-red-100 text-red-700 border-red-200", icon: "🚨", dot: "bg-red-500" },
  exam: { color: "bg-purple-100 text-purple-700 border-purple-200", icon: "📝", dot: "bg-purple-500" },
  event: { color: "bg-green-100 text-green-700 border-green-200", icon: "🎉", dot: "bg-green-500" },
  holiday: { color: "bg-amber-100 text-amber-700 border-amber-200", icon: "🏖️", dot: "bg-amber-500" },
  general: { color: "bg-blue-100 text-blue-700 border-blue-200", icon: "📋", dot: "bg-blue-500" },
};

const fallbackNotices = [
  { _id: "1", title: "Admission Open for 2026-27", content: "Applications are being accepted for all classes. Visit the admissions page for details.", category: "general", date: "2026-06-10T00:00:00Z" },
  { _id: "2", title: "Annual Day Celebration", content: "Join us for the grand annual day celebration with cultural performances and awards ceremony.", category: "event", date: "2026-06-05T00:00:00Z" },
  { _id: "3", title: "Mid-Term Exam Schedule Released", content: "The mid-term examination schedule for all classes has been published. Check the downloads section.", category: "exam", date: "2026-06-01T00:00:00Z" },
  { _id: "4", title: "Summer Vacation Notice", content: "School will remain closed from May 15 to June 30 for summer vacation.", category: "holiday", date: "2026-05-10T00:00:00Z" },
  { _id: "5", title: "Important: Fee Submission Deadline", content: "Last date for Q1 fee submission is June 20. Late fee charges will apply after this date.", category: "urgent", date: "2026-06-08T00:00:00Z" },
];

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return { day: d.getDate(), month: d.toLocaleString("en", { month: "short" }), year: d.getFullYear() };
}

export default function NoticesSection() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/notices").then((res) => {
      if (res.success && res.data.length > 0) setNotices(res.data);
      else setNotices(fallbackNotices);
      setLoading(false);
    }).catch(() => {
      setNotices(fallbackNotices);
      setLoading(false);
    });
  }, []);

  const filtered = notices.filter((n) => {
    const matchesCategory = activeCategory === "All" || n.category === activeCategory;
    const matchesSearch = !search || n.title.toLowerCase().includes(search.toLowerCase()) || n.content.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-[#FAFAFA]" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-indigo-200/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 reveal-on-scroll">
          <span className="inline-block bg-blue-100/60 backdrop-blur-sm text-blue-700 px-5 py-1.5 rounded-full text-sm font-semibold mb-4 border border-blue-200/50">
            Stay Updated
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Notices <span className="text-gradient">& Circulars</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Latest announcements, events, and important updates
          </p>
          <div className="mt-4 mx-auto w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full" />
        </div>

        {/* Search & Filters */}
        <div className="mb-10 reveal-on-scroll">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="glass-strong rounded-2xl flex items-center px-5 py-3 shadow-premium">
              <svg className="w-5 h-5 text-gray-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input
                type="text"
                placeholder="Search notices..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
              />
              {search && (
                <button onClick={() => setSearch("")} className="text-gray-400 hover:text-gray-600 ml-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-pill ${activeCategory === cat ? "active" : ""}`}
              >
                {cat === "All" ? "All" : (categoryConfig[cat]?.icon || "") + " " + cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card p-6 shimmer h-28 rounded-2xl" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 glass-card">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-gray-500 font-medium">No notices found</p>
              <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="timeline-line space-y-5 pl-2">
              {filtered.map((notice, i) => {
                const cfg = categoryConfig[notice.category] || categoryConfig.general;
                const date = formatDate(notice.date);
                return (
                  <div key={notice._id || i} className="relative pl-12 reveal-on-scroll" style={{ transitionDelay: `${i * 0.08}s` }}>
                    {/* Timeline dot */}
                    <div className={`absolute left-3.5 top-6 w-4 h-4 ${cfg.dot} rounded-full border-[3px] border-white shadow-md z-10`} />

                    {/* Notice Card */}
                    <div className="glass-card p-5 group cursor-default">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${cfg.color}`}>
                              {cfg.icon} {notice.category}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                            {notice.title}
                          </h3>
                        </div>
                        {/* Date Badge */}
                        <div className="glass-strong rounded-xl px-3 py-2 text-center shrink-0 shadow-sm">
                          <p className="text-lg font-extrabold text-blue-700 leading-none">{date.day}</p>
                          <p className="text-[10px] font-semibold text-gray-500 uppercase">{date.month}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{notice.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="text-center mt-10 reveal-on-scroll">
          <Link href="/downloads" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group btn-shine">
            View All Circulars
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
