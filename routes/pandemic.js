var express = require("express");
var router = express.Router();
var routeNames = require("../controller/pandemic");

router.all("/ebola", routeNames.ebola);
router.all("/sars", routeNames.sars);
router.all("/mers", routeNames.mers);
router.all("/h1n1", routeNames.h1n1);
router.all("/covid19", routeNames.covid19);
router.all("/api", routeNames.api);

module.exports = router;
