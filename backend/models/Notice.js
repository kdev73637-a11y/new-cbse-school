const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, enum: ["general", "exam", "event", "holiday", "urgent"], default: "general" },
    date: { type: Date, default: Date.now },
    attachment: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notice", noticeSchema);
