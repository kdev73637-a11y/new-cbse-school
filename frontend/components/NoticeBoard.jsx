import { useState, useEffect } from "react";
import api from "../utils/api";
import useScrollReveal from "../hooks/useScrollReveal";

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  useScrollReveal();

  useEffect(() => {
    api.get("/notices").then((res) => {
      if (res.success) setNotices(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const categoryColors = {
    urgent: "bg-red-100 text-red-700 border-red-200",
    exam: "bg-purple-100 text-purple-700 border-purple-200",
    event: "bg-green-100 text-green-700 border-green-200",
    holiday: "bg-amber-100 text-amber-700 border-amber-200",
    general: "bg-blue-100 text-blue-700 border-blue-200",
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="reveal-on-scroll flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Notices & Circulars</h2>
            <div className="mt-3 w-16 h-1.5 bg-gradient-to-r from-blue-700 to-indigo-600 rounded-full" />
          </div>
          <div className="hidden md:flex w-12 h-12 bg-blue-100 rounded-xl items-center justify-center animate-bounce-soft">
            <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
          </div>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shimmer h-24" />
            ))}
          </div>
        ) : notices.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center text-gray-500 border border-gray-100 reveal-on-scroll">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">📋</div>
            <p className="font-medium">No notices available at the moment.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notices.slice(0, 5).map((notice, i) => (
              <div key={notice._id} className={`reveal-on-scroll stagger-${Math.min(i + 1, 5)} bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4 group`}>
                <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-blue-500/30 group-hover:scale-125 transition-transform" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-semibold text-gray-900 text-lg">{notice.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold border ${categoryColors[notice.category] || categoryColors.general}`}>
                      {notice.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-6 line-clamp-2">{notice.content}</p>
                  <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {new Date(notice.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
