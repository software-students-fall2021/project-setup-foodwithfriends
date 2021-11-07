import './PreferredDish.css';
import SkipButton from '../components/SkipButton';

import React from 'react';

const dishes = [{name: "dish name 1", value: "dish-1"}, {name: "dish name 2", value: "dish-2"}, {name: "dish name 3", value: "dish-3"}];

function PreferredDish(props) {
  return (
    <div className="PreferredDish">
      <SkipButton/>
      <p id ="title"> Select your preferred dish </p>
      <form action="#">
        <div id = "checkbox-group">
          {dishes.map((dish) => (
            <div className="pref-dish-row">
              <input type="checkbox" name={dish.value}></input>
              <label>{dish.name}</label>
            </div>
          ))}
        </div>
        <button type="submit" className="select">Select</button>
      </form>

    </div>
  );
};

export default PreferredDish;