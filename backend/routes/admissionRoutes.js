const router = require("express").Router();
const { submitAdmission, getAllAdmissions, updateAdmissionStatus, deleteAdmission } = require("../controllers/admissionController");
const { protect } = require("../middleware/auth");

router.post("/", submitAdmission);
router.get("/", protect, getAllAdmissions);
router.put("/:id/status", protect, updateAdmissionStatus);
router.delete("/:id", protect, deleteAdmission);

module.exports = router;
