import './ChooseCuisine.css';

import React from 'react';
import CuisineItem from "../components/CuisineItem";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const data = require('../data/cuisines.json');

function ChooseCuisine() {
  return (
    <div className="Cuisine">
      <h1 id = "heading">Choose a Cuisine</h1>
      <p>Then we'll determine the group's favorite</p>
      <Carousel showThumbs={false} showArrows={false} showStatus={false} emulateTouch={true} infiniteLoop={true}>
        {data.map((item, i) => <CuisineItem key={item.name} cuisine={item} index={i}/>)}
      </Carousel>
      <button type="button" className="continue">Continue</button>
    </div>
  );
};

export default ChooseCuisine;
