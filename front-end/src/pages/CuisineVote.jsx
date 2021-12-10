import './CuisineVote.css';
import React from 'react';
import QuestionMark from '../img/question-mark.svg';
import SelectChoice from '../img/select-choice.svg';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function CuisineVote() {
  const history = useHistory();

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
    <div className="Cuisine">
      <h1 id="cuisine-heading">Cuisine Vote</h1>
      <div id="cuisine-description" className="text-container">
        <p>Select an Option</p>
      </div>

      <div id="choice-container">
        <div className="panelButton">
          <div className="circle"
            onClick={() => {
              history.push("/random");
            }}
          >
            <img src={QuestionMark} className="questionMark" alt=""></img>
          </div>
          <div className="main-container"
            onClick={() => {
              history.push("/random");
            }}
          >
            <div id="text">
              <div className="title-text">Random Choice</div>
              <div className="info-text"> Are you indecisive on a cuisine? We&apos;ll help you choose one at random.</div>
            </div>
          </div>
        </div>

        <div className="panelButton">
          <div className="circle"
            onClick={() => {
              history.push("/choose");
            }}
          >
            <img src={SelectChoice} className="selectChoice" alt=""></img>
          </div>
          <div className="main-container"
            onClick={() => {
              history.push("/choose");
            }}
          >
            <div id="text">
              <div className="title-text"> Choose Cuisine</div>
              <div className="info-text"> Know exactly what you want? Let your friends know by choosing out of 6 delicious cuisine options.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CuisineVote;
