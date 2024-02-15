import React from "react";
import "./DesktopMenu.scss";

const DesktopMenu = () => {
  return (
    <ul className="desktop-menu-list">
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
          Contact
        </a>
      </li>
    </ul>
  );
};

export default DesktopMenu;
