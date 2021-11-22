import "./Home.css";

import React, { Fragment, useEffect } from "react";
import HomePageLogo from "../components/HomePageLogo";
import Button from "../components/Button";
import { Link } from "react-router-dom";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Home() {

  return (
  <Fragment>
    <div className = "Home">
      <HomePageLogo/>
    </div>
    <div id = "button-group">
      <Link to="/join">
        <Button text="Join a Room" width="300px" height="50px"/>
      </Link>
      <Link to="/create">
        <Button text="Create a Room" width="300px" height="50px"/>
      </Link>
    </div>
  </Fragment>
  );
}

export default Home;
