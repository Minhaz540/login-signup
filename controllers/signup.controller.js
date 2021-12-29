const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const { unlink } = require("fs");
const userModel = require("../models/user.model");

const { UPLOAD_FOLDER } = process.env;
let imageName;

exports.signup = (req, res) => {
	res.render("signup", { title: "Signup" });
};

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, UPLOAD_FOLDER);
	},
	filename: (req, file, callback) => {
		let extName = path.extname(file.originalname);
		let fileName =
			file.originalname
				.replace(extName, "")
				.toLowerCase()
				.split(" ")
				.join("-") +
			"-" +
			Date.now();
		imageName = fileName + extName;
		callback(null, imageName);
	},
});

exports.upload = multer({
	storage: storage,
	limits: {
		fileSize: 10000000,
	},
	fileFilter: (req, file, callback) => {
		if (file.fieldname === "profile") {
			if (
				file.mimetype === "image/png" ||
				file.mimetype === "image/jpg" ||
				file.mimetype === "image/jpeg"
			) {
				callback(null, true);
			} else {
				callback(
					new Error("Only png, jpg and jpeg formats are acceptable")
				);
			}
		} else {
			callback(new Error("Upload failed"));
		}
	},
});

exports.signupData = async (req, res) => {
	const role = "User";
	const saltRounds = 5;
	let hashedPassword;
	const { username, email, password, confirmPassword } = req.body;
	hashedPassword = await bcrypt.hash(password, saltRounds);
	const checkData = await userModel.find({
		username: username,
		email: email,
	});
	if (password === confirmPassword && !checkData[0]) {
		const formSaveData = new userModel({
			username,
			email,
			password: hashedPassword,
			imageName,
			role,
		});
		formSaveData.save((err) => {
			if (err) {
				res.status(500).send("Internal server error: " + err);
				// deleting unused file
				unlink(
					path.join(__dirname, `../public/upload/${imageName}`),
					(err) => {
						if (err) console.error(err);
					}
				);
			} else {
				res.render("profile", {
					title: "Profile",
					username,
					email,
					imageName,
					role,
				});
			}
		});
	} else {
		res.send("User already available or same password does not matched");
		// deleting unused file
		unlink(path.join(__dirname, `../public/upload/${imageName}`), (err) => {
			if (err) console.error(err);
		});
	}
};
