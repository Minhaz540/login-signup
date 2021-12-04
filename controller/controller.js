const express = require("express");
const controller = express();
const loginData = require("./loginData");
const signupData = require("./signupData");

controller.use("/loginData", loginData);
controller.use("/signupData", signupData);

module.exports = controller;