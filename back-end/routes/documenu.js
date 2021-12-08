const express = require('express');
const router = express.Router();
const Group = require("../models/group");

const Documenu = require('documenu');
Documenu.configure(process.env.DOCUMENU_KEY);

router.get("/documenu/dishes", (req, res) => {
    const id = req.query.groupID;
    const cuisine = req.query.cuisine;
    const searchKeyWord = req.query.searchKeyword;

    Group.findOne({ groupId: id }, async (err, doc) => {
        if (err) {
            console.log("an error occured.")
            res.send({ success: false });
            return;
        }

        const location = doc.location;
        const params = {
            "lat": location.latitude,
            "lon": location.longitude,
            "distance": 5,
            "search": searchKeyWord,
            "cuisine": cuisine,
            "size": 30
        };

        let result = await Documenu.MenuItems.searchGeo(params);
        let data = [];
        for (let i = 0; i < result.data.length; i++) {
            let name = result.data[i].menu_item_name;
            name = name.substring(name.indexOf(".") + 1);
            data.push({ id: result.data[i].item_id, name: name, description: result.data[i].menu_item_description, cuisine: result.data[i].cuisines });
        }

        res.send({ success: true, data: data });
        return;
    })
});

router.get("/documenu/restaurants", async (req, res) => {
    res.send("OK");
});

module.exports = router;
