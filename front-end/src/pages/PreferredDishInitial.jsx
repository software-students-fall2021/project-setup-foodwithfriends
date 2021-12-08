import './PreferredDishInitial.css';

import React from 'react';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';
import Button from "../components/Button";
import Input from '../components/Input';
import { validateForm } from "../utils/validation"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const cookies = new Cookies();

function PreferredDishInitial() {
  const [keyword, setKeyword] = React.useState("");
  const history = useHistory();

  const saveKeyWord = () => {
    console.log("saving....");
    cookies.set("keyword", keyword);
    history.push(`/choose-preferences`);
  }

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

  if (cookies.get("preferred")) {
    return (
      <Redirect to={{
        pathname: "/error",
        state: { error: "preferred" }
      }}
      />)
  }

  if (cookies.get("keyword")) {
    return (
      <Redirect to={{
        pathname: "/error",
        state: { error: "preferredkey", keyword: cookies.get("keyword") }
      }}
      />)
  }

  return (
    <div className="PreferredDishInitial">
      <Link to="/wait">
        <Button id="skipButton" text="skip" width="65px" height="30px" bg="#9d9287" />
      </Link>
      <div>
        <h1 className="heading"> Dish Preferences</h1>
        <p className="lead-text">Have a specific craving? Enter a keyword to browse and choose related dishes</p>
      </div>
      <div id="pref-dish-key">
        <Input labelFor="keyword" inputName="keyword" onChange={(e) => setKeyword(e.target.value)} value={keyword} placeholder="e.g. Chicken" />
        <Button text="Continue" width="260px" height="50px" br="15px"
          onClick={() => {
            if (validateForm()) {
              saveKeyWord();
            }
          }} />
      </div>
    </div>
  );
}

export default PreferredDishInitial;