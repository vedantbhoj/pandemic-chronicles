/*
 * GET Index Page
 */
module.exports.get_index = function (req, res) {
    res.render('index');
};

/*
 * GET DashBoard Page
 */
module.exports.get_dashboard = function (req, res) {
    res.render('dashboard');
};

/*
 * GET BlackDashBoard Page
 */
module.exports.get_blackdashboard = function (req, res) {
    res.render('blackdashboard');
};

