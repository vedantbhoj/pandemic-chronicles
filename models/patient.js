var mongoose = require("mongoose");

var newConnection = mongoose.createConnection("mongodb+srv://Rashmi123:Rashmi123@disasterexplore-7tsin.mongodb.net/test?retryWrites=true&w=majority");

var PatientSchema = new mongoose.Schema({
  id: Number,
  ObservationDate: Date,
  Province: String,
  Country: String,
  City: String,
  Confirmed: Number,
  Deaths: Number,
  Recovered: Number,
  updated_at: { type: Date, default: Date.now }
});

module.exports = newConnection.model("patient", PatientSchema);

