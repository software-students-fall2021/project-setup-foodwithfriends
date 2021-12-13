const express = require("express");
const router = express.Router();
const Documenu = require('documenu');
const Group = require("../models/group");
const { check_cuisines, check_dishes } = require('../utils/loss_function');
const { param, validationResult } = require("express-validator");
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
            "size": 100
        };
        let response = await Documenu.Restaurants.searchGeo(params);
        response.data.forEach((restaurant) => {
          totalRestaurants.push(restaurant);
        })
    }

    const filteredRestaurants = totalRestaurants.filter((restaurant, i) => {
      return ((!restaurant.price_range || restaurant.price_range === priceRange) && check_cuisines(restaurant.cuisines, winningCuisine));
    });

    res.status(200);
    res.send({ success: true, data: filteredRestaurants.length === 0 ? totalRestaurants.slice(0, 30) : filteredRestaurants });
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
      Documenu.Restaurants.get(restaurantId)
        .then((response) => {
          const [menu] = response.result.menus;

          res.status(200);
          res.send({
            success: true,
            restaurant: response.result,
            dishes: menu.menu_sections
          });
        })
    } catch (err) {
        res.send({ success: false, err });
    }
  }
);

module.exports = router;
