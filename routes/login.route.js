const express = require("express");
const { login, loginData } = require("../controllers/login.controller");
const route = express.Router();

route.get("/login", login);

route.post("/login", loginData);

module.exports = route; 