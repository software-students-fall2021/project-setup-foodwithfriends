import './BackButton.css';
import { useHistory } from "react-router-dom";
import React from 'react';

function BackButton(props) {
  let history = useHistory();
  const goToPrevPage = () => {
    history.goBack()
}
  return (
    <div className="BackButton">
      <button onClick ={goToPrevPage}> Back </button>
    </div>
  );
};

export default BackButton;