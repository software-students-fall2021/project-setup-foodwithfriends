require('dotenv').config()
require("./utils/database.js");

const express = require("express");
const session = require("express-session");
const cors = require("cors");

const app = express();

const sessionOptions = {
  secret: "secret for signing session id",
  saveUninitialized: false,
  resave: false,
};

// routes
const roomRoutes = require("./routes/room");
const userRoutes = require("./routes/user");
const restRoutes = require("./routes/restaurant");
const documenuRoutes = require("./routes/documenu");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use(session(sessionOptions));
app.use(express.urlencoded({ extended: false }));

// route middleware
app.use(roomRoutes);
app.use(userRoutes);
app.use(restRoutes);
app.use(documenuRoutes);

const env = process.env.NODE_ENV || 'development';
const port = env === "test" ? 80 : 8000;

app.listen(port);

module.exports = app;
