import "./ResultsCell.css";
import restaurauntPlaceholder from "../img/restauraunt-placeholder.jpeg";

import React from "react";

function ResultsCell(props) {
  const { name, description, percentageMatch } = props;
  return (
    <div className="ResultsCell">
      <div className="flex">
        <div className="left">
          <img src={restaurauntPlaceholder} alt=""></img>
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
