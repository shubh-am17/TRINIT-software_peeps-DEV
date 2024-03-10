import React from "react";
import "../pages/styles.css"
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="Language Learning Platform" className="logo" />
      </header>
    </div>
  );
}

export default Navbar;
