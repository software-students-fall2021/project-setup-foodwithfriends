const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Group = require("../models/group");

router.get("/wait", function (req, res) {
  const groupId = req.query.groupId;

  Group.findOne({ groupId: groupId }, (err, doc) => {
    if (err) {
      console.log("Something went wrong when finding the data");
      res.status(500);
      res.send(err);
      return;
    }

      User.find({ _id: doc.friends }, (err, userDoc) => {
        if (err) {
          console.log("Something went wrong when finding the data");
          res.status(500);
          res.send(err);
          return;
        }
        const friends_array = doc.currWaitFriends;
        const number_users = doc.waitCount;
        const total_users = doc.numOfFriends;
        console.log("THE FRIENDS ARRAY IS " + friends_array);
        res.status(200);
        res.send({
          num_users: number_users,
          tot_users: total_users,
          friends: friends_array,
        });
      });
    
  });
});

module.exports = router;
