import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import { useState, useEffect } from "react";
import api from "../utils/api";

export default function Faculty() {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [department, setDepartment] = useState("");

  useEffect(() => {
    api.get("/faculty").then((res) => {
      if (res.success) setFaculty(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const departments = [...new Set(faculty.map((f) => f.department))];
  const filtered = department ? faculty.filter((f) => f.department === department) : faculty;

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Our Faculty" subtitle="Experienced and dedicated educators" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {departments.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                <button onClick={() => setDepartment("")} className={`px-4 py-2 rounded-full text-sm font-medium transition ${!department ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>All</button>
                {departments.map((d) => (
                  <button key={d} onClick={() => setDepartment(d)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${department === d ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>{d}</button>
                ))}
              </div>
            )}

            {loading ? (
              <div className="text-center py-12 text-gray-500">Loading faculty...</div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-12 text-gray-500">Faculty information will be updated soon.</div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((member) => (
                  <div key={member._id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition text-center group">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-blue-700 font-bold">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700">{member.name}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-1">{member.designation}</p>
                    <p className="text-xs text-gray-500 mb-3">{member.department}</p>
                    {member.qualification && <p className="text-xs text-gray-500">{member.qualification}</p>}
                    {member.experience && <p className="text-xs text-gray-400 mt-1">{member.experience} experience</p>}
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
