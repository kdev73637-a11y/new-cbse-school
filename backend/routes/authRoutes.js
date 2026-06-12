const router = require("express").Router();
const { login, getProfile, createAdmin } = require("../controllers/authController");
const { protect } = require("../middleware/auth");

router.post("/login", login);
router.get("/profile", protect, getProfile);
router.post("/create-admin", createAdmin);

module.exports = router;
