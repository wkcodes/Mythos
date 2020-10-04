// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  

  // index route loads signUpForm.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signUpForm.html"));
  });

   // index route loads mainProfilePage.html
  app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mainProfilePage.html"));
  });

  app.get("/signUp", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signUpForm.html"))
  })

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"))
  })

  app.get("/profile", function(req, res){
    res.sendFile(path.join(__dirname, "../public/profile.html"))
  })

  // blog route loads world.html
  app.get("/world", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/world.html"));
  });

};
