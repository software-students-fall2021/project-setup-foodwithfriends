import './WinningCuisine.css';

import React from 'react';
import Button from '../components/Button';
import winningLogo from '../img/winningimg.jpeg';

function WinningCuisine(props) {
  return (
    <div className="WinningCuisine">
      <div className="WinningImage"><img id="winImg" src={winningLogo} alt="Winning cuisine image"/></div>
      <div className="WinningHeader">{props.cuisine}Chosen Cuisine Name</div>
      <p className="WinningFacts">{props.description}Facts about cuisine. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
      <Button/>
    </div>
  );
}

export default WinningCuisine;
