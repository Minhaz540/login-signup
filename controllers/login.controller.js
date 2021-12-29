const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const multer = require("multer");
const userModel = require("../models/user.model");

exports.login = (req, res) => {
	res.render("login", { title: "Login" });
};

exports.loginData = async (req, res) => {
	const { email, password } = req.body;
	const data = await userModel.find(req.body);

	if (data[0].length != 0) {
		res.render("Profile", {
			title: "Profile",
			email: data[0].email,
			password: data[0].password,
			imageName: data[0].imageName,
			username: data[0].username,
			role: data[0].role,
		});
	} else {
		res.send(`Login failed! Invalid password or email.`);
	}
};
