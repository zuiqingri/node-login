"use strict";

//module
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//routing
const home = require("./src/routes/home");

//App setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); //user-> register middleware

module.exports = app;
