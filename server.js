// Require  ----------------------------------------------
const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname + '/public'));

/* port setup */ 
const PORT = process.env.PORT || 8080;

/* Parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* handlebar setup */ 
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes  ----------------------------------------------
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start server -----------------------------------------------------
app.listen(PORT, function () {
    console.log("Ktk startss server on: http://localhost:" + PORT);
});
