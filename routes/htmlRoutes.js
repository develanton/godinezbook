var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.godinez.findAll({}).then(function(results) {
      res.render("profile", {
        msg: "Welcome!",
        godinez: results
      });
      console.log(results);
    });
  });

  // Load example page and pass in an example by id
  app.get("/personalinfo/:id", function (req, res) {
    db.godinezbook.findOne({ where: { id: req.params.id } }).then(function (personalInformation) {
      res.render("personalinfopage", {
        personalinfopage: personalInformation
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
