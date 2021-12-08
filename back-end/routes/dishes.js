const express = require('express');
const router = express.Router();
const User = require("../models/user");

router.post("/preferred", function (req, res) {

    const userID = req.body.userID;
    const dish = req.body.dish;
    const skip = req.body.skip;

    if(skip){
        User.findOneAndUpdate({_id: userID}, {$set:{selectedPreferences: true}},(err, doc) => {
            if (err) {
                console.log("Something wrong when finding the group");
                res.status(500);
                res.send(err);
                return;
            }
            res.status(200);
            res.send({valid: true});
        });

    }
    else{
        User.findOneAndUpdate({_id: userID},{$push:{ dishPreferences: dish}}, {$set:{selectedPreferences: true}},(err, doc) => {
            if (err) {
                console.log("Something wrong when finding the group");
                res.status(500);
                res.send(err);
                return;
            }
            res.status(200);
            res.send({valid: true});
        });
    }
});

module.exports = router;
