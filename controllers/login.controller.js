const express = require("express");
const bcrypt = require("bcrypt");
const multer = require("multer"); 
const userModel = require("../models/user.model");

exports.login = (req, res) => {
	res.render("login", { title: "Login" }); 
};

exports.loginData = (async (req, res) => {
	const { email, password } = req.body;
	const foundUserData = await userModel.find({ email: email, password: password });
	if (!foundUserData && email !== foundUserData.email) {
		res.send("Login failed! Invalid password or email");
	} else {
		res.render("Profile",{title: "Profile", email, password, imageName: foundUserData.imageName, username: foundUserData.username, role: foundUserData.role});
	}
});

