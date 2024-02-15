import React from "react";
import "./Logo.scss";
import logo from "../../../assets/icons/logo.png";

const Logo = () => {
  return (
    <a href="#" className="logo">
      <img src={logo} alt="logo" className="logo-image" />
      <h1 className="logo-text">KOPAL</h1>
    </a>
  );
};

export default Logo;
