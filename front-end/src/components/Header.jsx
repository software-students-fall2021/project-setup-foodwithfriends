import "./Header.css";
import Logo from "./Logo";
import InformationIcon from "./InformationIcon";
import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <header className="Header">
      <div className="menu-button"></div>
      <div>
        <Link to="/">
          <Logo height={50} />
        </Link>
      </div>
      <div className="menu-button">
        <Link to="/team" className="menu-button-link">
          <InformationIcon />
        </Link>
      </div>
    </header>
  );
}

export default Header;
