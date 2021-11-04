import './DietaryPreferences.css';

import SkipButton from '../components/SkipButton';
import PreferenceBox from '../components/PreferenceBox';
import SubmitButton from '../components/SubmitButton';

import React from 'react';

function DietaryPreferences(props) {
  return (
    <div className="DietaryPreferences">
      <SkipButton/>
      <div id="dp-select-text">Select any dietary preferences</div>
      <div id="preferences-container">
        <div class="pref-container">
          <PreferenceBox/>
          <PreferenceBox/>
          <PreferenceBox/>
        </div>
        <div class="pref-container">
          <PreferenceBox/>
          <PreferenceBox/>
          <PreferenceBox/>
        </div>
        <div class="pref-container">
          <PreferenceBox/>
          <PreferenceBox/>
          <PreferenceBox/>
        </div>
      </div>
      <SubmitButton/>
  </div>
  );
};

export default DietaryPreferences;