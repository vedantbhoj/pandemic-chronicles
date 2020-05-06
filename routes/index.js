var express = require("express");
var router = express.Router();
var ctrlMain = require("../controller/main");

/*
 * GET home page.
 */
router.get("/", ctrlMain.get_index);

/*
 * GET DASH page.
 */
router.get("/dashboard", ctrlMain.get_dashboard);

/*
 * GET BLACK DASH page.
 */
router.get("/blackdashboard", ctrlMain.get_blackdashboard);

module.exports = router;
  