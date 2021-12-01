const express = require('express');
const router = express.Router();
const Group = require("../models/group");

router.post("/random", function (req, res) {

    //Request contains {name, groupID} ==> POST: req.body.name, GET: req.query.name
    const groupId = req.body.groupId;
    const cuisine = req.body.choice;

    Group.findOne({groupId: groupId}, (err, doc) => {
        if (err) {
            console.log("Something wrong when finding the group");
            res.status(500);
            res.send(err);
            return;
        }
    
       const count = doc.selectedCuisines.find((selectedCuisine) => {return cuisine == selectedCuisine.cuisine});

       //{$inc: {votes: 1}}
       if(count){ //if count is defined
        console.log(cuisine);
        console.log('COUNT IS DEFINED');
        // Group.findOne({groupId: groupId, "selectedCuisines.cuisine": cuisine}, (err, doc) => {
        //     console.log("THE DOCUENT");
        //     console.log(doc);
        // });
        // Group.findOneAndUpdate({groupId: groupId, "selectedCuisines.cuisine": cuisine}, {votes:20});
        //{$inc: {"selectedCuisines.$.votes": 1}}

        // INCREMENT COUNT MANUALLY
        const newSelectedCuisines = [...doc.selectedCuisines];
        newSelectedCuisines.forEach((selectedCuisine, index) => {
            if(selectedCuisine.cuisine === cuisine){
                console.log("FOUND IT");
                selectedCuisine.votes += 1;
            }
        })
        console.log(newSelectedCuisines);
        Group.updateOne({groupId: groupId}, {
            $set: {selectedCuisines: newSelectedCuisines}
        }, (err, doc) => {
            console.log(groupId);
            console.log(doc);
            console.log(doc.selectedCuisine);
        })

       }
       else{ //if count is undefined
        const newSelectedCuisines = [...doc.selectedCuisines];
        newSelectedCuisines.push({cuisine: cuisine, votes: 1 });
        console.log(newSelectedCuisines);
        Group.updateOne({groupId: groupId}, {
            $set: {selectedCuisines: newSelectedCuisines}
        }, (err, doc) => {
            console.log(groupId);
            console.log(doc);
            console.log(doc.selectedCuisine);
        })
        // doc.update({selectedCuisine: cuisine}, {$addToSet: {votes: 1}}, {new: true});
       }


        res.status(200);
        res.send('hello');

    });
});

module.exports = router;
