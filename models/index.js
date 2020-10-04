"use strict";

let fs = require("fs");
let path = require("path");
let Sequelize = require("sequelize");
let basename = path.basename(module.filename);
let env = process.env.CLEARDB_DATABASE_URL || "development";
let config = require(__dirname + "/../config/config.json")[env];
let db = process.env.DATABASE_URL;
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[DATABASE], process.env[USERNAME], process.env[PASSWORD], {
    host: process.env.HOST,
    dialect: mysql2
  });
} else {
  sequelize = new Sequelize(config.database , config.username, config.password, config);
}

console.log(process.env);
console.log(env.DATABASE);

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    let model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
