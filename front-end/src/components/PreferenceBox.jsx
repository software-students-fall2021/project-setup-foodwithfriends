import './PreferenceBox.css';

import React from 'react';

function PreferenceBox(props) {

  return (
    <div className={props.currActive == props.value ? "PreferenceBox active-box" : "PreferenceBox"} onClick={() => { props.sendToParent(props.value) }} key={props.value}>
      <p>Preference #{props.value}</p>
    </div>
  );
}

export default PreferenceBox;