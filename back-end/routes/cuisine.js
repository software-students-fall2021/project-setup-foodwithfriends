const express = require('express');
const router = express.Router();
const Group = require("../models/group");

router.post("/cuisine", function (req, res) {

    const groupId = req.body.groupId;
    const cuisine = req.body.choice;
    const friend = req.body.name;

    Group.findOne({groupId: groupId}, (err, doc) => {
        if (err) {
            console.log("Something wrong when finding the group");
            res.status(500);
            res.send(err);
            return;
        }
    
       const count = doc.selectedCuisines.find((selectedCuisine) => {return cuisine == selectedCuisine.cuisine});

       if(count){ //if count is defined
        // INCREMENT COUNT MANUALLY
        const newSelectedCuisines = [...doc.selectedCuisines];
        newSelectedCuisines.forEach((selectedCuisine, index) => {
            if(selectedCuisine.cuisine === cuisine){
                selectedCuisine.votes += 1;
            }
        })

        Group.updateOne({groupId: groupId}, {
            $set: {selectedCuisines: newSelectedCuisines},
            $inc: {waitCount: 1},
            $push:{currWaitFriends: friend}
        }, (err, doc) => {})

       }
       else{ //if count is undefined
        const newSelectedCuisines = [...doc.selectedCuisines];
        newSelectedCuisines.push({cuisine: cuisine, votes: 1 });
        Group.updateOne({groupId: groupId}, {
            $set: {selectedCuisines: newSelectedCuisines},
            $inc: {waitCount: 1},
            $push:{currWaitFriends: friend}
        }, (err, doc) => {})

       }
        res.status(200);
        res.send({valid: true});
    });
});

module.exports = router;
