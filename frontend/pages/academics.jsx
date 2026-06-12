import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

export default function Academics() {
  const subjects = {
    primary: ["English", "Hindi", "Mathematics", "EVS", "Computer Science", "Art & Craft", "Physical Education", "Music"],
    middle: ["English", "Hindi", "Sanskrit", "Mathematics", "Science", "Social Science", "Computer Science", "Art"],
    secondary: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer Science", "Physical Education"],
    senior: ["Physics", "Chemistry", "Biology/Mathematics", "English", "Computer Science/Physical Education", "Optional Subject"],
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Academics" subtitle="CBSE curriculum with holistic learning approach" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="prose max-w-none text-gray-600 leading-7 mb-12">
              <p className="text-lg">
                Our academic program follows the CBSE curriculum with enrichment activities designed to develop critical thinking, creativity, and communication skills. We use a blend of traditional and modern teaching methods including smart classes, project-based learning, and regular assessments.
              </p>
            </div>

            <SectionTitle title="Curriculum Structure" subtitle="From Nursery to Class XII" />
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(subjects).map(([level, subs]) => (
                <div key={level} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-700 rounded-full" />
                    {level === "primary" ? "Primary (I-V)" : level === "middle" ? "Middle School (VI-VIII)" : level === "secondary" ? "Secondary (IX-X)" : "Senior Secondary (XI-XII)"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {subs.map((sub) => (
                      <span key={sub} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Teaching Methodology" subtitle="Modern approaches for effective learning" align="center" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Smart Classes", icon: "📺", desc: "Digital interactive boards and multimedia content" },
                { title: "Project-Based", icon: "🔧", desc: "Hands-on projects for practical understanding" },
                { title: "Regular Assessments", icon: "📝", desc: "Continuous evaluation for tracking progress" },
                { title: "Activity Learning", icon: "🎨", desc: "Fun activities to make learning engaging" },
              ].map((m) => (
                <div key={m.title} className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg transition">
                  <span className="text-4xl block mb-3">{m.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{m.title}</h3>
                  <p className="text-sm text-gray-600">{m.desc}</p>
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
