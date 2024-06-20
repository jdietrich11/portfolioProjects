import React, { useState } from "react";

import "./nav.styles.scss";

import { projectsList } from "../../Assets/information/projectsList.js";

function Nav() {
  const [activeItem, setActiveItem] = useState("To-Do");
  return (
    <div className="Nav">
      {projectsList.map((item) => {
        return (
          <div
            className={activeItem === item ? "ActiveNavItem" : "NavItem"}
            onClick={() => setActiveItem(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Nav;
