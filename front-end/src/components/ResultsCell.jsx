import "./ResultsCell.css";
import { useHistory } from "react-router-dom";
import { getRandomRestaurantImage } from '../utils/restaurantImage.js'

import React from "react";

function ResultsCell({ restaurantId, name, description, percentageMatch }) {
  const history = useHistory();
  const randomRestaurantImage = getRandomRestaurantImage(restaurantId);
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
          <div className="ResultsCell__content__right__percentage">{percentageMatch}% Match</div>
        </div>
      </div>
    </div>
  );
}

export default ResultsCell;
