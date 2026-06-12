import { useState } from "react";
import api from "../utils/api";

export default function AdmissionForm() {
  const [form, setForm] = useState({ studentName: "", parentName: "", classApplyingFor: "", phone: "", email: "", address: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await api.post("/admissions", form);
      if (res.success) {
        setMessage({ type: "success", text: res.message });
        setForm({ studentName: "", parentName: "", classApplyingFor: "", phone: "", email: "", address: "", message: "" });
      } else {
        setMessage({ type: "error", text: res.message || "Something went wrong" });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    }
    setLoading(false);
  };

  const classes = ["Nursery", "LKG", "UKG", "Class I", "Class II", "Class III", "Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Class IX", "Class X", "Class XI", "Class XII"];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {message && (
        <div className={`p-4 rounded-xl text-sm font-medium ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {message.text}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Student Name *</label>
          <input type="text" name="studentName" value={form.studentName} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Enter student name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Parent Name *</label>
          <input type="text" name="parentName" value={form.parentName} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Enter parent name" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Class Applying For *</label>
          <select name="classApplyingFor" value={form.classApplyingFor} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white">
            <option value="">Select Class</option>
            {classes.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Enter phone number" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Enter email" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input type="text" name="address" value={form.address} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Enter address" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none" placeholder="Any additional message..." />
      </div>

      <button type="submit" disabled={loading} className="w-full md:w-auto px-8 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-200">
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
