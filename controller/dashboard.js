module.exports.worldmap = function(req, res) {
      res.render("./worldmap");
};

module.exports.usamap = function(req, res) {
  res.render("./usamap");
};

module.exports.usaRegionDashboard = function(req, res) {
  res.render("./usaRegionDashboard");
};

module.exports.overviewDashboard = function(req, res) {
  res.render("./overviewDashboard");
};

module.exports.overviewDashboardApi = function(req, res) {

  var request = require("request");

var options = {
  method: 'GET',
  url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
  headers: {
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': '6d25d00ceamshaf5d687d1dad6f5p1475c3jsn6cc98908953e',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

  res.send(body);
});
  
};