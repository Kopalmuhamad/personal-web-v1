import React from "react";
import "./MobileMenu.scss"

const MobileMenu = () => {
  return (
    <ul className="menu-list">
      <li className="menu-list-item">
        <a href="#" className="menu-link">
          About
        </a>
      </li>
      <li className="menu-list-item">
        <a href="#" className="menu-link">
          Portfolio
        </a>
      </li>
      <li className="menu-list-item">
        <a href="#" className="menu-link">
          Hire Me
        </a>
      </li>
      <div className="menu-left-accent"></div>
      <div className="menu-right-accent"></div>
    </ul>
  );
};

export default MobileMenu;
