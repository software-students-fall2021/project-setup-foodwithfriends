import './DietaryPreferences.css';
import SkipButton from '../components/SkipButton';

import React from 'react';
import SubmitButton from '../components/SubmitButton';

function DietaryPreferences(props) {
  return (
    <div className="DietaryPreferences">
      <SkipButton/>
      <div id="dp-select-text">Select any dietary preferences</div>
    <div id="preferences-container">
      <div class="pref-container">
        <div id="pref1" >Preference</div>
        <div id="pref2" > Preference</div>
        <div id="pref3" >Preference</div>
      </div>
      <div class="pref-container">
        <div id="pref4" >Preference</div>
        <div id="pref5"> Preference</div>
        <div id="pref6">Preference</div>
      </div>
      <div class="pref-container">
        <div id="pref7" >Preference</div>
        <div id="pref8" >Preference</div>
        <div id="pref9" >Preference</div>
      </div>
    </div>
    <SubmitButton/>
  </div>
  );
};

export default DietaryPreferences;