const express = require("express");
const routes = express();
const login = require("./login");
const signup = require("./signup");
const profile = require("./profile");

routes.use(login);
routes.use(signup);
routes.use(profile);

module.exports = routes;