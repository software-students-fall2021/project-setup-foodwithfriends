const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Group = require("../models/group");

router.get("/wait", function (req, res) {
  const groupId = req.query.groupId;
  console.log("id")
  console.log(groupId)
  Group.findOne({groupId: groupId}, (err, doc) => {
      
    if (err) {
        console.log("Something wrong when finding the data");
        res.status(500);
        res.send(err);
        return;
    }
    console.log("err")
    console.log(err)
    console.log("DOC")
    console.log(doc)
    User.find({ _id: doc.friends }, (err, userDoc) => {
      if (err) {
        console.log("Something wrong when finding the data");
      }
      const friends_array = userDoc;
      const number_users = doc.friends.length;
      const total_users = doc.numOfFriends;
      res.status(200);
      res.send ( {num_users: number_users, tot_users: total_users, friends: friends_array});
      return;
    });


  });
});

module.exports = router;