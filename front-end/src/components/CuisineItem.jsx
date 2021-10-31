import './CuisineItem.css';

import React from 'react';

function CuisineItem(props) {
  const {name, description, thumbnail, dishes} = props.cuisine;
  return (
    <div className="cuisine-item">
      <h1 className="title">{name}</h1>
      <img className="thumbnail" src={require(`../img/cuisines/${thumbnail}`).default} />
      <p className="description"> {description} </p>
      <button type="button" className="info"> more info </button>
    </div>
  );
};

export default CuisineItem;