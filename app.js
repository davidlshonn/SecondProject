const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");

const Sequelize = require("sequelize");

// Database
const db = require("./config/connection.js");

const app = express();

// Set static folder
app,use(express.static("public"));

// Body parser
app.use(bodyParser.urlencoded({extended: false}));

// Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/jobs_controller.js");

// Jobs routes
app.use("/", routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server listening on port ${PORT}`));