const Notice = require("../models/Notice");

exports.getAllNotices = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = { isActive: true, ...(category && { category }) };
    const notices = await Notice.find(filter).sort({ date: -1 }).limit(20);
    res.json({ success: true, count: notices.length, data: notices });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.createNotice = async (req, res) => {
  try {
    const notice = await Notice.create(req.body);
    res.status(201).json({ success: true, data: notice });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

exports.updateNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!notice) return res.status(404).json({ success: false, message: "Notice not found" });
    res.json({ success: true, data: notice });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!notice) return res.status(404).json({ success: false, message: "Notice not found" });
    res.json({ success: true, message: "Notice removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
