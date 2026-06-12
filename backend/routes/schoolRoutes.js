const router = require("express").Router();
const { getHomeContent, getAboutContent, getDisclosureContent } = require("../controllers/schoolController");

router.get("/home", getHomeContent);
router.get("/about", getAboutContent);
router.get("/disclosure", getDisclosureContent);

module.exports = router;
