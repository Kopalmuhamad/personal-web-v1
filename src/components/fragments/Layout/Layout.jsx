import React from "react";
import "./Layout.scss";

const Layout = ({children}) => {
  return <section className="container">{children}</section>;
};

export default Layout;
