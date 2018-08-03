const express = require('express');
const jwt = require('jsonwebtoken');
var db = require("../models");
const app = express();

module.exports = function (app) {
  app.post('/api/posts',function(req, res, next){
    const bearerHeader = req.headers['authorization'];  
    if (typeof bearerHeader !== 'undefined') {
      req.token = bearerHeader;

      jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
         res.redirect("/login");
        } else {
          console.log("TOKEN VALIDO");
          req.user=authData;
         next();
        }
        
      });

    } else {
      res.redirect("/login");
    }

  }, (req, res)=>{
    console.log("NEXT2");
  }

);

  app.post('/api/login', (req, res) => {
<<<<<<< HEAD
    db.users.findOne({ where: { nombre: req.body.email } }).then(project => {
=======
    db.users.findOne({ where: { email: req.body.email } }).then(project => {
>>>>>>> abes
      // project will be the first entry of the Projects table with the title 'aProject' || null
      if (project == null) {
        console.log("No existe nombre de usuario")
        return res.json({
          mensaje: 'USUARIO'
        });

      } else {
        const user = {
          id: project.id,
<<<<<<< HEAD
          name: req.body.name,
          last: req.body.last,
          email: req.body.email,
          password: req.body.password,
          birthday: req.body.birthday,
          gender: req.body.gender
=======
          email: req.body.email,
          username: project.nombre,
          password: req.body.password
>>>>>>> abes
        }



        if (req.body.password == project.password) {
          jwt.sign({ user }, 'secretkey', { expiresIn: '3600s' }, (err, token) => {
            res.json({
              token: token,
              id: user.id,
              name: user.username

            });

            console.log("ESTE ES!!  " + token);
          });
        } else {
          console.log("No Coinicide Password");
       
        }
      }
    })
    // console.log(JSON.stringify(req.body));

  });


  app.post('/api/check', function(req, res, next) {
    // Get auth header value]
    const bearerHeader = req.body.session;
    console.log("EMPIEZA");
    console.log(bearerHeader );
    console.log(" TERMINA");
    if (typeof bearerHeader !== 'undefined') {
      req.token = bearerHeader;
      next();
    } else {
      res.json({
        message: 'Denegado'
      });
    }
  }, (req, res, next) => {
    console.log(req.token);
    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if (err) {
        res.json({
          message: 'Denegado'
        });
      } else {
        res.json({
          message: 'Post created...',
          authData
        });
       next();
      }
      
    });
  }, (req, res)=>{
    console.log("NEXT2");
  }

);

app.post("/api/messagePost", function(req, res) {
  db.wall.create(req.body).then(function(dbExample) {
    res.json(dbExample);
    
  });
});

app.post("/api/addTanda", function(req, res) {
  db.tanda.create(req.body).then(function(dbExample) {
    res.json(dbExample);
    
  });
});


app.post("/api/registerUser", function(req, res) {
<<<<<<< HEAD
  db.users.findOne({ where: { name: req.body.name } }).then(project =>{
=======
  db.users.findOne({ where: { email: req.body.email } }).then(project =>{
>>>>>>> abes
    if (project == null) {
      db.users.create(req.body).then(function() {
        return res.json({
          mensaje: 'AGREGADO'
        });
      });

    } else {
      return res.json({
        mensaje: 'USUARIO'
      });
      
    }
  });
});


};





