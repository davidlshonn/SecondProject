const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");

const Sequelize = require("sequelize");

const app = express();

// app.get('/', (req,res) => res.send('INDEX'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server listening on port ${PORT}`));