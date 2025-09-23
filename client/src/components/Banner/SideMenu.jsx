// components/SideMenu.js
import React, { useState } from "react";
import "./Banner.css";

export default function SideMenu() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="side-menu">
      <ul>
        <li><a href="#intro">Introduction</a></li>
        <li>
          <button
            className="menu-toggle"
            onClick={() => toggleMenu("visual")}
            aria-expanded={openMenu === "visual"}
          >
            Visual Accessibility
          </button>
          {openMenu === "visual" && (
            <ul className="submenu">
              <li><a href="/#contrast">Contrast</a></li>
              <li><a href="/#forms">Forms</a></li>
            </ul>
          )}
        </li>
        <li><a href="#preferences">User Preferences</a></li>
      </ul>
    </aside>
  );
}
