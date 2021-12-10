import './WinningCuisine.css';
import React from 'react';
import Button from '../components/Button';
<<<<<<< HEAD
import winningLogo from '../img/winningimg.jpeg';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f4990f2 (fix front end)
import data from '../data/cuisines.json';

>>>>>>> d58bc22 (fix front end)
=======
import data from '../data/cuisines.json';

import { get } from "../utils/request";
>>>>>>> eb4a502 (Make changes)
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

<<<<<<< HEAD
function WinningCuisine(props) {
<<<<<<< HEAD
=======

  const [winningCuisine, setWinningCuisine] = React.useState("");
  const cuisineData = Object.values(data);
=======
function WinningCuisine() {
>>>>>>> eb4a502 (Make changes)

<<<<<<< HEAD
>>>>>>> 143bfb3 (fix route)
=======
  const [winningCuisine, setWinningCuisine] = React.useState("");
  const cuisineData = Object.values(data);
<<<<<<< HEAD

>>>>>>> d74040c (fix route)
=======
  console.log("i am in the front end");
>>>>>>> eb4a502 (Make changes)
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

  if (!cookies.get("cuisine")) {
    return (
      <Redirect to={{
        pathname: "/error",
        state: { error: "nocuisine", next: "/cuisine" }
      }}
      />)
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 5681077 (Winning cuisine route)
  // "Indian" vs "indian" --> Figure out where this bug is
  // WC.jsx: Get request with the URL => /'win'
  // Store this result and print the correlated image
  const final = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
    const cuisine = await get(
=======

  const final = async () => {
    const votedCuisine = await get(
>>>>>>> eb4a502 (Make changes)
      '/win',
      {
        groupId: cookies.get("groupID")
      });
      return votedCuisine
  };
<<<<<<< HEAD
=======
    const final = await get(
=======
    const cuisine = await get(
>>>>>>> d74040c (fix route)
      '/win',
      {
        groupId: cookies.get("groupID")
      });
      return votedCuisine
  };
<<<<<<< HEAD
  
>>>>>>> 5681077 (Winning cuisine route)
  
  
>>>>>>> c324ec0 (Winning cuisine route)
=======

  setWinningCuisine(final());
<<<<<<< HEAD

>>>>>>> d74040c (fix route)
  return (
    <div className="WinningCuisine">
<<<<<<< HEAD
      <h1 id="winner">WINNER</h1>
<<<<<<< HEAD
      <div className="WinningImage"><img id="winImg" src={winningLogo} alt="Winning cuisine image" /></div>
      <div className="WinningHeader">{props.cuisine}Chosen Cuisine Name</div>
      <p className="WinningFacts">{props.description}Facts about cuisine. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
      <Link to="/preferences">
        <Button id="btn" text="Continue" width="260px" height="50px" />
=======

  setWinningCuisine(final());
=======
>>>>>>> f4990f2 (fix front end)
  const win = cuisineData[winningCuisine];
  
  return (
    <div className="WinningCuisine">
      <h1 id="winner">WINNER</h1>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="WinningImage"><img id="winImg" src={require(`../img/cuisines/${win.cuisine}/${win.thumbnail}`).default} alt="Winning cuisine image"/></div>
      <div className="WinningHeader">{win}</div>
      <p className="WinningFacts">{win.description}</p>
      <Link to ="/preferences">
        <Button id = "btn" text="Continue" width="260px" height="50px"/>
>>>>>>> 143bfb3 (fix route)
      </Link>
=======
      <div className="WinningImage"><img id="winImg" src={require(`../img/cuisines/${final.cuisine}/${final.thumbnail}`).default} alt="Winning cuisine image"/></div>
      <div className="WinningHeader">{final.name}</div>
      <p className="WinningFacts">{final.description}</p>
      <Button/>
>>>>>>> 5681077 (Winning cuisine route)
=======
      <div className="WinningImage"><img id="winImg" src={winningLogo} alt="Winning cuisine image"/></div>
      <div className="WinningHeader">{props.cuisine}Chosen Cuisine Name</div>
      <p className="WinningFacts">{props.description}Facts about cuisine. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
=======
      <div className="WinningImage"><img id="winImg" src={require(`../img/cuisines/${winningCuisine.cuisine}/${winningCuisine.thumbnail}`).default} alt="Winning cuisine image"/></div>
      <div className="WinningHeader">{winningCuisine}</div>
      <p className="WinningFacts">{winningCuisine.description}</p>
>>>>>>> d74040c (fix route)
=======
      <div className="WinningImage"><img id="winImg" src={require(`../img/cuisines/${win.cuisine}/${win.thumbnail}`).default} alt="Winning cuisine image"/></div>
      <div className="WinningHeader">{win}</div>
      <p className="WinningFacts">{win.description}</p>
>>>>>>> f4990f2 (fix front end)
      <Link to ="/preferences">
        <Button id = "btn" text="Continue" width="260px" height="50px"/>
      </Link>
>>>>>>> fd9267a (revert winning cuisine front end)
    </div>
    
  );
}

export default WinningCuisine;
