const generate_restuaraunts_map = (restauraunts) => {
  const data = Object.fromEntries(
    restauraunts.data.map((restauraunt) => {
      return [
        restauraunt.restaurant_id,
        {
          restaurant_name: restauraunt.restaurant_name,
          points: 0,
        },
      ];
    })
  );
  return data;
};

const check_menu = (menus, dishes) => {
  let matches = 0;
  menus.forEach((menu) => {
    menu.menu_sections.forEach((menu_section) => {
      menu_section.menu_items.forEach((menu_item) => {
        dishes.forEach((dish) => {
          if (dish === menu_item.name) {
            matches++;
          }
        });
      });
    });
  });
  return matches;
};

const loss_function = (restauraunts, user_preferences) => {
  let restauraunt_ranking = generate_restuaraunts_map(restauraunts);
  restauraunts.data.forEach((restauraunt) => {
    user_preferences.forEach((user) => {
      if (user.price === restauraunt.price_range) {
        restauraunt_ranking[restauraunt.restaurant_id]["points"] += 1;
      }
      restauraunt_ranking[restauraunt.restaurant_id]["points"] += check_menu(
        restauraunt.menus,
        user.dishes
      );
    });
  });
  return restauraunt_ranking;
};

const restauraunt_rankings = () => {
  let results = [];
  return results;
};

exports.restauraunt_rankings = restauraunt_rankings;
exports.generate_restuaraunts_map = generate_restuaraunts_map;
exports.check_menu = check_menu;
exports.loss_function = loss_function;
