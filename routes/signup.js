const express = require("express");
const signup = express();

signup.set("view engine", "ejs");

signup.get("/signup", (req, res) => {
	res.render("signup");
});

module.exports = signup;
