import "./ResultsPage.css";
import ResultsCell from "../components/ResultsCell";
import { get } from "../utils/request";

import React from "react";

// const restaurauntList = [
//   {
//     name: "The Soup Kitchen",
//     description: "American, Dine-in, Takeout",
//     percentageMatch: 100,
//     picture: "",
//   },
//   {
//     name: "The Soup Kitchen",
//     description: "American, Dine-in, Takeout",
//     percentageMatch: 100,
//     picture: "",
//   },
//   {
//     name: "The Soup Kitchen",
//     description: "American, Dine-in, Takeout",
//     percentageMatch: 100,
//     picture: "",
//   },
//   {
//     name: "The Soup Kitchen",
//     description: "American, Dine-in, Takeout",
//     percentageMatch: 100,
//     picture: "",
//   },
//   {
//     name: "The Soup Kitchen",
//     description: "American, Dine-in, Takeout",
//     percentageMatch: 100,
//     picture: "",
//   },
//   {
//     name: "The Soup Kitchen",
//     description: "American, Dine-in, Takeout",
//     percentageMatch: 100,
//     picture: "",
//   },
//   {
//     name: "The Soup Kitchen",
//     description: "American, Dine-in, Takeout",
//     percentageMatch: 100,
//     picture: "",
//   },
//   {
//     name: "The Soup Kitchen",
//     description: "American, Dine-in, Takeout",
//     percentageMatch: 100,
//     picture: "",
//   },
//   {
//     name: "The Soup Kitchen",
//     description: "American, Dine-in, Takeout",
//     percentageMatch: 100,
//     picture: "",
//   },
// ];

function ResultsPage() {
  const [restaurants, setRestaurants] = React.useState([]);

  React.useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="ResultsPage">
      <h2>Recommended Restauraunts</h2>
      <div className="restauraunt-grid">
        {restaurants.map((restaurant) => (
          <ResultsCell
            key={restaurant.restaurant_id}
            name={restaurant.restaurant_name}
            description={restaurant.cuisines.join()}
            percentageMatch={100}
            restaurantId={restaurant.restaurant_id}
          />
        ))}
      </div>
    </div>
  );

  async function fetchRestaurants() {
    try {
      const data = await get(
        '/restaurants',
        {},
      );

      setRestaurants(data);
    } catch (err) {
      console.error(err);
    }
  }
}

export default ResultsPage;
