var express = require("express");
//Import model burger.js file to use it's database functions
var burger = require("../models/burger.js");

var router = express.Router();
//Routes and logic for app
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers/create", function (req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

router.put("/api/burgers/update/:id", function (req, res) {
  var condition = req.params.id;
  burger.updateOne(
    condition, function (result) {
      console.log(result, "this is result");
      res.sendStatus(200);
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
