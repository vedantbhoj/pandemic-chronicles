var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb+srv://Rashmi123:Rashmi123@disasterexplore-7tsin.mongodb.net/disaster?retryWrites=true&w=majority",{
    poolSize: 10
    // other options can go here
  },
  () => {
    console.log("connected to mongoDB");
  }
);

module.exports = { mongoose };
