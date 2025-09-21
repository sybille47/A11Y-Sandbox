import React from "react";
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#intro">Introduction</a></li>
        <li><a href="#visual">Visual Accessibility</a></li>
        <li><a href="#preferences">User Preferences</a></li>
        <li><a href="#references">Tools&References</a></li>
      </ul>
    </nav>
  );
}
