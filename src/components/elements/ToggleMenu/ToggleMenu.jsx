import React from "react";
import "./ToggleMenu.scss";

const ToggleMenu = ({ onclick }) => {
  return (
    <main className="toggle" onClick={onclick}>
      <div className="toggle-line"></div>
      <div className="toggle-line"></div>
      <div className="toggle-line"></div>
    </main>
  );
};

export default ToggleMenu;
