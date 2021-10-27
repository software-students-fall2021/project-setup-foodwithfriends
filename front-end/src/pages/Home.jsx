import "./Home.css";

import React, { Fragment } from "react";
import HomePageLogo from "../components/HomePageLogo";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <Fragment>
      <div className = "Home">
        <HomePageLogo></HomePageLogo>
    </div>
       <Link to="JoinRoom">
        <button className = "tempButton">Join a Room </button>
      </Link> 
      <Link to="CreateRoom">
        <button className = "tempButton">Create a Room </button>
      </Link> 
    </Fragment>

  );
};

export default Home;