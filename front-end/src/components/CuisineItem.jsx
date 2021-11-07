import './CuisineItem.css';

import React from 'react';
import ReactModal from 'react-modal';

function CuisineItem(props) {
  const {name, description, thumbnail, dishes} = props.cuisine;
  const index = props.index;
  const formValue = props.value;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const cuisine = ['italian', 'chinese', 'latin', 'japanese', 'american','indian']

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <label>
      <input type = "radio" className="radio" name="chosen-cuisine" value={formValue}/>
      <div className="cuisine-item">
        <h1 className="title">{name}</h1>
        <img className="thumbnail" src={require(`../img/cuisines/${cuisine[index]}/${thumbnail}`).default} />
        <p className="description"> {description} </p>
        <button 
          type="button" 
          className="info" 
          onClick={openModal}> 
          more info
        </button>
        <ReactModal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Minimal Modal Example"
          ariaHideApp={false}
        >
          <h1 className="title">{name}</h1>
          <div id="dishes">        
            {dishes.map( dish => {
              return <div key={dish.name} className="dish-item">
                <img src={require(`../img/cuisines/${cuisine[index]}/${dish.img}`).default} />
                <p>{dish.name}</p>
              </div>
            })}
          </div>
        </ReactModal>
      </div>
    </label>
  );
}

export default CuisineItem;