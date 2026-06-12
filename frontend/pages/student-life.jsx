import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

export default function StudentLife() {
  const activities = [
    { name: "Sports & Athletics", icon: "⚽", items: ["Cricket", "Football", "Basketball", "Volleyball", "Athletics", "Badminton"] },
    { name: "Cultural Activities", icon: "🎭", items: ["Annual Day", "Cultural Fest", "Drama Club", "Music Band", "Dance Group", "Debate Club"] },
    { name: "Academic Clubs", icon: "📚", items: ["Science Club", "Math Olympiad", "Quiz Club", "Literary Club", "Coding Club", "Robotics"] },
    { name: "Community Service", icon: "🤝", items: ["NSS Activities", "Clean Drives", "Blood Donation", "Old Age Home Visits", "Tree Plantation", "Charity Events"] },
  ];

  const events = [
    { name: "Annual Day", month: "December", desc: "Grand celebration with cultural performances and prize distribution" },
    { name: "Sports Day", month: "January", desc: "Inter-house sports competitions and athletic events" },
    { name: "Science Exhibition", month: "August", desc: "Students showcase innovative science projects" },
    { name: "Republic Day", month: "January", desc: "Flag hoisting and patriotic performances" },
    { name: "Teachers' Day", month: "September", desc: "Celebrating our dedicated teaching staff" },
    { name: "Children's Day", month: "November", desc: "Fun-filled day with games and activities" },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Student Life" subtitle="Beyond academics — building well-rounded personalities" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-lg text-gray-600 leading-7 mb-12 max-w-3xl">
              At our school, we believe education goes beyond textbooks. Our diverse range of co-curricular and extracurricular activities help students discover their passions, develop leadership skills, and build lifelong friendships.
            </p>

            <SectionTitle title="Activities & Clubs" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {activities.map((a) => (
                <div key={a.name} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
                  <span className="text-4xl block mb-3">{a.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-4">{a.name}</h3>
                  <ul className="space-y-2">
                    {a.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <SectionTitle title="Annual Events" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((e) => (
                <div key={e.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900">{e.name}</h3>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{e.month}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-5">{e.desc}</p>
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
