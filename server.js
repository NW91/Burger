require("dotenv").config();

var methodOverride = require("method-override")
var express = require("express")

//setting up the port
var PORT = process.env.PORT || 8080;

var app = express();

//setting up static content for the app using the public directory
app.use(express.static("public"));

//express middleware body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());