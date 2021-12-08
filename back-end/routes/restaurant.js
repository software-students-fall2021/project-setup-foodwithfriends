const express = require('express');
const router = express.Router();
const Documenu = require('documenu');
const Group = require("../models/group");
const { check_cuisines, check_dishes } = require('../utils/loss_function');
Documenu.configure(process.env.DOCUMENU_KEY);

router.get("/restaurants", async function (req, res) {
    const id = req.query.groupID;
    const cuisine = 'American';

    const { location, priceRange, winningCuisine } = await Group.findOne({ groupId: id });

    let totalRestaurants = [];

    for (let i=1; i<2; i++) {
        const params = {
            "lat": location.latitude,
            "lon": location.longitude,
            "distance": 5,
            "page": i,
            "size": 50
        };
        let response = await Documenu.Restaurants.searchGeo(params);
        response.data.forEach((restaurant) => {
          console.log(restaurant);
          totalRestaurants.push(restaurant);
        })
    }

    const filteredRestaurants = totalRestaurants.filter((restaurant) => {
        return (restaurant.price_range === priceRange && check_cuisines(restaurant.cuisines, cuisine));
    });

    res.status(200);
    res.send({ success: true, data: filteredRestaurants });
});

router.get("/restaurants/:restaurantId", (req, res) => {
    try {
        const { restaurantId } = req.params;
        const userDishes = JSON.parse(req.query.userDishes);
        Documenu.Restaurants.get(restaurantId)
          .then((response) => {
            const [menu] = response.result.menus;
            let totalDishes = [];
            menu.menu_sections.forEach((menu_section) => {
              menu_section.menu_items.forEach((menu_item) => {
                totalDishes.push(menu_item.name);
              })
            });

            console.log('userDishes: ', userDishes);
            console.log('totalDishes: ', totalDishes);
            const matchingPercentage = check_dishes(totalDishes, userDishes);

            res.status(200);
            res.send({ success: true, restaurant: response.result, dishes: menu.menu_sections, matchingPercentage });
          })

    } catch (err) {
        res.send({ success: false, err });
    }
});

module.exports = router;
