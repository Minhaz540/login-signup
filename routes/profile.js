const express = require("express");
const profile = express();

profile.set("view engine", "ejs");

profile.get("/profile", (req, res) => {
	res.render("profile", {title: "Profile"});
});

module.exports = profile;
