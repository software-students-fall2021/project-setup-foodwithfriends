import './WinningCuisine.css';

import React from 'react';
import Button from '../components/Button';
import winningLogo from '../img/winningimg.jpeg';

import { Redirect } from 'react-router';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function WinningCuisine(props) {

  if (!cookies.get("groupID")) {
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "nogroup" }
    }}
    />)
  }

  if (!cookies.get("user")){
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "nouser" }
    }}
    />)
  }

  if (!cookies.get("cuisine")){
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "nocuisine", next: "/cuisine" }
    }}
    />)
  }
  // "Indian" vs "indian" --> Figure out where this bug is
  // WC.jsx: Get request with the URL => /'win'
  // Store this result and print the correlated image
  const final = async () => {
    const final = await get(
      '/win',
      {
        finalCuisine
      });
  };
  
  
  return (
    <div className="WinningCuisine">
      <h1 id="winner">WINNER</h1>
      <div className="WinningImage"><img id="winImg" src={winningLogo} alt="Winning cuisine image"/></div>
      <div className="WinningHeader">{props.cuisine}Chosen Cuisine Name</div>
      <p className="WinningFacts">{props.description}Facts about cuisine. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
      <Link to ="/preferences">
        <Button id = "btn" text="Continue" width="260px" height="50px"/>
      </Link>
    </div>
    
  );
}

export default WinningCuisine;
