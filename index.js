const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
const { PORT, HOSTNAME, DB_CONNECTION_STRING } = process.env;

mongoose
	.connect(DB_CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to the database");
	})
	.catch((err) => {
		console.error("Error: " + err);
	});

app.get("/", (req, res) => {
	res.render("index");
});

mongoose.connection.on("open", () => {
	app.listen(PORT, () => {
		console.log(`server running at http://${HOSTNAME}:${PORT}`);
	});
});
