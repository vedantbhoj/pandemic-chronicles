var Organization = require("../models/organization.js");

module.exports.who = function(req, res) {
  Organization.find({id:1}).exec(function(err, organization) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("./test", {data: organization[0]});
    }
  });
};

module.exports.cdc = function(req, res) {
  Organization.find({id:2}).exec(function(err, organization) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("./organization", { organization: organization });
    }
  });
};

module.exports.unicef = function(req, res) {
  Organization.find({id:3}).exec(function(err, organization) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("./organization", { organization: organization });
    }
  });
};

module.exports.worldbank = function(req, res) {
  Organization.find({id:4}).exec(function(err, organization) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("./organization", { organization: organization });
    }
  });
};
