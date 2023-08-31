var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// Importing the user route
const userRouter = require("./http/user/routes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Setting up the user route with a specific path
app.use("/v1.0.0/api/user", userRouter);

module.exports = app;
