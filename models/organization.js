var mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
id: Number,
name: String,
description: String,
type: String,
headquarters: String,
budget: String,
focus: Array,
source: String
});

module.exports = mongoose.model("organization", OrganizationSchema);
