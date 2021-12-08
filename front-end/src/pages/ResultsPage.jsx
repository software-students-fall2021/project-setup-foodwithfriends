import "./ResultsPage.css";
import ResultsCell from "../components/ResultsCell";
import { get } from "../utils/request";

import React from "react";
import { Redirect } from 'react-router';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function ResultsPage() {
  const [restaurants, setRestaurants] = React.useState([]);

  if (!cookies.get("groupID")) {
    return (
      <Redirect to={{
        pathname: "/error",
        state: { error: "nogroup" }
      }}
      />)
  }

  if (!cookies.get("user")) {
    return (
      <Redirect to={{
        pathname: "/error",
        state: { error: "nouser" }
      }}
      />)
  }

  if (!cookies.get("cuisine")) {
    return (
      <Redirect to={{
        pathname: "/error",
        state: { error: "nocuisine", next: "/cuisine" }
      }}
      />)
  }


  React.useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="ResultsPage">
      <h2 className="heading">Recommended Restauraunts</h2>
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
