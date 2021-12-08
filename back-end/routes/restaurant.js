const express = require('express');
const router = express.Router();
const Documenu = require('documenu');
const Group = require("../models/group");
Documenu.configure(process.env.DOCUMENU_KEY);

router.get("/restaurants", async function (req, res) {
    const id = req.query.groupID;
    const cuisine = 'American';
    const searchKeyWord = req.query.searchKeyword;
    const dishes = req.query.dishes;

    const { location, priceRange, winningCuisine } = await Group.findOne({ groupId: id });

    let totalRestaurants = [];

    for (let i=1; i<2; i++) {
        const params = {
            "lat": location.latitude,
            "lon": location.longitude,
            "distance": 5,
            "page": i,
            "size": 100
        };
        let response = await Documenu.Restaurants.searchGeo(params);
        response.data.forEach((restaurant) => {
            totalRestaurants.push(restaurant);
        })
    }

    const filteredRestaurants = totalRestaurants.filter((restaurant) => {
        return (restaurant.price_range === priceRange && check_cuisines(restaurant.cuisines, cuisine));
    });

    res.status(200);
    res.send({ success: true, data: filteredRestaurants });
});

router.get("/restaurants/:restaurantId", async (req, res) => {
    try {
        const { restaurantId } = req.params;
        const response = await Documenu.Restaurants.get(restaurantId);
        res.status(200);
        res.send({ restaurant: response.result })
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
