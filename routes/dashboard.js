var express = require("express");
var router = express.Router();
var routeNames = require("../controller/dashboard");

router.all("/worldmap", routeNames.worldmap);
router.all("/usamap", routeNames.usamap);
router.all("/usaRegionDashboard", routeNames.usaRegionDashboard);
router.all("/overviewDashboard", routeNames.overviewDashboard);

module.exports = router;
