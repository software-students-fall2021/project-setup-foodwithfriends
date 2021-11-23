import './RandomCuisine.css';
import React from 'react';
import data from '../data/cuisines.json';



function RandomCuisine() {     
  const cuisineData = Object.values(data);
  const generateRand = cuisineData[parseInt(Math.random() * cuisineData.length)];
  const randomCuisine = generateRand;
  console.log(randomCuisine);
    return (
    <div className="RandomCuisine">
      <div id="random-cuisine-title-top"> {randomCuisine.name}</div>
      <img id="cuisine-photo"src="" className="food" alt=""></img>
      <div id="cuisine-text">
      {randomCuisine.description}
      </div>
      <div id="vote-button-div">
        <button id="vote-button"> Vote </button>
      </div>
    </div>

  );
}

export default RandomCuisine;