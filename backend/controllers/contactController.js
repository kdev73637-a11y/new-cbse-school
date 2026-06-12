const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ success: true, message: "Message sent successfully", data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
    if (!contact) return res.status(404).json({ success: false, message: "Contact not found" });
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.replyToContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, { reply: req.body.reply, isRead: true }, { new: true });
    if (!contact) return res.status(404).json({ success: false, message: "Contact not found" });
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
