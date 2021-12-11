const express = require('express');
const router = express.Router();
const Group = require("../models/group");

router.get("/win", function (req, res) {
    const groupId = req.query.groupId;
    Group.findOne({ groupId }, (err, doc) => {
        if (err) {
            console.log("Something wrong when finding the group");
            res.status(500);
            res.send(err);
            return;
        }

        if (!!doc.winningCuisine) {
            res.status(200);
            res.send({ finalCuisine: doc.winningCuisine });
            return;
        }

        const selectedCuisinesList = [...doc.selectedCuisines];
        let maxVotes = -1;
        let finalCuisine = "";
        let sameNumVotes = selectedCuisinesList[0].votes;
        let i = 0;
        while(i < selectedCuisinesList.length && sameNumVotes == selectedCuisinesList[i].votes) {
            i++;
        }
        if(i != selectedCuisinesList.length) {
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

        doc.winningCuisine = finalCuisine.cuisine;
        doc.save(((err, doc) => {
            res.status(200);
            res.send({ finalCuisine: finalCuisine.cuisine });
        }));
    });
});

module.exports = router;
