import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../elements/Logo/Logo";
import ToggleMenu from "../../elements/ToggleMenu/ToggleMenu";
import DesktopMenu from "../../elements/DesktopMenu/DesktopMenu";
import MobileMenu from "../../elements/MobileMenu/MobileMenu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <main className="nav-container">
        <nav className="navbar nav">
          {/* Logo */}
          <Logo />
          {/* Toggle */}
          <ToggleMenu onclick={() => setMenu(!menu)} />
          {/* Mobile Desktop */}
          <DesktopMenu />
          {/* Mobile Menu */}
          {menu && <MobileMenu />}
          {/* Accent */}
          <div className="dot-accent dot-top-left"></div>
          <div className="dot-accent dot-bottom-left"></div>
          <div className="dot-accent dot-top-right"></div>
          <div className="dot-accent dot-bottom-right"></div>
        </nav>
      </main>
    </>
  );
};

export default Navbar;
