// components/SideMenu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";

export default function SideMenu() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="side-menu">
      <ul>

        <li>
          <button
            className="menu-toggle"
            onClick={() => toggleMenu("intro")}
            aria-expanded={openMenu === "visual"}
          >
            Introduction
          </button>
            {openMenu === "intro" && (
              <ul className="submenu">
                <li><Link to="/intro">What is accessibility?</Link></li>
                <li><Link to="/why">Why is it important?</Link></li>
                <li><Link to="/how">How?</Link></li>
              </ul>
            )}
      </li>


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
              <li><Link to="/contrast">Contrast</Link></li>
              <li><Link to="/form">Forms</Link></li>
            </ul>
          )}
        </li>



        <li><a href="prefs">User Preferences</a></li>

        <li>
          <button
            className="menu-toggle"
            onClick={() => toggleMenu("stillToCome")}
            aria-expanded={openMenu === "stillToCome"}
          >
            Still to come...
          </button>
          {openMenu === "stillToCome" && (
            <ul className="submenu">
              <li><Link to="/contrast">Menus</Link></li>
              <li><Link to="/form">Images</Link></li>
              <li><Link to="/form">Tables</Link></li>
              <li><Link to="/form">Carousels</Link></li>
              <li><Link to="/form">Buttons & icons</Link></li>
              <li><Link to="/form">Events</Link></li>
              <li><Link to="/form">Contact Forms</Link></li>
              <li><Link to="/form">Audio & Video</Link></li>
              <li><Link to="/form">Assistive technologies</Link></li>
            </ul>
          )}
        </li>



      </ul>
    </aside>
  );
}
