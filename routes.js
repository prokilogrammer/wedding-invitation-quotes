
module.exports = function(app, db) {


    app.get('/', function(req, res, next) {

        res.render('index');

    });

}
