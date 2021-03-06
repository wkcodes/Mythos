// *****************************************************************************
//    This file is the initial starting point for the Node/Express server.
// *****************************************************************************

// *** Dependencies
// =============================================================
var express = require("express");
let session = require("express-session")
const passport = require("./config/passport");
const path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({secret: "password", resave: false, saveUninitialized: true}));
// Configure express to use passport for user login status
app.use(passport.initialize());
app.use(passport.session());

// Middleware that looks for files that match a route 
app.use(express.static("client/build"));

// Routes
// =============================================================
require("./routes/user-api-routes.js")(app);
require("./routes/profile-api-routes.js")(app);
require("./routes/login-api-routes.js")(app);
require("./routes/signupRoute.js")(app)

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// Syncing our sequelize models and then starting our Express app
// add {force: true} back into sync function
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});