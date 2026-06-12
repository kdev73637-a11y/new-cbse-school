import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import { useState, useEffect } from "react";
import api from "../utils/api";

const demoResults = [
  { _id: "d1", title: "Class X Board Result 2025", class: "X", session: "2024-25", examType: "final", description: "All 120 students passed with distinction. School topper Rahul Kumar scored 99.2%. 45 students scored above 90%." },
  { _id: "d2", title: "Class XII Board Result 2025 (Science)", class: "XII", session: "2024-25", examType: "final", description: "96% pass rate in Science stream. 12 students scored above 95%. School average: 82.5%." },
  { _id: "d3", title: "Class XII Board Result 2025 (Commerce)", class: "XII", session: "2024-25", examType: "final", description: "100% pass rate in Commerce stream. Top scorer Neha Gupta achieved 97.8%. School average: 79.3%." },
  { _id: "d4", title: "Mid-Term Result 2025 - All Classes", class: "I-XII", session: "2025-26", examType: "midterm", description: "Mid-term examinations conducted in September 2025. Overall school average improved by 3% compared to previous year." },
  { _id: "d5", title: "Class X Board Result 2024", class: "X", session: "2023-24", examType: "final", description: "97% pass rate. School topper Priya Singh scored 98.8%. 38 students scored above 90%. School average: 84.2%." },
  { _id: "d6", title: "Class XII Board Result 2024", class: "XII", session: "2023-24", examType: "final", description: "95% pass rate. 8 students scored above 95%. Toppers from both Science and Commerce streams." },
];

const highlights = [
  { year: "2025", class10: "98%", class12: "96%", topper: "Rahul Kumar", topperPct: "99.2%", details: "120 students appeared, 45 scored above 90%" },
  { year: "2024", class10: "97%", class12: "95%", topper: "Priya Singh", topperPct: "98.8%", details: "115 students appeared, 38 scored above 90%" },
  { year: "2023", class10: "96%", class12: "94%", topper: "Amit Verma", topperPct: "98.4%", details: "110 students appeared, 35 scored above 90%" },
];

const subjectToppers = [
  { name: "Rahul Kumar", subject: "Mathematics", score: "100/100", year: "2025" },
  { name: "Priya Singh", subject: "English", score: "99/100", year: "2024" },
  { name: "Ankit Sharma", subject: "Physics", score: "98/100", year: "2025" },
  { name: "Neha Gupta", subject: "Chemistry", score: "99/100", year: "2025" },
  { name: "Amit Verma", subject: "Computer Science", score: "100/100", year: "2023" },
  { name: "Sneha Patel", subject: "Biology", score: "98/100", year: "2024" },
];

export default function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/results").then((res) => {
      if (res.success && res.data && res.data.length > 0) {
        setResults(res.data);
      } else {
        setResults(demoResults);
      }
      setLoading(false);
    }).catch(() => {
      setResults(demoResults);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Results & Achievements" subtitle="Consistent academic excellence year after year" />
          </div>
        </section>

        {/* Board Results Highlights */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Board Results - Last 3 Years" subtitle="Pass percentage and toppers" align="center" />
            <div className="grid sm:grid-cols-3 gap-8 mb-16">
              {highlights.map((r) => (
                <div key={r.year} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-7 text-center border border-blue-100 hover:shadow-xl transition duration-300">
                  <h3 className="text-3xl font-bold text-blue-700 mb-5">{r.year}</h3>
                  <div className="space-y-3 mb-5">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-sm text-gray-500">Class X Pass %</p>
                      <p className="text-3xl font-bold text-gray-900">{r.class10}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-sm text-gray-500">Class XII Pass %</p>
                      <p className="text-3xl font-bold text-gray-900">{r.class12}</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3">
                    <p className="text-xs text-amber-600 font-medium">School Topper</p>
                    <p className="text-sm font-bold text-gray-900">{r.topper} — {r.topperPct}</p>
                  </div>
                  <p className="text-xs text-gray-500">{r.details}</p>
                </div>
              ))}
            </div>

            {/* Subject Toppers */}
            <SectionTitle title="Subject Toppers" subtitle="Students who excelled in individual subjects" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {subjectToppers.map((s) => (
                <div key={s.name + s.year} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg transition duration-300 flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    🏅
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{s.name}</h4>
                    <p className="text-sm text-gray-500">{s.subject} — {s.score} ({s.year})</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Result Archives */}
            <SectionTitle title="Result Archives" subtitle="Download detailed result sheets" />
            {loading ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-gray-100 rounded-xl p-6 shimmer h-20" />
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {results.map((r) => (
                  <div key={r._id} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition duration-300 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                        📄
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{r.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Class {r.class} • {r.session} • <span className="capitalize">{r.examType}</span>
                        </p>
                        {r.description && (
                          <p className="text-sm text-gray-600 mt-2 leading-5 max-w-xl">{r.description}</p>
                        )}
                      </div>
                    </div>
                    {r.fileUrl && (
                      <a href={r.fileUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-800 transition font-medium flex items-center gap-2 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        Download PDF
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
