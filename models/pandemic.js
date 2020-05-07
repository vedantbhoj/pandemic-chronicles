var mongoose = require("mongoose");

const PandemicSchema = new mongoose.Schema({
id: Number,
name: String,
description: String,
confirmed_cases: Number,
recovered_cases: Number,
death_toll: Number,
time_period: String,
countries_affected: String,
symptoms: String,
complications: String,
usual_onset: String,
specialty: String,
prevention: String,
pre_human_host: String,
treatment: String,
origin: String,
data: Array,
source: Array
});

module.exports = mongoose.model("pandemics", PandemicSchema);
