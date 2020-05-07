const mongoose = require("mongoose");
var Patient = require("../models/patient");
var patientController = {};

patientController.list = function(req, res) {
  Patient.find({}).exec(function(err, patient) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("./patients/index", { patient: patient , name: "Admin"});
    }
  });
};
patientController.show = function(req, res) {
  Patient.findOne({ _id: req.params.id }).exec(function(err, patient) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("./patients/displayData", { patient: patient, name: "Admin" });
    }
  });
};
patientController.create = function(req, res) {
  res.render("./patients/addPatient", {name: "Admin"});
};
patientController.save = function(req, res) {
  var patient = new Patient(req.body);

  patient.save(function(err) {
    if (err) {
      console.log(err);
      res.render("./patients/addPatients");
    } else {
      console.log("Successfully added a Patient.");
      res.render("./patients/displayData", { patient: patient , name: "Admin"});
    }
  });
};
patientController.edit = function(req, res) {
  Patient.findOne({ _id: req.params.id }).exec(function(err, patient) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("./patients/editPatients", { patient: patient , name: "Admin"});
    }
  });
};
patientController.update = function(req, res) {
  Patient.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        ObservationDate: req.body.ObservationDate,
        Province: req.body.Province,
        Country: req.body.Country,
        City: req.body.City,
        Confirmed: req.body.Confirmed,
        Deaths: req.body.Deaths,
        Recovered: req.body.Recovered
      }
    },
    { new: true },
    function(err, patient) {
      if (err) {
        console.log(err);
        res.render("./patients/editPatients", { patient: req.body , name: "Admin"});
      }
      res.render("./patients/displayData", { patient: patient, name: "Admin" });
    }
  );
};
patientController.delete = function(req, res) {
  Patient.remove({ _id: req.params.id }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("patient deleted!");
      res.redirect("/patients");
    }
  });
};

patientController.search = function(req, res) {
  var regex = new RegExp(req.body.province, "i");
  Patient.find({ Province: regex }).exec(function(err, patient) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("./patients/index", { patient: patient , name: "Admin"});
    }
  });
};

module.exports = patientController;