const router = require("express").Router();
const { submitContact, getAllContacts, markAsRead, replyToContact, deleteContact } = require("../controllers/contactController");
const { protect } = require("../middleware/auth");

router.post("/", submitContact);
router.get("/", protect, getAllContacts);
router.put("/:id/read", protect, markAsRead);
router.put("/:id/reply", protect, replyToContact);
router.delete("/:id", protect, deleteContact);

module.exports = router;
