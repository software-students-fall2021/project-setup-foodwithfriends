const express = require("express");
const app = express();

const session = require("express-session");
require('dotenv').config()
require("./utils/database.js");

const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const { restauraunt_rankings } = require("./utils/loss_function");
const restaurants = require("./data/restauraunts.json");

const User = require("./models/user");
const Group = require("./models/group");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const sessionOptions = {
  secret: "secret for signing session id",
  saveUninitialized: false,
  resave: false,
};

app.use(session(sessionOptions));
app.use(express.urlencoded({ extended: false }));

app.post("/room", function (req, res) {
  const roomId = uuidv4().substr(0, 5);
  const newGroup = new Group({groupId: roomId, groupName: req.body.name, numOfFriends: req.body.capacity, location: {latitude: req.body.latitude, longitude: req.body.longitude}, friends:[], selectedCuisines: [], winningCuisine: ""});
  newGroup.save((err, result) => {
    if (err){
        console.log(err);
    }
    else {
        console.log(result)
    }
  });
  res.status(200);
  res.send({ roomId });
});

app.post("/new-user", function (req, res) {
  req.session.groupID = "03307"; // this is temporary until Issue #73
  const name = req.body.userName;
  const newUser = new User({groupId:req.session.groupID, name: name, dishPreferences: []});
  newUser.save((err, result) => {
    if (err) {
      console.log(err);
      res.status(500);
      res.send({ success: false });
      return;
    }
    console.log(result);
    Group.findOneAndUpdate({groupId: req.session.groupID}, {$addToSet: {friends: newUser}}, {new: true}, (err, doc) => {
      if (err) {
          console.log("Something wrong when updating the data");
          res.status(500);
          res.send({ success: false });
          return
      }
      console.log(doc);
      res.status(200);
      res.send({ success: true });
    });
  })
});

app.get("/restaurants", function (req, res) {
  // const result = restauraunt_rankings();
  const result = restaurants.data;
  res.status(200);
  res.send(result);
});

app.get("/restaurants/:restaurantId", (req, res) => {
  try {
    const { restaurantId } = req.params;
    const restaurantList = restaurants.data;
    const restaurant = restaurantList.filter((restaurant) => {
      return (
        restaurant.restaurant_id === parseInt(restaurantId)
      );
    });

    res.status(200);
    res.send({ restaurant })
  } catch (err) {
    res.send(err);
  }
});

app.get("/validate-code", function (req,res) {
  const invCode = req.query.inviteCode;
  Group.find({groupId: invCode}, (err, result) => {
    if (err) {
      console.log(err);
      res.send({ valid: false, msg: "An error occured." });
      return;
    }
    console.log(result);
    if (result.length == 0) {
      res.send({ valid: false, msg: "Invalid Invite Code" });
      return;
    }
    req.session.groupID = invCode;
    res.status(200);
    res.send({ valid: true, msg: null });
  });
});

const env = process.env.NODE_ENV || 'development';
if (env === 'test') {
  process.env.PORT = '80'
}
else {
  process.env.PORT = '8000'
}

app.listen(process.env.PORT);

module.exports = app;
