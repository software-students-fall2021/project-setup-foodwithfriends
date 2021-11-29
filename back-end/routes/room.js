const express = require('express');
const router = express.Router();

const Group = require("../models/group");
const { v4: uuidv4 } = require("uuid");

router.post("/room", function (req, res) {
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

router.get("/room", function (req,res) {
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
  
module.exports = router;
