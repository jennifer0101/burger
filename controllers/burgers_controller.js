var express = require("express");
//Import model burger.js file to use it's database functions
var burger = require("../models/burger.js");

var router = express.Router();
//Routes and logic for app
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      //console.log("hbsObject", hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers/create", function(req, res) {
    //console.log("REQ.BODY", req.body);
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.redirect("/");
    });
  });
  
  router.put("/api/burgers/update/:id", function(req, res) {
    console.log("looking for this", req.params, req.body.devoured);
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    res.redirect("/");
  
  //   burger.updateOne({
  //    devoured: req.body.devoured
  //  }, condition, function(result) {
  //    if (result.changedRows == 0) {
  //      // If no rows were changed, then the ID must not exist, so 404
  //      return res.status(404).end();
  //    } else {
  //      res.status(200).end();
  //    }
  //  });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  