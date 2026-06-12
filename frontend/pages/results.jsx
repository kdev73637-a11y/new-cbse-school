import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import { useState, useEffect } from "react";
import api from "../utils/api";

export default function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/results").then((res) => {
      if (res.success) setResults(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const highlights = [
    { year: "2025", class10: "98%", class12: "96%", topper: "Rahul K - 99.2%" },
    { year: "2024", class10: "97%", class12: "95%", topper: "Priya S - 98.8%" },
    { year: "2023", class10: "96%", class12: "94%", topper: "Amit V - 98.4%" },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Results & Achievements" subtitle="Consistent academic excellence year after year" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Board Results" align="center" />
            <div className="grid sm:grid-cols-3 gap-8 mb-16">
              {highlights.map((r) => (
                <div key={r.year} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center border border-blue-100 hover:shadow-lg transition">
                  <h3 className="text-3xl font-bold text-blue-700 mb-4">{r.year}</h3>
                  <div className="space-y-3 mb-4">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-500">Class X Pass %</p>
                      <p className="text-2xl font-bold text-gray-900">{r.class10}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-500">Class XII Pass %</p>
                      <p className="text-2xl font-bold text-gray-900">{r.class12}</p>
                    </div>
                  </div>
                  <p className="text-sm text-amber-600 font-medium">Topper: {r.topper}</p>
                </div>
              ))}
            </div>

            <SectionTitle title="Result Archives" subtitle="Download detailed results" />
            {loading ? (
              <div className="text-center py-8 text-gray-500">Loading results...</div>
            ) : results.length === 0 ? (
              <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-500 border">Detailed results will be uploaded soon.</div>
            ) : (
              <div className="space-y-3">
                {results.map((r) => (
                  <div key={r._id} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="font-bold text-gray-900">{r.title}</h3>
                      <p className="text-sm text-gray-500">Class {r.class} | {r.session} | {r.examType}</p>
                    </div>
                    {r.fileUrl && (
                      <a href={r.fileUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-800 transition">
                        Download
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
