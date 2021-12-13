import "./ResultsCell.css";
import { useHistory } from "react-router-dom";
import { getRandomRestaurantImage, getDistanceBetweenTwoPlace } from '../utils/restaurant.js';
import React from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function ResultsCell({ restaurantId, name, description, priceRange, geo }) {
  const history = useHistory();
  const randomRestaurantImage = getRandomRestaurantImage(restaurantId);
  const coord = cookies.get('coord');
  const distance = getDistanceBetweenTwoPlace(geo.lat, geo.lon, coord.latitude, coord.longitude, 'N');
  const cuisines = description.replaceAll(',', ', ');

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
          <div className="ResultsCell__content__right__description">{cuisines || 'Others'}</div>
          <div className="ResultsCell__content__right__price">{priceRange || '$'}</div>
          <div className="ResultsCell__content__right__distance">{distance.toFixed(2)} miles away</div>
        </div>
      </div>
    </div>
  );
}

export default ResultsCell;
