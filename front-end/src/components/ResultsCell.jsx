import "./ResultsCell.css";
import restaurauntPlaceholder from "../img/restauraunt-placeholder.jpeg";
import { useHistory } from "react-router-dom";

import React from "react";

function ResultsCell(props) {
  const history = useHistory();
  const { name, description, percentageMatch } = props;
  return (
    <div
      className="ResultsCell"
      onClick={() => {
        history.push("/restauraunt-detail");
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
