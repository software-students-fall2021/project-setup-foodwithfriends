//Import in both Group and User

//FRONT END: 
// post Request --> .post('dish')
//      Send in: {groupId: GroupId, preferredDish: dish.nam, userName: nameOfUser}



//BACK END : 
// POST Request ==> router.post('/dish') (req, res) ==>
// const groupId = req.body.groupId;
// const preferredDish = req.body.preferredDish

//Group.findOneandUpdate(groupId){
    //Find the specific user and append preferredDish to the 'dishPreference' array
    // res.send({response: true})
//}

const express = require('express');
const router = express.Router();
const Group = require("../models/group");

router.post("/preferred", function (req, res) {

    const groupId = req.body.groupId;
    const dish = req.body.dish;

    Group.findOneAndUpdate({groupId: groupId }, {$push:{ dishPreferences: dish}},(err, doc) => {
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
