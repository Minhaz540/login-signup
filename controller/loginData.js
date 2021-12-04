const express = require("express");
const loginData = express();
const bcrypt = require("bcrypt");
const multer = require("multer");

loginData.post("/", (req, res) => {});

module.exports = loginData;