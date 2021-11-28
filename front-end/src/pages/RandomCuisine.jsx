import './RandomCuisine.css';

import React from 'react';
import Button from '../components/Button'
import { Redirect } from 'react-router';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function RandomCuisine() {

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
