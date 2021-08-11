import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";

export default function Header() {
  // using React hooks to create a clicked or unclicked state as a boolean
  const [click, setClick] = useState(false);

  // closeMobileMenu function is just setting our clicked state to false
  // as when a user clicks on a menu-item in mobile view we want to close the menu
  const closeMobileMenu = () => setClick(false);

  // handleClick is going to toggle our clicked state on and off
  const handleClick = () => setClick(!click);

  return (
    <nav className="header" id="myTopnav">
      <div className="nav-left">
        <a href="/" className="logo">
          <img
            src="images/psyduck-icon.svg"
            alt="psyduck"
            height="70"
            width="57"
          />
        </a>
      </div>
      <div className="nav-right">
        <ul className={click ? "nav-options responsive" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/home" className="option-link">
              HOME
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/bikepoints" className="option-link">
              BIKE POINTS
            </Link>
          </li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </nav>
  );
}
