import "./RoomButton.css";

import React from "react";

function RoomButton({ content, onClick }) {
  return (
    <button className="RoomButton" onClick={onClick}>
      {content}
    </button>
  );
}

export default RoomButton;
