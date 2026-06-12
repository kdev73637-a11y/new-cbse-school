const mongoose = require("mongoose");

const downloadSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, enum: ["syllabus", "form", "report", "other"], default: "other" },
    fileUrl: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Download", downloadSchema);
