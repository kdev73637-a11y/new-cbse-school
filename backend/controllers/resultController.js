const Result = require("../models/Result");

exports.getAllResults = async (req, res) => {
  try {
    const { class: className, examType } = req.query;
    const filter = { isActive: true, ...(className && { class: className }), ...(examType && { examType }) };
    const results = await Result.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: results.length, data: results });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.createResult = async (req, res) => {
  try {
    const result = await Result.create(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

exports.updateResult = async (req, res) => {
  try {
    const result = await Result.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!result) return res.status(404).json({ success: false, message: "Result not found" });
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.deleteResult = async (req, res) => {
  try {
    const result = await Result.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!result) return res.status(404).json({ success: false, message: "Result not found" });
    res.json({ success: true, message: "Result removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
