const express = require("express");
const { profile } = require("../controllers/profile.controller");
const route = express.Router();

route.get("/profile", profile);

module.exports = route;
