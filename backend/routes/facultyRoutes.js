const router = require("express").Router();
const { getAllFaculty, createFaculty, updateFaculty, deleteFaculty } = require("../controllers/facultyController");
const { protect } = require("../middleware/auth");

router.get("/", getAllFaculty);
router.post("/", protect, createFaculty);
router.put("/:id", protect, updateFaculty);
router.delete("/:id", protect, deleteFaculty);

module.exports = router;
