const express = require("express");
const app = express();

const session = require("express-session");
require('dotenv').config()
require("./utils/database.js");

const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const { restauraunt_rankings } = require("./utils/loss_function");

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
          res.status(404);
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
  const result = restauraunt_rankings();
  res.status(200);
  res.send(result);
});

app.post("/invite/:roomId", async function(req, res) {
  try{
    const roomId = req.body.roomId;
    let result = false;
    const response = await axios.get('https://api.mockaroo.com/api/af4d0310?count=20&key=980bdd40'); //COMMENT OUT for testing purposes (and uncomment next variable 'response')
    
    //Comment previous variable and uncomment this variable assignment to response for more detailed testing. Otherwise, API will keep calling and changing.
    
    // const response = [
    //   { id: '0' },     { id: '94' },
    //   { id: '272' },   { id: '096' },
    //   { id: '52' },    { id: '57' },
    //   { id: '994' },   { id: '74' },
    //   { id: '45536' }, { id: '04762' },
    //   { id: '39' },    { id: '5' },
    //   { id: '9516' },  { id: '045' },
    //   { id: '4' },     { id: '4' },
    //   { id: '8508' },  { id: '28998' },
    //   { id: '48740' }, { id: '7798' }
    // ];

    response.forEach(obj => {
      if (obj.id === roomId) {
        result = true
      }
    })
    res.status(200);
    res.send({ result });
  }
  catch(error) {
    res.send(error);
  }

})

app.listen(8000);
