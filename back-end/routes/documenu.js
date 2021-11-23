const express = require('express');
const router = express.Router();

const Documenu = require('documenu');
Documenu.configure(process.env.DOCUMENU_KEY);

router.get("/documenu", async (req, res) => {
    /* EXAMPLE
    const params = {
        "lat": "40.68919",
        "lon": "-73.992378",
        "distance": 3,
        "fullmenu": true,
        "cuisine": "italian"
    }

    let result = await Documenu.Restaurants.searchGeo(params)
        .then(response => {
            console.log(response);
            res.sendStatus(200);
        })
    */
});

module.exports = router;
