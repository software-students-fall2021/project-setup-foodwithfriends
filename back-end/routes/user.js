const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Group = require("../models/group");

router.post("/user", function (req, res) {
    const name = req.body.userName;
    const id = req.body.groupID;
    const newUser = new User({groupId:id, name: name, selectedPreferences:false, dishPreferences: []});

    newUser.save((err, result) => {
      if (err) {
        // console.log(err);
        res.status(500);
        res.send({ success: false });
        return;
      }
    //   console.log(result);
      Group.findOneAndUpdate({groupId: id}, {$addToSet: {friends: newUser}}, {new: true}, (err, doc) => {
        if (err) {
            // console.log("Something wrong when updating the data");
            res.status(500);
            res.send({ success: false });
            return
        }
        // console.log(doc);
        res.status(200);
        res.send({ success: true , userID: result._id});
      });
    })
});

module.exports = router;
