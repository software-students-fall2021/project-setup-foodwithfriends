import './RandomCuisine.css';
import React from 'react';
import data from '../data/cuisines.json';

function refreshPage() {
  window.location.reload(false);
}

function RandomCuisine() {
  const cuisineData = Object.values(data);
  const generateRand = cuisineData[parseInt(Math.random() * cuisineData.length)];
  const randomCuisine = generateRand;
  console.log(randomCuisine);
  return (
    <div className="RandomCuisine">
      
      <button id="reload" onClick={refreshPage}>Different Cuisine</button>
    
      <div id="random-cuisine-title-top"> {randomCuisine.name}</div>
      <img id="cuisine-photo" src={require(`../img/cuisines/${randomCuisine.cuisine}/${randomCuisine.thumbnail}`).default} className="food" alt=""></img>
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