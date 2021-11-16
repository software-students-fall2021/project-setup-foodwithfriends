import './RandomCuisine.css';

import React from 'react';
import Button from '../components/Button'

function RandomCuisine() {
  return (
    <div className="RandomCuisine">
      <div id="random-cuisine-title-top"> 
        <h1>Random Cuisine</h1>
      </div>
      <div> <h3>Name</h3></div>
      <div id="cuisine-photo"></div>
      <div id = "description-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <Button id = "vote-button" text="Vote" width="300px" height="50px"/>
    </div>
  );
}

export default RandomCuisine;
