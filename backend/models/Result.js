const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    class: { type: String, required: true },
    session: { type: String, required: true },
    examType: { type: String, enum: ["midterm", "final", "unit-test", "annual"], required: true },
    description: { type: String },
    fileUrl: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);
