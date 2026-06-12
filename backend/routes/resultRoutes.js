const router = require("express").Router();
const { getAllResults, createResult, updateResult, deleteResult } = require("../controllers/resultController");
const { protect } = require("../middleware/auth");

router.get("/", getAllResults);
router.post("/", protect, createResult);
router.put("/:id", protect, updateResult);
router.delete("/:id", protect, deleteResult);

module.exports = router;
