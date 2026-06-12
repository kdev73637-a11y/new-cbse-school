import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import { useState, useEffect } from "react";
import api from "../utils/api";

export default function Downloads() {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  useEffect(() => {
    api.get("/downloads").then((res) => {
      if (res.success) setDownloads(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const categories = [...new Set(downloads.map((d) => d.category))];
  const filtered = category ? downloads.filter((d) => d.category === category) : downloads;

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Downloads" subtitle="Important documents and resources" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                <button onClick={() => setCategory("")} className={`px-4 py-2 rounded-full text-sm font-medium transition ${!category ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>All</button>
                {categories.map((c) => (
                  <button key={c} onClick={() => setCategory(c)} className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition ${category === c ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>{c}</button>
                ))}
              </div>
            )}

            {loading ? (
              <div className="text-center py-12 text-gray-500">Loading downloads...</div>
            ) : filtered.length === 0 ? (
              <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-500 border">No downloads available at the moment.</div>
            ) : (
              <div className="space-y-3">
                {filtered.map((d) => (
                  <div key={d._id} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📄</span>
                      <div>
                        <h3 className="font-bold text-gray-900">{d.title}</h3>
                        {d.description && <p className="text-sm text-gray-500">{d.description}</p>}
                        <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full capitalize mt-1 inline-block">{d.category}</span>
                      </div>
                    </div>
                    <a href={d.fileUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-800 transition whitespace-nowrap">
                      Download
                    </a>
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
