const Faculty = require("../models/Faculty");

exports.getAllFaculty = async (req, res) => {
  try {
    const { department } = req.query;
    const filter = { isActive: true, ...(department && { department }) };
    const faculty = await Faculty.find(filter).sort({ order: 1, name: 1 });
    res.json({ success: true, count: faculty.length, data: faculty });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.createFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.create(req.body);
    res.status(201).json({ success: true, data: faculty });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

exports.updateFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!faculty) return res.status(404).json({ success: false, message: "Faculty member not found" });
    res.json({ success: true, data: faculty });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.deleteFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!faculty) return res.status(404).json({ success: false, message: "Faculty member not found" });
    res.json({ success: true, message: "Faculty member removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
