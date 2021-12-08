import "./ResultsCell.css";
import { useHistory } from "react-router-dom";
import { getRandomRestaurantImage } from '../utils/restaurantImage.js';
import { get } from "../utils/request";
import React from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function ResultsCell({ restaurantId, name, description }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [matchingPercentage, setMatchingPercentage] = React.useState(-1);
  const history = useHistory();
  const randomRestaurantImage = getRandomRestaurantImage(restaurantId);

  // console.log(cookies.get('preferred'));
  React.useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <div
      className="ResultsCell"
      onClick={() => {
        history.push(`/results/${restaurantId}`);
      }}
    >
      <div className="ResultsCell__content">
        <div className="ResultsCell__content__left">
          <img className="ResultsCell__content__left__img" src={randomRestaurantImage} alt="" />
        </div>
        <div className="ResultsCell__content__right">
          <div className="ResultsCell__content__right__name">{name}</div>
          <div className="ResultsCell__content__right__description">{description}</div>
          <div className="ResultsCell__content__right__percentage">{matchingPercentage}% Match</div>
        </div>
      </div>
    </div>
  );

  async function fetchMenus() {
    try {
      const response = await get(
        `/restaurants/${restaurantId}`, {
          userDishes: JSON.stringify(cookies.get('preferred'))
        }
      );

      setIsLoading(false);
      setMatchingPercentage(response.matchingPercentage);
    } catch (err) {
      console.error(err);
    }
  }
}

export default ResultsCell;
