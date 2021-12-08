import "./ResultsCell.css";
import restaurauntPlaceholder from "../img/restauraunt-placeholder.jpeg";
// import restauraunt1 from "../img/restauraunt1.jpeg";
import { useHistory } from "react-router-dom";
// import { getRandomRestaurantImage } from '../utils/restaurantImage.js'

import React from "react";

function ResultsCell({ restaurantId, name, description, percentageMatch }) {
  const history = useHistory();
  // const restaurantImage = getRandomRestaurantImage(restaurantId);
  console.log(restaurauntPlaceholder);
  return (
    <div
      className="ResultsCell"
      onClick={() => {
        history.push(`/results/${restaurantId}`);
      }}
    >
      <div className="flex">
        <div className="left">
          <img src={restaurauntPlaceholder} alt="" />
        </div>
        <div className="right">
          <h4 className="name">{name}</h4>
          <h5 className="description">{description}</h5>
          <h5 className="percentage">{percentageMatch}% Match</h5>
        </div>
      </div>
    </div>
  );
}

export default ResultsCell;
