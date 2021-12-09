const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Group = require("../models/group");

router.post("/preferred", function (req, res) {

    const userID = req.body.userID;
    const dish = req.body.dish;
    const skip = req.body.skip;
    const groupID = req.body.groupID;

    if(skip){
        User.findOneAndUpdate({_id: userID}, {$set:{selectedPreferences: true}},(err, doc) => {
            if (err) {
                console.log("Something wrong when finding the group");
                res.status(500);
                res.send(err);
                return;
            }

            Group.updateOne({groupId: groupID}, {
                $inc: {waitCount: 1},
                $push:{currWaitFriends: doc.name}
            }, (err, doc) => {

                res.status(200);
                res.send({valid: true});
            })

        });

    }
    else {
        User.findOneAndUpdate({_id: userID},{$push:{ dishPreferences: dish}}, {$set:{selectedPreferences: true}},(err, doc) => {
            if (err) {
                console.log("Something wrong when finding the group");
                res.status(500);
                res.send(err);
                return;
            }
                       
            Group.updateOne({groupId: groupID}, {
                $inc: {waitCount: 1},
                $push:{currWaitFriends: doc.name}
            }, (err, doc) => {

                res.status(200);
                res.send({valid: true});
            })
        });
    }
});

module.exports = router;
