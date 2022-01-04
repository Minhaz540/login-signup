const express = require("express");
const { editProfile } = require("../controllers/editProfile.controller");
const { saveEditedData } = require("../controllers/editProfile.controller");
const route = express.Router();

route.get("/profile/edit", editProfile);
route.post("/profile/saveEditedData", saveEditedData);

module.exports = route;
