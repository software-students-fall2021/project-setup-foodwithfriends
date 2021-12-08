const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Group = require("../models/group");

router.get("/wait", function (req, res) {
  const groupId = req.query.groupId;
  const waitingRoomOne = req.query.firstWaitingRoom;

  Group.findOne({groupId: groupId}, (err, doc) => {
      
    if (err) {
        console.log("Something wrong when finding the data");
        res.status(500);
        res.send(err);
        return;
    }

    if(waitingRoomOne){
      User.find({ _id: doc.friends }, (err, userDoc) => {
        if (err) {
          console.log("Something wrong when finding the data");
          res.status(500);
          res.send(err);
          return;
        }
        const friends_array = userDoc;
        const number_users = doc.friends.length;
        const total_users = doc.numOfFriends;
        res.status(200);
        res.send ( {num_users: number_users, tot_users: total_users, friends: friends_array});
        return;
      });
    }
    else{
      let number_users = 0;
      console.log("HELLO");
      const total_users = doc.numOfFriends;
      const allUsers = [...doc.friends];
      allUsers.forEach((user, index) => {
          if(user.selectedPreferences == true){
              number_users +=1;
              console.log("HI IS THiS WORKING")
          }
      })
        res.status(200);
        res.send ( {num_users: number_users, tot_users: total_users});
        return;

    }
  });
});

module.exports = router;