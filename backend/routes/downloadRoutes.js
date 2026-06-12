const router = require("express").Router();
const { getAllDownloads, createDownload, updateDownload, deleteDownload } = require("../controllers/downloadController");
const { protect } = require("../middleware/auth");

router.get("/", getAllDownloads);
router.post("/", protect, createDownload);
router.put("/:id", protect, updateDownload);
router.delete("/:id", protect, deleteDownload);

module.exports = router;
