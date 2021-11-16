import './Button.css';
import React from 'react';
import { useHistory } from "react-router-dom";

function Button(props) {
  
  let history = useHistory();
  const goToPrevPage = () => {
    history.goBack()
  }

  let bgColor = props.bg;
  let textColor = props.color;
  let bRadius = props.br;
  let click = props.onClick;

  if (!bgColor) { bgColor = "#505050" }
  if (!textColor) { textColor = "#fff" }
  if (!bRadius) { bRadius = "10px" }

  const styles = {
    width: props.width,
    height: props.height,
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: bRadius
  };

  if (props.backEnabled) {
    click = () => {goToPrevPage()}
  }

  return (
    <div>
      <button id = {props.id} className = "button" onClick={click} type={props.type} style={styles}>{props.text}</button>
    </div>
  );
}

export default Button;
