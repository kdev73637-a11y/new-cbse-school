const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    department: { type: String, required: true },
    qualification: { type: String },
    experience: { type: String },
    photo: { type: String },
    email: { type: String },
    phone: { type: String },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faculty", facultySchema);
