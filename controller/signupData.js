const express = require("express");
const signupData = express();
require("dotenv").config();
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const { unlink } = require("fs");
const userModel = require("../models/userSchema");

signupData.use(express.urlencoded({ extended: false }));
const { UPLOAD_FOLDER } = process.env;
let imageName;

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

const upload = multer({
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

signupData.post("/", upload.single("profile"), (req, res) => {
	const { username, email, password } = req.body;
	const formSaveData = new userModel({
		username,
		email,
		password,
		imageName,
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
			// redirected to the show profile page
		} else {
			res.render("profile", { imageName });
		}
	});
});

module.exports = signupData;
