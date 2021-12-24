"use strict";

//module
const express = require("express");
const app = express();

//routing
const home = require("./routes/home");

//App setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //user-> register middleware

module.exports = app;
