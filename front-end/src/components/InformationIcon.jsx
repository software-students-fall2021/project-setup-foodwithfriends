import "./InformationIcon.css";

import React from "react";
import InfoIcon from "../img/info-circle-solid.svg";

function InformationIcon(props) {
  return (
    <span className="InformationIcon">
      <img src={InfoIcon} className="icon" alt=""></img>Info
    </span>
  );
}

export default InformationIcon;
