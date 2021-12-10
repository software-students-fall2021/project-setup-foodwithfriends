import "./ResultsPage.css";
import ResultsCell from "../components/ResultsCell";
import { get } from "../utils/request";
import React from "react";
import { Redirect } from 'react-router';
import Loading from '../components/Loading';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

function ResultsPage() {
  const [restaurants, setRestaurants] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

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
      {isLoading ? <Loading /> : (
        <div>
          {restaurants.map((restaurant) => (
            <ResultsCell
              key={restaurant.restaurant_id}
              name={restaurant.restaurant_name}
              description={restaurant.cuisines.join()}
              restaurantId={restaurant.restaurant_id}
              priceRange={restaurant.price_range}
              geo={restaurant.geo}
            />
          ))}
        </div>
      )}
    </div>
  );

  async function fetchRestaurants() {
    try {
      const response = await get(
        '/restaurants', {
        groupID: cookies.get("groupID"),
      });

      setIsLoading(false);
      setRestaurants(response.data);
    } catch (err) {
      console.error(err);
    }
  }
}

export default ResultsPage;
