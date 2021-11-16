import './PreferredDish.css';

import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Button';

const dishes = [{name: "dish name 1", value: "dish-1"}, {name: "dish name 2", value: "dish-2"}, {name: "dish name 3", value: "dish-3"}];

function PreferredDish() {
  return (
    <div className="PreferredDish">
      <Link to="/wait">
        <Button id="skipButton" text="skip" width="65px" height="30px" bg="#9d9287"/>
      </Link>
      <p id ="title"> Select your preferred dish </p>
      <form action="#">
        <div id = "checkbox-group">
          {dishes.map((dish, i) => (
            <div className="pref-dish-row" key={i}>
              <input type="checkbox" name={dish.value}></input>
              <label>{dish.name}</label>
            </div>
          ))}
        </div>
        <button type="submit" className="select">Select</button>
      </form>

    </div>
  );
}

export default PreferredDish;