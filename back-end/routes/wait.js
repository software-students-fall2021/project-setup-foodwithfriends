const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Group = require("../models/group");

router.get("/wait", function (req, res) {
  const groupId = req.query.groupId;

  Group.findOne({ groupId }, (err, group) => {
    if (err) {
      console.log("Something went wrong when finding the data");
      res.status(500);
      res.send(err);
      return;
    }

    const friends_array = group.currWaitFriends;
    const number_users = group.waitCount;
    const total_users = group.numOfFriends;
        
    res.status(200);
    res.send({
      num_users: number_users,
      tot_users: total_users,
      friends: friends_array,
    });

  });

});

module.exports = router;
