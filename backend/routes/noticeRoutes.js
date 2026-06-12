const router = require("express").Router();
const { getAllNotices, createNotice, updateNotice, deleteNotice } = require("../controllers/noticeController");
const { protect } = require("../middleware/auth");

router.get("/", getAllNotices);
router.post("/", protect, createNotice);
router.put("/:id", protect, updateNotice);
router.delete("/:id", protect, deleteNotice);

module.exports = router;
