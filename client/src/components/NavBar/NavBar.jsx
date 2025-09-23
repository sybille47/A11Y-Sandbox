import React, { useState } from "react";
import "./NavBar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">A11Y</div>

      {/* Hamburger button */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li><a href="home">Home</a></li>
        <li><a href="tools">Tools & References</a></li>
      </ul>
    </nav>
  );
}
