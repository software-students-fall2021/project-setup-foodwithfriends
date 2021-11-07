import './CuisineVote.css';

import React from 'react';
import QuestionMark from '../img/question-mark.svg';
import SelectChoice from '../img/select-choice.svg';
import { useHistory } from "react-router-dom";


function CuisineVote(props) {
  const history = useHistory();
  return (
    <div className="Cuisine">
      <h1>Vote on Cuisine</h1>
      <div className = "text-container">
        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget est sed justo pretium laoreet. Donec placerat viverra quam, id posuere metus blandit eu. Maecenas tempor, elit et gravida volutpat, augue velit placerat leo, ut pharetra sem magna ac orci. Cras sit amet odio quis nunc tincidunt ultrices. </p1>
      </div>

        <div className = "panelButton">
          <div className = "circle"
            onClick={() => {
              history.push("/random-cuisine");
          }}
          > 
            <img src={QuestionMark} className="questionMark" alt=""></img>
            </div>
          <div className= "main-container"
            onClick={() => {
              history.push("/random-cuisine");
          }}
          > 
            <div id="text">
                <div id="title-text">Random Choice</div>
                <div id="info-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
          </div>
        </div>

        <div className = "panelButton">
          <div className = "circle"
            onClick={() => {
              history.push("/choose-cuisine");
          }}
          >
            <img src={SelectChoice} className="selectChoice" alt=""></img>
          </div>
          <div className = "main-container"
            onClick={() => {
              history.push("/choose-cuisine");
          }}
          >
          <div id="text">
                <div id="title-text"> Choose Cuisine</div>
                <div id="info-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CuisineVote;