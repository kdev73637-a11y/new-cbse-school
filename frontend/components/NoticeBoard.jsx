import { useState, useEffect } from "react";
import api from "../utils/api";
import useScrollReveal from "../hooks/useScrollReveal";

const demoNotices = [
  {
    _id: "demo1",
    title: "Admissions Open for Session 2026-27",
    content: "We are pleased to announce that admissions are now open for Nursery to Class XI for the academic session 2026-27. Parents are requested to fill the online application form available on our website. Limited seats available on first-cum-first-serve basis.",
    category: "general",
    date: "2026-06-01T00:00:00.000Z",
  },
  {
    _id: "demo2",
    title: "Annual Examination Schedule Released",
    content: "The annual examination for classes I to XII will commence from March 10, 2026. Detailed date sheets have been shared with students. Parents can collect the same from the school office during working hours.",
    category: "exam",
    date: "2026-05-20T00:00:00.000Z",
  },
  {
    _id: "demo3",
    title: "Summer Vacation Notice",
    content: "School will remain closed for summer vacation from May 25, 2026 to June 30, 2026. Classes will resume from July 1, 2026. Summer holiday homework has been provided to all students.",
    category: "holiday",
    date: "2026-05-15T00:00:00.000Z",
  },
  {
    _id: "demo4",
    title: "Annual Sports Day - December 2026",
    content: "The much-awaited Annual Sports Day will be held on December 15, 2026 at the school ground. Students from all classes are encouraged to participate. Practice sessions begin from November 20. Parents are cordially invited to attend the event.",
    category: "event",
    date: "2026-05-10T00:00:00.000Z",
  },
  {
    _id: "demo5",
    title: "PTM Scheduled for June 14, 2026",
    content: "A Parent-Teacher Meeting has been scheduled for June 14, 2026 from 9:00 AM to 1:00 PM. Parents are requested to attend without fail to discuss their ward's academic progress and overall development.",
    category: "urgent",
    date: "2026-06-08T00:00:00.000Z",
  },
];

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  useScrollReveal();

  useEffect(() => {
    api.get("/notices").then((res) => {
      if (res.success && res.data && res.data.length > 0) {
        setNotices(res.data);
      } else {
        setNotices(demoNotices);
      }
      setLoading(false);
    }).catch(() => {
      setNotices(demoNotices);
      setLoading(false);
    });
  }, []);

  const categoryColors = {
    urgent: "bg-red-100 text-red-700 border-red-200",
    exam: "bg-purple-100 text-purple-700 border-purple-200",
    event: "bg-green-100 text-green-700 border-green-200",
    holiday: "bg-amber-100 text-amber-700 border-amber-200",
    general: "bg-blue-100 text-blue-700 border-blue-200",
  };

  const categoryIcons = {
    urgent: "🚨",
    exam: "📝",
    event: "🎉",
    holiday: "🌴",
    general: "📢",
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="reveal-on-scroll flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Notices & Circulars</h2>
            <p className="text-gray-500 mt-2">Stay updated with latest school announcements</p>
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
        ) : (
          <div className="space-y-4">
            {notices.slice(0, 5).map((notice, i) => (
              <div key={notice._id} className={`reveal-on-scroll stagger-${Math.min(i + 1, 5)} bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4 group`}>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {categoryIcons[notice.category] || "📢"}
                </div>
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
