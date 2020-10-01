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
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mainProfilePage.html"));
  });

  // blog route loads world.html
  app.get("/world", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/world.html"));
  });

};
