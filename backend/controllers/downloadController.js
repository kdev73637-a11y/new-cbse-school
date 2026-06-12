const Download = require("../models/Download");
const upload = require("../config/storage");

exports.getAllDownloads = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = { isActive: true, ...(category && { category }) };
    const downloads = await Download.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: downloads.length, data: downloads });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.createDownload = async (req, res) => {
  try {
    const download = await Download.create(req.body);
    res.status(201).json({ success: true, data: download });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

exports.updateDownload = async (req, res) => {
  try {
    const download = await Download.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!download) return res.status(404).json({ success: false, message: "Download not found" });
    res.json({ success: true, data: download });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.deleteDownload = async (req, res) => {
  try {
    const download = await Download.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!download) return res.status(404).json({ success: false, message: "Download not found" });
    res.json({ success: true, message: "Download removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
