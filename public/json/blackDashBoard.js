function api() {
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "6d25d00ceamshaf5d687d1dad6f5p1475c3jsn6cc98908953e"
	}
}

$.ajax(settings).done(function (response) {
	return response;
});
}

api();
