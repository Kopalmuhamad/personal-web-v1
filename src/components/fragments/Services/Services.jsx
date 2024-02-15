import React from "react";
import "./Services.scss";

import smileIcon from "../../../assets/icons/smile.png";

const Services = () => {
  return (
    <section className="services">
      <header className="services-header">
        <h1 className="header-text">
          Services we're providing that derive 99% result
        </h1>
        <img src={smileIcon} alt="" className="header-icon" />
      </header>
    </section>
  );
};

export default Services;
