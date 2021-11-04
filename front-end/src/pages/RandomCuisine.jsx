import './RandomCuisine.css';

import React from 'react';

function RandomCuisine() {
  return (
    <div className="RandomCuisine">
      <div id="random-cuisine-title-top"> Random Cuisine</div>
      <div id="random-cuisine-title-bottom"> Name</div>
      <div id="cuisine-photo"></div>
      <div id="cuisine-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <div id="vote-button-div">
        <button id="vote-button"> Vote </button>
      </div>
    </div>
  );
}

export default RandomCuisine;