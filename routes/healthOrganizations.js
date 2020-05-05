var express = require("express");
var router = express.Router();
var routeNames = require("../controller/healthOrganizations");

router.all("/who", routeNames.who);
router.all("/cdc", routeNames.cdc);
router.all("/unicef", routeNames.unicef);
router.all("/worldbank", routeNames.worldbank);

module.exports = router;
