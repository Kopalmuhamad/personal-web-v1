import React from "react";
import "./Data.scss";
import dataIcon from "../../../../assets/icons/splash-bg-pink.png";
import seed from "../../../../assets/icons/seed.png";

const Data = () => {
  return (
    <main className="data">
      <img src={dataIcon} alt="" className="data-header data-image" />
      <h1 className="data-body">I design ✍️ top notch websites </h1>
      <a href="#" className="data-footer">
        See Portfolio
        <img src={seed} alt="" className="button-seed" />
      </a>
    </main>
  );
};

export default Data;
