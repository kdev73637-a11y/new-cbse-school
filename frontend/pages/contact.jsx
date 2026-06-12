import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import { useState } from "react";
import api from "../utils/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const res = await api.post("/contact", form);
      if (res.success) {
        setMsg({ type: "success", text: res.message });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setMsg({ type: "error", text: res.message || "Something went wrong" });
      }
    } catch {
      setMsg({ type: "error", text: "Network error. Please try again." });
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Contact Us" subtitle="We'd love to hear from you" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {msg && (
                    <div className={`p-4 rounded-xl text-sm font-medium ${msg.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {msg.text}
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Your phone" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                      <input type="text" name="subject" value={form.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Subject" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none" placeholder="Your message..." />
                  </div>
                  <button type="submit" disabled={loading} className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition disabled:opacity-50 shadow-lg shadow-blue-200">
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: "📍", label: "Address", value: "CBSE School Campus, Jharkhand, India - 834001" },
                    { icon: "📞", label: "Phone", value: "+91 XXXXXXXXXX" },
                    { icon: "✉️", label: "Email", value: "info@school.com" },
                    { icon: "⏰", label: "Office Hours", value: "Monday - Saturday, 8:00 AM - 4:00 PM" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-4">
                      <span className="text-2xl mt-1">{c.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900">{c.label}</p>
                        <p className="text-gray-600">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">How to Reach Us</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• By Bus: School buses operate on all major routes</li>
                    <li>• By Train: Nearest railway station is 5 km away</li>
                    <li>• By Air: Nearest airport is 15 km away</li>
                  </ul>
                </div>

                <div className="mt-6 bg-blue-50 rounded-xl overflow-hidden border border-blue-100 aspect-video flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <span className="text-4xl block mb-2">🗺️</span>
                    <p className="text-sm">Map will be embedded here</p>
                  </div>
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
