// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongojs = require('mongojs');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; 

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// ==========================================

// MongoDB Configuration configuration 
var databaseUrl = 'nytreact';
var collections = ["nytreact"];

// Use mongojs to hook the database to the db variable. 
var db = mongojs(databaseUrl, collections);

db.on('error', function (err) {
  console.log('MongoDB Error: ', err);
});

// ============================================================
// Main Route which redirect to our rendered React app.
app.get('/', function(req, res){
	console.log("Loading the Index page.");
  res.sendFile('./public/index.html');
});

// ============================================================

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT:  " + PORT);
});