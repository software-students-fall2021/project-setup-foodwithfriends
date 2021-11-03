import './RoomButton.css';

import React from 'react';

function RoomButton({ content }) {
  return (
    <button className="RoomButton">
      {content}
    </button>
  );
}

export default RoomButton;
