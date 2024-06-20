import React from "react";

import "./header.styles.scss";

import Nav from "../navigation/nav";

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="Header">
        <div>Portolio Projects</div>
      </div>
      <Nav />
    </div>
  );
}

export default Header;
