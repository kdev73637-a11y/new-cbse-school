import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import api from "../../utils/api";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("notices");
  const [data, setData] = useState({ notices: [], admissions: [], faculty: [], results: [], contacts: [], downloads: [] });
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({});
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (!token) { router.push("/admin/login"); return; }
    setUser(JSON.parse(savedUser));
    fetchAll(token);
  }, []);

  const getToken = () => localStorage.getItem("token");

  const fetchAll = async (token) => {
    setLoading(true);
    try {
      const [notices, admissions, faculty, results, contacts, downloads] = await Promise.all([
        api.get("/notices"), api.get("/admissions"), api.get("/faculty"),
        api.get("/results"), api.get("/contact"), api.get("/downloads"),
      ]);
      setData({
        notices: notices.success ? notices.data : [],
        admissions: admissions.success ? admissions.data : [],
        faculty: faculty.success ? faculty.data : [],
        results: results.success ? results.data : [],
        contacts: contacts.success ? contacts.data : [],
        downloads: downloads.success ? downloads.data : [],
      });
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/admin/login");
  };

  const addNotice = async (e) => {
    e.preventDefault();
    const res = await api.post("/notices", form, getToken());
    if (res.success) { setForm({}); setMessage({ type: "success", text: "Notice added!" }); fetchAll(); }
    else setMessage({ type: "error", text: res.message });
  };

  const addFaculty = async (e) => {
    e.preventDefault();
    const res = await api.post("/faculty", form, getToken());
    if (res.success) { setForm({}); setMessage({ type: "success", text: "Faculty added!" }); fetchAll(); }
    else setMessage({ type: "error", text: res.message });
  };

  const addResult = async (e) => {
    e.preventDefault();
    const res = await api.post("/results", form, getToken());
    if (res.success) { setForm({}); setMessage({ type: "success", text: "Result added!" }); fetchAll(); }
    else setMessage({ type: "error", text: res.message });
  };

  const addDownload = async (e) => {
    e.preventDefault();
    const res = await api.post("/downloads", form, getToken());
    if (res.success) { setForm({}); setMessage({ type: "success", text: "Download added!" }); fetchAll(); }
    else setMessage({ type: "error", text: res.message });
  };

  const deleteItem = async (type, id) => {
    if (!confirm("Are you sure?")) return;
    const routes = { notices: `/notices/${id}`, faculty: `/faculty/${id}`, results: `/results/${id}`, downloads: `/downloads/${id}`, admissions: `/admissions/${id}`, contacts: `/contact/${id}` };
    const res = await api.delete(routes[type], getToken());
    if (res.success) fetchAll();
  };

  const updateAdmissionStatus = async (id, status) => {
    await api.put(`/admissions/${id}/status`, { status }, getToken());
    fetchAll();
  };

  const tabs = [
    { id: "notices", label: "Notices", count: data.notices.length },
    { id: "admissions", label: "Admissions", count: data.admissions.length },
    { id: "faculty", label: "Faculty", count: data.faculty.length },
    { id: "results", label: "Results", count: data.results.length },
    { id: "downloads", label: "Downloads", count: data.downloads.length },
    { id: "contacts", label: "Contacts", count: data.contacts.length },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">S</div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Admin Dashboard</h1>
              {user && <p className="text-xs text-gray-500">Welcome, {user.fullName || user.username}</p>}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-blue-700 hover:underline">View Site</Link>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition">Logout</button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => { setActiveTab(tab.id); setMessage(null); setForm({}); }}
              className={`p-4 rounded-xl text-center transition ${activeTab === tab.id ? "bg-blue-700 text-white shadow-lg" : "bg-white text-gray-700 border hover:shadow-md"}`}>
              <p className={`text-2xl font-bold ${activeTab === tab.id ? "text-white" : "text-blue-700"}`}>{tab.count}</p>
              <p className="text-xs mt-1">{tab.label}</p>
            </button>
          ))}
        </div>

        {message && (
          <div className={`mb-4 p-4 rounded-xl text-sm font-medium ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{message.text}</div>
        )}

        {loading ? <div className="text-center py-12 text-gray-500">Loading...</div> : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Forms Panel */}
            <div className="lg:col-span-1">
              {activeTab === "notices" && (
                <div className="bg-white rounded-xl p-6 border shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Add Notice</h3>
                  <form onSubmit={addNotice} className="space-y-4">
                    <input type="text" placeholder="Title" value={form.title || ""} onChange={(e) => setForm({ ...form, title: e.target.value })} required className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    <textarea placeholder="Content" value={form.content || ""} onChange={(e) => setForm({ ...form, content: e.target.value })} required rows={3} className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                    <select value={form.category || "general"} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                      <option value="general">General</option><option value="exam">Exam</option><option value="event">Event</option><option value="holiday">Holiday</option><option value="urgent">Urgent</option>
                    </select>
                    <button type="submit" className="w-full py-2.5 bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-800 transition">Add Notice</button>
                  </form>
                </div>
              )}

              {activeTab === "faculty" && (
                <div className="bg-white rounded-xl p-6 border shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Add Faculty</h3>
                  <form onSubmit={addFaculty} className="space-y-4">
                    <input type="text" placeholder="Name" value={form.name || ""} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Designation" value={form.designation || ""} onChange={(e) => setForm({ ...form, designation: e.target.value })} required className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Department" value={form.department || ""} onChange={(e) => setForm({ ...form, department: e.target.value })} required className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Qualification" value={form.qualification || ""} onChange={(e) => setForm({ ...form, qualification: e.target.value })} className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Experience (e.g., 10 years)" value={form.experience || ""} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" className="w-full py-2.5 bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-800 transition">Add Faculty</button>
                  </form>
                </div>
              )}

              {activeTab === "results" && (
                <div className="bg-white rounded-xl p-6 border shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Add Result</h3>
                  <form onSubmit={addResult} className="space-y-4">
                    <input type="text" placeholder="Title" value={form.title || ""} onChange={(e) => setForm({ ...form, title: e.target.value })} required className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Class (e.g., X, XII)" value={form.class || ""} onChange={(e) => setForm({ ...form, class: e.target.value })} required className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Session (e.g., 2025-26)" value={form.session || ""} onChange={(e) => setForm({ ...form, session: e.target.value })} required className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    <select value={form.examType || ""} onChange={(e) => setForm({ ...form, examType: e.target.value })} required className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                      <option value="">Exam Type</option><option value="midterm">Mid Term</option><option value="final">Final</option><option value="unit-test">Unit Test</option><option value="annual">Annual</option>
                    </select>
                    <button type="submit" className="w-full py-2.5 bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-800 transition">Add Result</button>
                  </form>
                </div>
              )}

              {activeTab === "downloads" && (
                <div className="bg-white rounded-xl p-6 border shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Add Download</h3>
                  <form onSubmit={addDownload} className="space-y-4">
                    <input type="text" placeholder="Title" value={form.title || ""} onChange={(e) => setForm({ ...form, title: e.target.value })} required className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Description" value={form.description || ""} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="File URL" value={form.fileUrl || ""} onChange={(e) => setForm({ ...form, fileUrl: e.target.value })} required className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                    <select value={form.category || "other"} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                      <option value="syllabus">Syllabus</option><option value="form">Form</option><option value="report">Report</option><option value="other">Other</option>
                    </select>
                    <button type="submit" className="w-full py-2.5 bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-800 transition">Add Download</button>
                  </form>
                </div>
              )}

              {(activeTab === "admissions" || activeTab === "contacts") && (
                <div className="bg-white rounded-xl p-6 border shadow-sm">
                  <h3 className="font-bold text-gray-900">{activeTab === "admissions" ? "Admissions Management" : "Contact Management"}</h3>
                  <p className="text-sm text-gray-500 mt-2">View and manage {activeTab} from the list.</p>
                </div>
              )}
            </div>

            {/* Data List Panel */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 border shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 capitalize">{activeTab}</h3>
                {data[activeTab]?.length === 0 ? (
                  <p className="text-center py-8 text-gray-400">No {activeTab} found.</p>
                ) : (
                  <div className="space-y-3 max-h-[600px] overflow-y-auto">
                    {activeTab === "notices" && data.notices.map((item) => (
                      <div key={item._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl gap-4 flex-wrap">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.category} | {new Date(item.date).toLocaleDateString()}</p>
                        </div>
                        <button onClick={() => deleteItem("notices", item._id)} className="text-red-600 text-sm hover:underline flex-shrink-0">Delete</button>
                      </div>
                    ))}

                    {activeTab === "admissions" && data.admissions.map((item) => (
                      <div key={item._id} className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                          <p className="font-medium text-gray-900">{item.studentName}</p>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${item.status === "pending" ? "bg-yellow-100 text-yellow-700" : item.status === "approved" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>{item.status}</span>
                        </div>
                        <p className="text-xs text-gray-500">Parent: {item.parentName} | Class: {item.classApplyingFor} | {item.phone}</p>
                        <div className="flex gap-2 mt-2">
                          <button onClick={() => updateAdmissionStatus(item._id, "reviewed")} className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200">Review</button>
                          <button onClick={() => updateAdmissionStatus(item._id, "approved")} className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200">Approve</button>
                          <button onClick={() => updateAdmissionStatus(item._id, "rejected")} className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200">Reject</button>
                          <button onClick={() => deleteItem("admissions", item._id)} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">Delete</button>
                        </div>
                      </div>
                    ))}

                    {activeTab === "faculty" && data.faculty.map((item) => (
                      <div key={item._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl gap-4 flex-wrap">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.designation} | {item.department}</p>
                        </div>
                        <button onClick={() => deleteItem("faculty", item._id)} className="text-red-600 text-sm hover:underline flex-shrink-0">Delete</button>
                      </div>
                    ))}

                    {activeTab === "results" && data.results.map((item) => (
                      <div key={item._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl gap-4 flex-wrap">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900">{item.title}</p>
                          <p className="text-xs text-gray-500">Class {item.class} | {item.session} | {item.examType}</p>
                        </div>
                        <button onClick={() => deleteItem("results", item._id)} className="text-red-600 text-sm hover:underline flex-shrink-0">Delete</button>
                      </div>
                    ))}

                    {activeTab === "downloads" && data.downloads.map((item) => (
                      <div key={item._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl gap-4 flex-wrap">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.category}</p>
                        </div>
                        <button onClick={() => deleteItem("downloads", item._id)} className="text-red-600 text-sm hover:underline flex-shrink-0">Delete</button>
                      </div>
                    ))}

                    {activeTab === "contacts" && data.contacts.map((item) => (
                      <div key={item._id} className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${item.isRead ? "bg-gray-100 text-gray-600" : "bg-blue-100 text-blue-700"}`}>{item.isRead ? "Read" : "New"}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-1">{item.email} | {item.subject}</p>
                        <p className="text-sm text-gray-700">{item.message}</p>
                        <button onClick={() => deleteItem("contacts", item._id)} className="text-red-600 text-sm hover:underline mt-2">Delete</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
