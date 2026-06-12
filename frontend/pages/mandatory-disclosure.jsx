import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import DisclosureTable from "../components/DisclosureTable";
import { useState, useEffect } from "react";
import api from "../utils/api";

export default function MandatoryDisclosure() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/school/disclosure").then((res) => {
      if (res.success) setSections(res.data.sections);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Mandatory Disclosure" subtitle="Transparency in school information as per CBSE norms" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            {loading ? (
              <div className="text-center py-12 text-gray-500">Loading disclosure information...</div>
            ) : (
              <DisclosureTable sections={sections} />
            )}

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h4 className="font-bold text-amber-800 mb-2">Note</h4>
              <p className="text-sm text-amber-700 leading-6">
                This information is provided as per CBSE norms and is updated regularly. For any queries regarding the above information, please contact the school office.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
