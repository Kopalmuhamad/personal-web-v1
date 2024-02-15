import React from "react";
import "./Image.scss";

import smileIcon from "../../../../assets/icons/smile.png";
import arrowIcon from "../../../../assets/icons/arrow.png";
import lineIcon from "../../../../assets/icons/vertical-wave-line.png";

const Image = () => {
  return (
    <main className="image">
      <div className="sign">
        <img src={smileIcon} alt="" className="smile-icon" />
        <h1 className="name">KOPAL</h1>
      </div>
      <div className="border-outer">
        <img src={arrowIcon} alt="" className="arrow-icon" />
        <img src={lineIcon} alt="" className="line-icon" />
        <div className="border-inner"></div>
      </div>
    </main>
  );
};

export default Image;
