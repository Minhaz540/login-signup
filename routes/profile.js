const express = require("express");
const profile = express();

profile.set("view engine", "ejs");

profile.get("/profile", (req, res) => {
	res.render("profile");
});

module.exports = profile;
