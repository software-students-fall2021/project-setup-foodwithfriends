const Group = require("../models/group");

router.get("/win", function (req, res) {

    const groupID = req.query.groupID;

    Group.findOne({groupId: groupId}, (err, doc) => {
        if (err) {
            console.log("Something wrong when finding the group");
            res.status(500);
            res.send(err);
            return;
        }

        const count = doc.selectedCuisines.find((selectedCuisine) => {return cuisine == selectedCuisine.cuisine});

        if(count) {
            let maxVotes = -1;
            let finalCuisine = "";
            const selectedCuisinesList = [...doc.selectedCuisines];
            selectedCuisinesList.forEach((selectedCuisine, index) => {
                if(selectedCuisine.votes > maxVotes) {
                    maxVotes = selectedCuisine.votes;
                    finalCuisine = selectedCuisine.cuisine;
                }
            })
            Group.updateOne({groupId: groupId}, {
                $set: {winningCuisine: finalCuisine}
            },  (err, doc) => {})
        }

        res.status(200);
        res.send(finalCuisine);
    });
});

module.exports = router;