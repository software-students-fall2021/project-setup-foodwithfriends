import './RandomCuisine.css';
import React from 'react';
import data from '../data/cuisines.json';
import Button from '../components/Button';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';

function refreshPage() {
  window.location.reload(false);
}
const cookies = new Cookies();

function RandomCuisine() {
  const cuisineData = Object.values(data);
  const generateRand = cuisineData[parseInt(Math.random() * cuisineData.length)];
  const randomCuisine = generateRand;
  if (!cookies.get("groupID")) {
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "nogroup" }
    }}
    />)
  }

  if (!cookies.get("user")) {
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "nouser" }
    }}
    />)
  }

  if (cookies.get("cuisine")) {
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "cuisine", cuisine: cookies.get("cuisine") }
    }}
    />)
  }
  return (
    <div className="RandomCuisine">
      <div id="random-cuisine-title-top"> {randomCuisine.name}</div>
      <img id="cuisine-photo" src={require(`../img/cuisines/${randomCuisine.cuisine}/${randomCuisine.thumbnail}`).default} className="food" alt=""></img>
      <div id="cuisine-text">
        {randomCuisine.description}
      </div>
      <div id="vote-button-div">
        <Button text="Vote" width="260px" height="50px" br="15px" bg="#3F3F3F"/>
      </div>
      <div id="reload" onClick={refreshPage}>
      <Button text="Different Cuisine" width="260px" height="50px" br="15px" bg="#E7D7D3" color="black" fontWeight="bold"/>
      </div>
    </div>

  );
}

export default RandomCuisine;