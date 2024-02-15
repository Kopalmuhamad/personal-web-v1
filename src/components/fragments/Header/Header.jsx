import React from "react";
import "./Header.css";

import splashBgPink from "../../../assets/icons/splash-bg-pink.png";
import smile from "../../../assets/icons/smile.png";
import arrow from "../../../assets/icons/arrow.png";
import lamp from "../../../assets/icons/lamp.png";
import splash from "../../../assets/icons/splash-orange.png";
import seed from "../../../assets/icons/seed.png";
import splashPink from "../../../assets/icons/splash-pink.png";

const Header = () => {
  return (
    <header className="header">
      <img src={splashBgPink} alt="splash" className="header__splash-bg-pink" />
      <h1 className="header__title">
        I design ✍️ top notch <span>websites</span>{" "}
      </h1>
      <a href="#" className="header__button">
        See Portfolio
        <img src={seed} alt="" className="header__button-seed" />
      </a>
      <div className="header__name-wrapper">
        <img src={smile} alt="smile" className="header__smile-icon" />
        <h1 className="header__name">KOPAL</h1>
      </div>
      <div className="header__border-outer">
        <img src={arrow} alt="arrow" className="header__arrow-icon" />
        <img src={lamp} alt="" className="header__lamp-icon" />
        <img src={splash} alt="" className="header__splash-orange" />
        <div className="header__border-inner"> </div>
      </div>
      <img src={splashPink} alt="" className="header__splash-pink" />
    </header>
  );
};

export default Header;
