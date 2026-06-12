import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import AdmissionForm from "../components/AdmissionForm";

export default function Admissions() {
  const steps = [
    { step: 1, title: "Fill Application", desc: "Complete the online application form below" },
    { step: 2, title: "Document Submission", desc: "Submit required documents at the school office" },
    { step: 3, title: "Interaction", desc: "Attend the parent-student interaction session" },
    { step: 4, title: "Admission Confirmation", desc: "Receive confirmation and complete fee payment" },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Admissions 2026-27" subtitle="Join our school family — limited seats available" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Admission Process" subtitle="Simple 4-step process" align="center" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {steps.map((s) => (
                <div key={s.step} className="relative bg-white rounded-xl p-6 border-2 border-blue-100 text-center hover:border-blue-300 transition">
                  <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply Online</h3>
                <AdmissionForm />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
                <ul className="space-y-3">
                  {[
                    "Birth Certificate (Original + Photocopy)",
                    "Transfer Certificate from previous school",
                    "Report Card of last 2 years",
                    "4 Passport-size photographs",
                    "Aadhaar Card (Student & Parents)",
                    "Address Proof",
                    "Caste Certificate (if applicable)",
                    "Medical Fitness Certificate",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {doc}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h4 className="font-bold text-amber-800 mb-2">Important Note</h4>
                  <p className="text-sm text-amber-700 leading-6">
                    Admissions are subject to seat availability. Please contact the school office for the latest status. All admissions are provisional and subject to verification of documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
