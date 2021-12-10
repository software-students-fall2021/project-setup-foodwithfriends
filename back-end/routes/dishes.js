const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Group = require("../models/group");

router.post("/preferred", function (req, res) {

    const userID = req.body.userID;
    const dish = req.body.dish;
    const groupID = req.body.groupID;

    User.findOne({_id : userID} , (err, user) => {
        if (err) {
            console.log("Something went wrong");
            res.status(500);
            res.send(err);
        }

        Group.findOne({groupId: groupID}, (error, group) => {
            
            let alreadyResetRoom = group.resetRoom;
            let numInWait = group.waitCount;
            let friendsInWait = [...group.currWaitFriends];

            if (!alreadyResetRoom && numInWait > 0) {
                alreadyResetRoom = true;
                numInWait = 0;
                friendsInWait = [];
                console.log("currently resetting....");
            }

            friendsInWait.push(user.name);

            group.resetRoom = alreadyResetRoom;
            group.waitCount = numInWait + 1;
            group.currWaitFriends = friendsInWait;

            group.save((er, rs) => {
                user.dishPreferences = [...dish];
                user.save((er, rs) => {
                    res.status(200);
                    res.send({valid: true});
                })
            });
        })
    })
});

module.exports = router;
