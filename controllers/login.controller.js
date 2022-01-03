const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const multer = require("multer");
const userModel = require("../models/user.model");

exports.login = (req, res) => {
	res.render("login", { title: "Login" });
};

exports.loginData = async (req, res) => {
	const { usernameOrEmail, password } = req.body;
	let email, username, data;
	// return true or false for the find result
	const identify = /@/.test(usernameOrEmail);
	if (identify) {
		email = usernameOrEmail;
		data = await userModel.find({ email: email });
	} else {
		username = usernameOrEmail;
		data = await userModel.find({ username: username });
	}
	if (data[0]) {
		const match = await bcrypt.compare(password, data[0].password);
		if (!match) {
			res.render("login", {
				title: "Log in",
				msg: "Invalid password or Username",
			});
		} else {
			res.render("Profile", { title: "Profile", data: data[0] });
		}
	} else {
		res.send(`Login failed! Invalid password or email.`);
	}
};
