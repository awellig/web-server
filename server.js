/*
 * MY FIRST EXPRESS SERVER
 */ 

var express = require('express');
var app = express();
var port = process.env.port || 3000;

// (1) Create a middleware object
var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('Private route hit!');
        next();
    },

    logger: function (req, res, next) {                
        console.log('Request: ' + req.method + ',' + req.originalUrl + ' \t@' + new Date().toUTCString());
        next();
    }
};

// Specify middleware on the TOP!
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// /about --> Needs authentication = 2nd argument
app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('Author: Armin Wellig');
});

// Serve static web site
app.use(express.static(__dirname + '/public'));

app.listen(port, function () { 
    console.log("Express server is running on port: " + port);
});



/*
 * 
 */ 

// Root --> index.html is by default
/*app.get('/', function (req, res) { 
    res.send('pippo')
});*/
