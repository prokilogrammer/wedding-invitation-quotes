var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    serveStatic = require('serve-static');

var settings = require('./settings'),
    db = require('./db')();

var app = express();
app.use(bodyParser.json());

app.use(serveStatic(path.join(__dirname,'www/static'), {
        cacheControl: false,
     }));

app.set('view engine', 'jade');
app.set("views", "www/views"); 

app.get('/ping', function(req, res){ res.send(200); });

var router = express.Router();
require('./routes')(router, db);
app.use('/', router);

app.listen(settings.port, function() {
    console.log("app started")

});
