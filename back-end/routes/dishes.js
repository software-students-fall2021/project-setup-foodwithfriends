const express = require('express');
const router = express.Router();
const User = require("../models/user");

router.post("/preferred", function (req, res) {

    const userID = req.body.userID;
    const dish = req.body.dish;
    console.log(userID);
    console.log(dish);
    User.findOneAndUpdate({_id: userID},{$push:{ dishPreferences: dish}},(err, doc) => {
        if (err) {
            console.log("Something wrong when finding the group");
            res.status(500);
            res.send(err);
            return;
        }
        res.status(200);
        res.send({valid: true});
    });
});

module.exports = router;
