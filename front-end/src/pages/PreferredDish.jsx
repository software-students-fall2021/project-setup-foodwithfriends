import './PreferredDish.css';

import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import Button from '../components/Button';
import { get } from '../utils/request';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function PreferredDish() {

  const [dishes, setdishes] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');
  
  const fetchDishes = async () => {
    console.log("currently fetching....");
    const response = await get( '/documenu/dishes', { 
      groupID: cookies.get("groupID"), 
      cuisine: cookies.get("cuisine"),
      searchKeyword: cookies.get("keyword")
    });

    setdishes(response.data);
  };

  const submitOptions = () => {
    const inputs = document.querySelectorAll("input[type='checkbox']");
    let chosenDishes = [];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        chosenDishes.push(inputs[i].value)
      }
    }
    if (chosenDishes.length == 0) {
      setErrorMessage("Choose at least one dish")
    }
    // otherwise save dishes #107
    cookies.set("preferred", true);
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  if (!cookies.get("groupID")) {
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "nogroup" }
    }}
    />)
  }

  if (!cookies.get("user")){
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "nouser" }
    }}
    />)
  }

  if (!cookies.get("cuisine")){
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "nocuisine", next: "/cuisine" }
    }}
    />)
  }

  if (!cookies.get("keyword")){
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "nopreferredkey" }
    }}
    />)
  }

  if (cookies.get("preferred")){
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "preferred" }
    }}
    />)
  }

  return (
    <div className="PreferredDish">
      <Link to="/wait">
        <Button id="skipButton" text="skip" width="65px" height="30px" bg="#9d9287"/>
      </Link>
      <p id ="title"> Select your preferred dish </p>
      {errorMessage !== '' && (<div className="dish-error">{errorMessage}</div>)}
        <div id = "checkbox-group">
          {dishes.map((dish, i) => (
            <div className="pref-dish-row" key={i}>
              <input type="checkbox" value={dish.id}></input>
              <label>{dish.name}</label>
            </div>
          ))}
        </div>
        <Button id = "select-btn" text="Select" width="350px" height="40px" onClick={submitOptions}/>
    </div>
  );
}

export default PreferredDish;