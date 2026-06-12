const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    parentName: { type: String, required: true },
    classApplyingFor: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String },
    previousSchool: { type: String },
    message: { type: String },
    status: { type: String, enum: ["pending", "reviewed", "approved", "rejected"], default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admission", admissionSchema);
