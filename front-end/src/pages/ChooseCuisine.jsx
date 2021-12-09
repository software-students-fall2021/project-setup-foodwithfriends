import './ChooseCuisine.css';

import React from 'react';
import CuisineItem from "../components/CuisineItem";
import Button from "../components/Button";
import { post } from '../utils/request';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';

import Cookies from 'universal-cookie';
const cookies = new Cookies();


const data = require('../data/cuisines.json');

function ChooseCuisine(props) {
  const [choice, setChoice] = React.useState("");
  const history = useHistory();
  const vote = async() => {
    let cuisineValue = !choice ? "italian" : choice;
    
    const response = await post(
      '/cuisine',
      {
        choice: cuisineValue,
        groupId: cookies.get("groupID"),
        name: cookies.get("user")
      }
    );
    if(response.valid){
      props.history.push({
        pathname: "/wait",
          state: {firstWaitingRoom: true}
      })
      cookies.set("cuisine", cuisineValue);
    }
  }

  const setInputOnSwipe = (item) => {
    let choices = document.getElementsByName("chosen-cuisine")
    setChoice(item.props.value);
    for (let i = 0; i < choices.length; i++) {
      if (choices[i].value == item.props.value ) {
        choices[i].checked = true;
        return;
      }
    }
  }

  if (!cookies.get("groupID")) {
    return (
    <Redirect to={{
      pathname: "/error",
      state: {error: "nogroup"}
    }}
    />)
  }

  if (!cookies.get("user")) {
    return (
    <Redirect to={{
      pathname: "/error",
      state: {error: "nouser"}
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
      <h1 id = "heading">Choose a Cuisine</h1>
      <p>Then we&apos;ll determine the group&apos;s favorite</p>
        <Carousel showThumbs={false} showArrows={false} showStatus={false} emulateTouch={true} infiniteLoop={true} onChange={(_, item) => setInputOnSwipe(item)}>
            {data.map((item, i) =>
              <CuisineItem key={item.name} cuisine={item} index={i} value={item.cuisine}/>
            )}
        </Carousel>
        <Button id = "continueButton" width="350px" height="40px" text="Continue" onClick={vote}/>
    </div>
  );
}

export default ChooseCuisine;
