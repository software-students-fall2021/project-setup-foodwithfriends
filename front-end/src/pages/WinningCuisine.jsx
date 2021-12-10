import './WinningCuisine.css';

import React from 'react';
import Button from '../components/Button';
import data from '../data/cuisines.json';

import { get } from "../utils/request";
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function WinningCuisine() {

  const [winningCuisine, setWinningCuisine] = React.useState("");
  const cuisineData = Object.values(data);
  console.log("i am in the front end");
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

  const final = async () => {
    const votedCuisine = await get(
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
