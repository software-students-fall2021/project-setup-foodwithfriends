const express = require("express");
const router = express.Router();
const Group = require("../models/group");
const { body, validationResult } = require("express-validator");

router.post(
  "/cuisine",
  body("groupId").isString(),
  body("choice").isString(),
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const groupId = req.body.groupId;
    const cuisine = req.body.choice;

    Group.findOne({ groupId: groupId }, (err, doc) => {
        if (err) {
            console.log("Something wrong when finding the group");
            res.status(500);
            res.send(err);
            return;
        }

        const count = doc.selectedCuisines.find((selectedCuisine) => { return cuisine == selectedCuisine.cuisine });

        if (count) { 
            const newSelectedCuisines = [...doc.selectedCuisines];
            newSelectedCuisines.forEach((selectedCuisine, index) => {
                if (selectedCuisine.cuisine === cuisine) {
                    selectedCuisine.votes += 1;
                }
            })

            Group.updateOne({ groupId: groupId }, {
                $set: { selectedCuisines: newSelectedCuisines }
            },)

        }
        else { 
            const newSelectedCuisines = [...doc.selectedCuisines];
            newSelectedCuisines.push({ cuisine: cuisine, votes: 1 });
            Group.updateOne({ groupId: groupId }, {
                $set: { selectedCuisines: newSelectedCuisines }
            },)

        }
        res.status(200);
        res.send({ valid: true });

    });
  }
);

module.exports = router;
