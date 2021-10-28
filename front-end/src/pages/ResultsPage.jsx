import "./ResultsPage.css";
import restaurauntPlaceholder from "../img/restauraunt-placeholder.jpeg";

import React from "react";

const restaurauntList = [
  {
    name: "The Soup Kitchen",
    description: "American, Dine-in, Takeout",
    percentageMatch: 100,
    picture: "",
  },
  {
    name: "The Soup Kitchen",
    description: "American, Dine-in, Takeout",
    percentageMatch: 100,
    picture: "",
  },
  {
    name: "The Soup Kitchen",
    description: "American, Dine-in, Takeout",
    percentageMatch: 100,
    picture: "",
  },
  {
    name: "The Soup Kitchen",
    description: "American, Dine-in, Takeout",
    percentageMatch: 100,
    picture: "",
  },
  {
    name: "The Soup Kitchen",
    description: "American, Dine-in, Takeout",
    percentageMatch: 100,
    picture: "",
  },
  {
    name: "The Soup Kitchen",
    description: "American, Dine-in, Takeout",
    percentageMatch: 100,
    picture: "",
  },
  {
    name: "The Soup Kitchen",
    description: "American, Dine-in, Takeout",
    percentageMatch: 100,
    picture: "",
  },
  {
    name: "The Soup Kitchen",
    description: "American, Dine-in, Takeout",
    percentageMatch: 100,
    picture: "",
  },
  {
    name: "The Soup Kitchen",
    description: "American, Dine-in, Takeout",
    percentageMatch: 100,
    picture: "",
  },
];

function ResultsPage(props) {
  return (
    <div className="ResultsPage">
      <h2>Recommended Restauraunts</h2>
      <div className="restauraunt-grid">
        {restaurauntList.map((restauraunt) => {
          return (
            <div className="restauraunt-cell">
              <div className="flex">
                <div className="left">
                  <img src={restaurauntPlaceholder} alt=""></img>
                </div>
                <div className="right">
                  <h4 className="name">{restauraunt.name}</h4>
                  <h5 className="description">{restauraunt.description}</h5>
                  <h5 className="percentage">
                    {restauraunt.percentageMatch}% Match
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ResultsPage;
