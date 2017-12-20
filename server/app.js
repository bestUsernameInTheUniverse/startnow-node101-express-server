// import files and packages up here
var express = require('express');
var morgan = require('morgan');


// create your express server below
var app = express();

// add your routes and middleware below
app.use(morgan('dev'));

//app.use('data', express.static('/data.json'));
//import jsonData from './data.json';
var jsonData = require('./data.json');

app.get('/', function (req, res) {
    res.status(200).send("howdy").end();
});

app.get('/data', function (req, res) {
    res.status(200).json(jsonData).end();
});

// finally export the express application
module.exports = app;
