var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");



var PORT = process.env.PORT || 8080;



//Serve static content from the "public" directory
app.use(express.static(path.join(__dirname + "/public")));

//Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});