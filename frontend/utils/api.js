const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const api = {
  get: async (url) => {
    const res = await fetch(`${API_BASE}${url}`);
    return res.json();
  },
  post: async (url, data, token = null) => {
    const headers = { "Content-Type": "application/json", ...(token && { Authorization: `Bearer ${token}` }) };
    const res = await fetch(`${API_BASE}${url}`, { method: "POST", headers, body: JSON.stringify(data) });
    return res.json();
  },
  put: async (url, data, token) => {
    const res = await fetch(`${API_BASE}${url}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
    return res.json();
  },
  delete: async (url, token) => {
    const res = await fetch(`${API_BASE}${url}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  },
};

export default api;
