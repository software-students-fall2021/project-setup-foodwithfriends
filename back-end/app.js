// app.js
const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
require("./utils/database.js");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.locals.rooms = [];

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

app.post("/room", function (req, res) {
  const roomId = uuidv4().substr(0, 5);
  const newRoom = { id: roomId, room: req.body };
  app.locals.rooms.push(newRoom);
  res.status(200);
  res.send({ roomId });
});

app.listen(8000);
