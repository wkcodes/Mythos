// *****************************************************************************
//    This file is the initial starting point for the Node/Express server.
// *****************************************************************************

// *** Dependencies
// =============================================================
var express = require("express");
let session = require("express-session")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({secret: "password", resave: false, saveUninitialized: true}))

// Static directory
app.use(express.static("public"));

// View engine for handlebars/express
var exphbs = require("express-handlebars");

// Set up Handlebars for templating
// =============================================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/user-api-routes.js")(app);
require("./routes/profile-api-routes.js")(app);
require("./routes/login-api-routes.js")(app);
require("./routes/signupRoute.js")(app)

// Syncing our sequelize models and then starting our Express app
// add {force: true} back into sync function
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});