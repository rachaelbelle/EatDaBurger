var orm = require("../config/orm.js");

var burger = {
  all: function(cb_from_controller) {



    orm.all("burgers", function(results_from_orm) {

      cb_from_controller(results_from_orm);

    });




  },
  // The variables cols and vals are arrays.
  // create: function(cols, vals, cb) {
  //   orm.create("dogs", cols, vals, function(res) {
  //     cb(res);
  //   });
  // },
  // update: function(objColVals, condition, cb) {
  //   orm.update("dogs", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // },
  // delete: function(condition, cb) {
  //   orm.delete("dogs", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

module.exports = burger;
