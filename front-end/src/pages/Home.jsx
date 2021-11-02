import "./Home.css";

import React, { Fragment } from "react";
import HomePageLogo from "../components/HomePageLogo";
import { Link } from "react-router-dom";

function Home() {
  return (
  <Fragment>
    <div className = "Home">
      <HomePageLogo/>
    </div>
    <Link to="/join">
      <button className = "tempButton">Join a Room </button>
    </Link> 
    <Link to="/create">
      <button className = "tempButton">Create a Room </button>
    </Link> 
  </Fragment>
  );
}

export default Home;