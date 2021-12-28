const express = require("express");
const { signup, signupData, upload } = require("../controllers/signup.controller");
const route = express.Router();

route.get("/signup", signup);
route.post("/signup", upload.single("profile"), signupData);

module.exports = route;
