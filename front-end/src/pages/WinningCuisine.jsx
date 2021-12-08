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
      <div className="WinningImage"><img id="winImg" src={require(`../img/cuisines/${final.cuisine}/${final.thumbnail}`).default} alt="Winning cuisine image"/></div>
      <div className="WinningHeader">{final.name}</div>
      <p className="WinningFacts">{final.description}</p>
      <Button/>
    </div>
  );
}

export default WinningCuisine;
