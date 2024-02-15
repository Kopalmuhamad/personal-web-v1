import React, { useState, useEffect } from "react";
import "./Navbar.css";

import Logo from "../../../assets/icons/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav">
      <a href="#" className="nav__logo">
        <img src={Logo} alt="Logo" className="nav__logo-image" />
        MKOPAL
      </a>
      <main
        className="nav__burger-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="nav__burger-toggle-line"></div>
        <div className="nav__burger-toggle-line"></div>
        <div className="nav__burger-toggle-line"></div>
      </main>
      <ul className="nav__menu-desktop">
        <li className="nav__menu-list-item-desktop">
          <a href="#about" className="nav__menu-link-desktop">
            About
          </a>
        </li>
        <li className="nav__menu-list-item-desktop">
          <a href="#portfolio" className="nav__menu-link-desktop">
            Portfolio
          </a>
        </li>
        <li className="nav__menu-list-item-desktop">
          <a href="#contact" className="nav__menu-link-desktop">
            Contact
          </a>
        </li>
      </ul>

      {menuOpen && (
        <nav className="nav__menu">
          <ul className="nav__menu-list">
            <li className="nav__menu-list-item">
              <a href="#" className="nav__menu-link">
                About
              </a>
            </li>
            <li className="nav__menu-list-item">
              <a href="#" className="nav__menu-link">
                Portfolio
              </a>
            </li>
            <li className="nav__menu-list-item">
              <a href="#" className="nav__menu-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Accent Navbar */}
      <span className="nav__dot-accent dot-top-right"></span>
      <span className="nav__dot-accent dot-top-left"></span>
      <span className="nav__dot-accent dot-bottom-right"></span>
      <span className="nav__dot-accent dot-bottom-left"></span>
    </nav>
  );
};

export default Navbar;
