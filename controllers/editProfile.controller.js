const { passSignupData } = require("./signup.controller");

exports.editProfile = (req, res) => {
	console.log(passSignupData());
	res.render("edit_profile", { title: "Edit profile", data: passSignupData() });
};

exports.saveEditedData = (req, res) => {
    
};
