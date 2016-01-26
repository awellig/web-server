/*
 * MY FIRST EXPRESS SERVER
 */ 

var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

// (1) Instantiate my middleware object
var middleware = require('./myMiddleware.js');

// Specify middleware on the TOP!
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// /about --> Needs authentication = 2nd argument
app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('Author: Armin Wellig');
});

// Serve static web site
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () { 
    console.log("Express server is running on port: " + PORT);
});



/*
 * 
 */ 

// Root --> index.html is by default
/*app.get('/', function (req, res) { 
    res.send('pippo')
});*/
