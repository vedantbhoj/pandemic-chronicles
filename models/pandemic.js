var mongoose = require("mongoose");

const PandemicSchema = new mongoose.Schema({
//Schema parameters
});

var Pandemics = mongoose.model("pandemics", PandemicSchema);

module.exports = { Pandemics };
