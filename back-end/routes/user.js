const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Group = require("../models/group");

router.post("/user", function (req, res) {
    req.session.groupID = "03307"; // this is temporary until Issue #73
    const name = req.body.userName;
    const newUser = new User({groupId:req.session.groupID, name: name, dishPreferences: []});
    newUser.save((err, result) => {
      if (err) {
        // console.log(err);
        res.status(500);
        res.send({ success: false });
        return;
      }
    //   console.log(result);
      Group.findOneAndUpdate({groupId: req.session.groupID}, {$addToSet: {friends: newUser}}, {new: true}, (err, doc) => {
        if (err) {
            // console.log("Something wrong when updating the data");
            res.status(500);
            res.send({ success: false });
            return
        }
        // console.log(doc);
        res.status(200);
        res.send({ success: true });
      });
    })
});

module.exports = router;
