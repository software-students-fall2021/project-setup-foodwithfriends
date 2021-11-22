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
