import './Input.css';
import React from 'react';

function Input(props) {
  return (
    <div className="input">
      <label htmlFor={props.labelFor}>
        <span>{props.label}</span>
        <input type="text" name={props.inputName} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
      </label>
    </div>
  );
}

export default Input;
