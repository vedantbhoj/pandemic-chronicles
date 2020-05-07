const express = require("express"); //using express
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://Rashmi123:Rashmi123@disasterexplore-7tsin.mongodb.net/disaster?retryWrites=true&w=majority"
  )
  .then(() => console.log("connection succesful"))
  .catch(err => console.error(err));

var index = require("./routes/index");
const PORT = 3000;

const app = express();
//View engine setup
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public")); // using CSS and images from public directory
app.use("/", index);

  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    console.log(err.message);
    console.log(res);
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });


app.use("/organization", require("./routes/organization"));
app.use("/pandemic", require("./routes/pandemic"));
app.use("/dashboard", require("./routes/dashboard"));

  module.exports = app;
  
  app.listen(PORT, () => console.log("Server started "));
  