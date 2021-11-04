import "./ResultsPage.css";
import ResultsCell from "../components/ResultsCell";

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

function ResultsPage() {
  return (
    <div className="ResultsPage">
      <h2>Recommended Restauraunts</h2>
      <div className="restauraunt-grid">
        {restaurauntList.map((restauraunt) => (
          <ResultsCell
            name={restauraunt.name}
            description={restauraunt.description}
            percentageMatch={restauraunt.percentageMatch}
            key={restauraunt.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;
