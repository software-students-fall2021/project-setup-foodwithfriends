import './DietaryPreferences.css';

import React from 'react';
import { Link } from "react-router-dom";
import PreferenceBox from '../components/PreferenceBox';
import Button from '../components/Button';

function DietaryPreferences() {
  const [active, setActive] = React.useState(-1);

  const sendToParent = (index) => {
    setActive(index);
  }

  return (
    <div className="DietaryPreferences">
      <Link to="/preferred-dish">
        <Button id="skipButton" text="skip" width="65px" height="30px" bg="#9d9287" />
      </Link>
      <div id="dp-select-text">
        <p>Select any dietary preferences</p>
      </div>
      <div id="preferences-container">
        <PreferenceBox value={1} sendToParent={sendToParent} currActive={active} />
        <PreferenceBox value={2} sendToParent={sendToParent} currActive={active} />
        <PreferenceBox value={3} sendToParent={sendToParent} currActive={active} />
        <PreferenceBox value={4} sendToParent={sendToParent} currActive={active} />
        <PreferenceBox value={5} sendToParent={sendToParent} currActive={active} />
        <PreferenceBox value={6} sendToParent={sendToParent} currActive={active} />
        <PreferenceBox value={7} sendToParent={setActive} currActive={active} />
        <PreferenceBox value={8} sendToParent={setActive} currActive={active} />
        <PreferenceBox value={9} sendToParent={setActive} currActive={active} />
      </div>
      <Button id="submit" text="Submit" width="300px" height="50px" />
    </div>
  );
}

export default DietaryPreferences;