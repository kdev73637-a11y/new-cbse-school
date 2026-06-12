const Admission = require("../models/Admission");

exports.submitAdmission = async (req, res) => {
  try {
    const admission = await Admission.create(req.body);
    res.status(201).json({
      success: true,
      message: "Admission form submitted successfully",
      data: admission,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

exports.getAllAdmissions = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const admissions = await Admission.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: admissions.length, data: admissions });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.updateAdmissionStatus = async (req, res) => {
  try {
    const admission = await Admission.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!admission) {
      return res.status(404).json({ success: false, message: "Admission not found" });
    }
    res.json({ success: true, data: admission });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.deleteAdmission = async (req, res) => {
  try {
    const admission = await Admission.findByIdAndDelete(req.params.id);
    if (!admission) {
      return res.status(404).json({ success: false, message: "Admission not found" });
    }
    res.json({ success: true, message: "Admission deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
