// app.js
const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const app = express();
require("./utils/database.js");

app.use(express.urlencoded({ extended: true }));
const sessionOptions = {
  secret: "secret for signing session id",
  saveUninitialized: false,
  resave: false,
};

app.use(session(sessionOptions));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send("test");
});

app.listen(8000);
