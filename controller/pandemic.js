const mongoose = require("mongoose");
var Pandemic = require("../models/pandemic.js");

module.exports.sars = function(req, res) {
  Pandemic.find({id:4}).exec(function(err, pandemic) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("./pandemic", { pandemic: pandemic[0], data: JSON.stringify(pandemic[0].data) });
    }
  });
};

module.exports.ebola = function(req, res) {
    Pandemic.find({id:1}).exec(function(err, pandemic) {
      if (err) {
        console.log("Error:", err);
      } else {
        res.render("./pandemic", { pandemic: pandemic[0], data: JSON.stringify(pandemic[0].data) });
      }
    });
};

module.exports.mers = function(req, res) {
  Pandemic.find({id:3}).exec(function(err, pandemic) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("./pandemic", { pandemic: pandemic[0], data: JSON.stringify(pandemic[0].data) });
    }
  });
};

module.exports.h1n1 = function(req, res) {
  Pandemic.find({id:2}).exec(function(err, pandemic) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("./pandemic", { pandemic: pandemic[0], data: JSON.stringify(pandemic[0].data) });
    }
  });
};

module.exports.covid19 = function(req, res) {
  Pandemic.find({id:5}).exec(function(err, pandemic) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("./pandemic", { pandemic: pandemic[0], data: JSON.stringify(pandemic[0].data) });
    }
  });};


