var db = require("../models");
const jwt = require('jsonwebtoken');


module.exports = function (app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("landing", {
        msg2: "Welcome!"
      });
    });

  });

  app.get("/register_real", function (req, res) {
    res.render("register_real", {
      msg2: "FORMA DE REGISTRO"
    });

  });


  app.get("/welcome", function (req, res) {
    res.render("welcome", {
      msg2: "Welcome! jaja"
    });

  });
  app.get("/wall", function (req, res) {
    db.wall.findAll({
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['id', 'DESC']]
    }).then(function (messages) {
      console.log((messages));
      res.render("wall", {
        examples: messages
        
      });
      
    });
  });

  app.get("/tanda", function(req, res) {
    db.tanda.findAll({order: [
      // Will escape title and validate DESC against a list of valid direction parameters
      ['id', 'DESC']]}).then(function(tandas) {
      console.log(tandas);
      res.render("tanda", {
        examples: tandas
        
      });

    });
  });


  app.get("/login", function (req, res) {
    db.users.findAll({}).then(function(users){
      res.render("login_full", {
        msg2: "Welcome!"
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
