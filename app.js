//app.js
var express = require('express');
var app = express();
var db = require("./db");
module.exports = app;
//mapping the /users to use the CRUD methods of UserController
var UserController = require('./UserController');
app.use('/users', UserController);