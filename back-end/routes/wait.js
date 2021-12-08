const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Group = require("../models/group");

router.get("/wait", function (req, res) {
  const groupId = req.query.groupId;
  const waitingRoomOne = req.query.firstWaitingRoom;

  Group.findOne({ groupId: groupId }, (err, doc) => {
    if (err) {
      console.log("Something went wrong when finding the data");
      res.status(500);
      res.send(err);
      return;
    }

    if (waitingRoomOne === "true") {
      //first waiting room
      User.find({ _id: doc.friends }, (err, userDoc) => {
        if (err) {
          console.log("Something went wrong when finding the data");
          res.status(500);
          res.send(err);
          return;
        }
        const friends_array = userDoc;
        const number_users = doc.friends.length;
        const total_users = doc.numOfFriends;
        res.status(200);
        res.send({
          num_users: number_users,
          tot_users: total_users,
          friends: friends_array,
        });
        return;
      });
    } else {
      //second waiting room
      let number_users = 0;
      const total_users = doc.numOfFriends;
      User.find({ _id: doc.friends }, (err, userDoc) => {
        //count number users with selectedPreferences (skipped) or dishPreferences set
        userDoc.forEach((user, index) => {
          //if so, increment number of users by 1
          if (
            user.dishPreferences?.length > 0 ||
            user.selectedPreferences == true
          ) {
            number_users += 1;
          }
        });
        res.status(200);
        res.send({ num_users: number_users, tot_users: total_users });
      });
      return;
    }
  });
});

module.exports = router;
