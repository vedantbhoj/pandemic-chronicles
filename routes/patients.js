var express = require("express");
var router = express.Router();

var patient = require("../controller/patientController.js");

router.get("/", patient.list);
router.get("/show/:id", patient.show);
router.get("/create", patient.create);
router.post("/save", patient.save);
router.get("/edit/:id", patient.edit);
router.post("/update/:id", patient.update);
router.post("/delete/:id", patient.delete);
router.post("/search", patient.search);

module.exports = router;