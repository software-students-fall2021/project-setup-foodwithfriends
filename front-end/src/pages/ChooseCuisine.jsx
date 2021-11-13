import './ChooseCuisine.css';

import React from 'react';
import CuisineItem from "../components/CuisineItem";
import Button from "../components/Button";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const data = require('../data/cuisines.json');

function ChooseCuisine() {
  return (
    <div className="Cuisine">
      <h1 id = "heading">Choose a Cuisine</h1>
      <p>Then we&apos;ll determine the group&apos;s favorite</p>
      <form action="#">
        <Carousel showThumbs={false} showArrows={false} showStatus={false} emulateTouch={true} infiniteLoop={true} onChange={(_, item) => setInputOnSwipe(item)}>
            {data.map((item, i) =>
              <CuisineItem key={item.name} cuisine={item} index={i} value={item.cuisine}/>
            )}
        </Carousel>
        <Button id ="continueButton" type="submit" width= "350px" height="40px" text="Continue"/>
      </form>
    </div>
  );
}

function setInputOnSwipe(item) {
  let choices = document.getElementsByName("chosen-cuisine")
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].value == item.props.value ) {
      choices[i].checked = true;
      return;
    }
  }
}

export default ChooseCuisine;
