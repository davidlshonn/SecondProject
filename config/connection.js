// Dependencies
const Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.js');
const dbConfig = config(env);

var sequelize = new Sequelize(dbConfig);

// Exports the connection for other files to use
module.exports = sequelize;