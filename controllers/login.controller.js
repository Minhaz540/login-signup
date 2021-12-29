const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const multer = require("multer");
const userModel = require("../models/user.model");

exports.login = (req, res) => {
	res.render("login", { title: "Login" });
};

exports.loginData = async (req, res) => {
	const {email, password} = req.body;
	const data = await userModel.find({ email: email });
	if (data[0]) {
		const match = await bcrypt.compare(password, data[0].password);
		if (!match) {
			res.send("Login failed! Invalid password or email.");
		} else {
			res.render("Profile", {
				title: "Profile",
				email: data[0].email,
				imageName: data[0].imageName,
				username: data[0].username,
				role: data[0].role,
			});
		}
		
	} else {
		res.send(`Login failed! Invalid password or email.`);
	}
};
