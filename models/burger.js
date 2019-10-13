//Import ORM file
var orm = require("../config/orm.js");

//Create burger object
var burger = {
    //Select all the table entries
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    //Cols and vals are arrays
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    //objColVals is an object specifying columns as object keys with associated values
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
  };
  

//Export database functions for the controller (burgerController.js)
module.exports = burger;