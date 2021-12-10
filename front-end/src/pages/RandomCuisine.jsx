import './RandomCuisine.css';
import React from 'react';
import data from '../data/cuisines.json';
import Button from '../components/Button';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';
import { post } from '../utils/request';

function refreshPage() {
  window.location.reload(false);
}
const cookies = new Cookies();

function RandomCuisine(props) {
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

  const sendVote = async () => {
    const response = await post(
      '/cuisine',
      {
        choice: randomCuisine.cuisine,
        groupId: cookies.get("groupID"),
        name: cookies.get("user")
      }
    );
    if(response.valid){
      props.history.push({
        pathname: "/wait",
          state: {firstWaitingRoom: true}
      })
      cookies.set("cuisine", randomCuisine.name);
    }
  };

  return (
    <div className="RandomCuisine">
      <div id="random-cuisine-title-top"> {randomCuisine.name}</div>
      <img id="cuisine-photo" src={require(`../img/cuisines/${randomCuisine.cuisine}/${randomCuisine.thumbnail}`).default} className="food" alt=""></img>
      <div id="cuisine-text">
        {randomCuisine.description}
      </div>
      <div id="vote-button-div">
        <Button text="Vote" width="260px" height="50px" br="15px" bg="#3F3F3F"
        onClick={() => {
          sendVote();
        }}
        />
      </div>
      <div id="reload" onClick={refreshPage}>
      <Button text="Different Cuisine" width="260px" height="50px" br="15px" bg="#E7D7D3" color="black" fontWeight="bold"/>
      </div>
    </div>

  );
}

export default RandomCuisine;