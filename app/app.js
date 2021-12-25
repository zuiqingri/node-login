"use strict";

//module
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const logger = require("./src/config/logger");
dotenv.config();

const app = express();

// const accessLogStream = require("./src/config/log");

//routing
const home = require("./src/routes/home");

// const logger = require("./src/config/logger");
// logger.log("info", "Hello my frient");
// logger.info("Hello!");
// logger.error("Hello!");

//App setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny", { stream: logger.stream }));
// app.use(morgan("dev"));
// app.use(morgan("common", { stream: accessLogStream }));

app.use("/", home); //user-> register middleware

module.exports = app;
