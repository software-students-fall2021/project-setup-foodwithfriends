const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Group = require("../models/group");

router.get("/win", function (req, res) {

    const groupID = req.query.groupID;
    console.log("helloooooo i am here before ");
    Group.findOne({groupId: groupId}, (err, doc) => {
        if (err) {
            console.log("Something wrong when finding the group");
            res.status(500);
            res.send(err);
            return;
        }

        console.log("here after finding group");
        const selectedCuisinesList = [...doc.selectedCuisines];
        let maxVotes = -1;
        let finalCuisine = "";
        let sameNumVotes = selectedCuisinesList[0].votes;
        let i = 0;
        while(sameNumVotes == selectedCuisinesList[i].votes && i < selectedCuisinesList.length) {
            i++;
        }
        if(i != selectedCuisinesList.length-1) {
            selectedCuisinesList.forEach((selectedCuisine) => {
                if(selectedCuisine.votes > maxVotes) {
                    maxVotes = selectedCuisine.votes;
                    finalCuisine = selectedCuisine.cuisine;
                }
            })
        }
        else {
            finalCuisine = selectedCuisinesList[parseInt(Math.random() * selectedCuisinesList.length)]
        }
        doc.winningCuisine = finalCuisine;
        doc.save;

        res.status(200);
        res.send(finalCuisine);
    });
});

module.exports = router;