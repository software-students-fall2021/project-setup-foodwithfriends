import './WinningCuisine.css';

import React from 'react';
import Button from '../components/Button';
import winningLogo from '../img/winningimg.jpeg';
import data from '../data/cuisines.json';

import { Redirect } from 'react-router';
import { Link } from "react-router-dom";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function WinningCuisine(props) {

  const [winningCuisine, setWinningCuisine] = React.useState("");
  const cuisineData = Object.values(data);

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
    const cuisine = await get(
      '/win',
      {
        groupId: cookies.get("groupID")
      });
      return votedCuisine
  };

  setWinningCuisine(final());
  const win = cuisineData[winningCuisine];
  
  return (
    <div className="WinningCuisine">
      <h1 id="winner">WINNER</h1>
      <div className="WinningImage"><img id="winImg" src={require(`../img/cuisines/${win.cuisine}/${win.thumbnail}`).default} alt="Winning cuisine image"/></div>
      <div className="WinningHeader">{win}</div>
      <p className="WinningFacts">{win.description}</p>
      <Link to ="/preferences">
        <Button id = "btn" text="Continue" width="260px" height="50px"/>
      </Link>
    </div>
    
  );
}

export default WinningCuisine;
