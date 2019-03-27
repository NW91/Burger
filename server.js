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
app.use(methodOverride('_method'));

//setting handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ default: "main" }));
app.set("view engine", "handlebars");

//connects to routes files in the controller folder
var routes = require("./controllers/burgers_controller");
app.use("/", routes);

//starting the server
app.listen(PORT, function() {
    console.log("Server Listening")
});