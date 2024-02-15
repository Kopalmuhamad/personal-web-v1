import React from "react";
import "./Header.scss";

import Data from "./Data/Data";
import Image from "./Image/Image";

const Header = () => {
  return (
    <header className="header">
      <Data />
      <Image />
    </header>
  );
};

export default Header;
