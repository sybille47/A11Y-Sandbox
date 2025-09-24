import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "../../context/ThemeContext"; // ✅ import global theme
import "./SectionUserPref.css";

export default function PreferencesToggle() {
  const { darkMode, toggleDarkMode } = useTheme(); // ✅ use global context
  const [highContrast, setHighContrast] = useState(true);
  const [responsive, setResponsive] = useState(true);

  const sectionClasses = [
    "accessibility",
    darkMode ? "dark-mode" : "light-mode",
    highContrast ? "high-contrast" : "low-contrast",
    responsive ? "responsive-layout" : "fixed-layout",
  ].join(" ");

  return (
    <section id="prefs" className={sectionClasses}>
      <h2 className="section-title">
        <span className="section-number">03</span> User Preferences
      </h2>

      <div className="section-content">
        <div className="subheading">
          <h3>Why Your Website Should Be a People-Pleaser (In the Best Way!)</h3>
        </div>
        <div className="description">
          <p>
            Picture this: you're browsing a website at 2 AM, and BAM! You're suddenly
            blinded by a stark white background that could probably be seen from space...
            <br />
            When you give users control over their experience, you're essentially saying,
            "Hey, I care about your comfort!" This translates to longer visits, happier users, and better engagement.
            Plus, it shows you understand that one size definitely doesn't fit all in the digital world.
          </p>
          <p>
            <em>
              The below box shows some of the most common options to accommodate user
              preferences on websites. Use the toggle to try them out!
            </em>
          </p>
        </div>
      </div>

      <div className="user-prefs">
        <div className="pref-item" onClick={toggleDarkMode}>
          <FontAwesomeIcon
            icon={darkMode ? faToggleOn : faToggleOff}
            size="2x"
            color={darkMode ? "#4b5563" : "#9ca3af"}
          />
          <span>Dark/Light mode</span>
        </div>

        <div className="pref-item" onClick={() => setHighContrast(!highContrast)}>
          <FontAwesomeIcon
            icon={highContrast ? faToggleOn : faToggleOff}
            size="2x"
            color={highContrast ? "#4b5563" : "#9ca3af"}
          />
          <span>High/Low Contrast</span>
        </div>

        <div className="pref-item" onClick={() => setResponsive(!responsive)}>
          <FontAwesomeIcon
            icon={responsive ? faToggleOn : faToggleOff}
            size="2x"
            color={responsive ? "#4b5563" : "#9ca3af"}
          />
          <span>Responsive/Fixed Layout Design</span>
        </div>
      </div>
    </section>
  );
}