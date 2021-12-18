const express = require("express");
const login = express();

login.set("view engine", "ejs");

login.get("/login", (req, res) => {
	res.render("login", {title: "Login"});
});

module.exports = login;