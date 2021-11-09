import './DietaryPreferences.css';

import SkipButton from '../components/SkipButton';
import PreferenceBox from '../components/PreferenceBox';
import SubmitButton from '../components/SubmitButton';

import React from 'react';

function DietaryPreferences() {
  const [active, setActive] = React.useState(-1);

  const sendToParent = (index) => {
    setActive(index);
  }

  return (
    <div className="DietaryPreferences">
      <SkipButton/>
      <div id="dp-select-text">Select any dietary preferences</div>
      <div id="preferences-container">
        <div className="pref-container">
          <PreferenceBox value={1} sendToParent={sendToParent} currActive={active}/>
          <PreferenceBox value={2} sendToParent={sendToParent} currActive={active}/>
          <PreferenceBox value={3} sendToParent={sendToParent} currActive={active}/>
        </div>
        <div className="pref-container">
          <PreferenceBox value={4} sendToParent={sendToParent} currActive={active}/>
          <PreferenceBox value={5} sendToParent={sendToParent} currActive={active}/>
          <PreferenceBox value={6} sendToParent={sendToParent} currActive={active}/>
        </div>
        <div className="pref-container">
          <PreferenceBox value={7} sendToParent={setActive} currActive={active}/>
          <PreferenceBox value={8} sendToParent={setActive} currActive={active}/>
          <PreferenceBox value={9} sendToParent={setActive} currActive={active}/>
        </div>
      </div>
      <SubmitButton/>
  </div>
  );
}

export default DietaryPreferences;