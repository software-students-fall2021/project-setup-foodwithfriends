const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const Documenu = require('documenu');
const Group = require("../models/group");
const { check_cuisines, check_dishes } = require('../utils/loss_function');
Documenu.configure(process.env.DOCUMENU_KEY);

router.get("/restaurants", async function (req, res) {
    const id = req.query.groupID;

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
          totalRestaurants.push(restaurant);
        })
    }

    const filteredRestaurants = totalRestaurants.filter((restaurant) => {
        return (restaurant.price_range === priceRange && check_cuisines(restaurant.cuisines, winningCuisine));
    });

=======
const { param, validationResult } = require("express-validator");
const { restauraunt_rankings } = require("../utils/loss_function");
const restaurants = require("../data/restauraunts.json");

router.get("/restaurants", function (req, res) {
    const result = restaurants.data;
>>>>>>> master
    res.status(200);
    res.send({ success: true, data: !winningCuisine ? totalRestaurants.slice(0, 30) : filteredRestaurants });
});

router.get(
  "/restaurants/:restaurantId",
  param("restaurantId").isString(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { restaurantId } = req.params;
<<<<<<< HEAD
        Documenu.Restaurants.get(restaurantId)
          .then((response) => {
            const [menu] = response.result.menus;

            res.status(200);
            res.send({ success: true, restaurant: response.result, dishes: menu.menu_sections });
          })
    } catch (err) {
        res.send({ success: false, err });
=======
        const restaurantList = restaurants.data;
        const restaurant = restaurantList.filter((restaurant) => {
            return (
                restaurant.restaurant_id === parseInt(restaurantId)
            );
        });

      res.status(200);
      res.send({ restaurant });
    } catch (err) {
      res.send(err);
>>>>>>> master
    }
  }
);

module.exports = router;
