const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	bio: {
		type: String,
		default: ""
	},
	imageName: {
		type: String,
		required: true,
	},
	coverImage: {
		type: String,
		default: ""
	},
	role: {
		type: String,
		default: "User",
	},
});

const userModel = new mongoose.model("information", userSchema);

module.exports = userModel;
