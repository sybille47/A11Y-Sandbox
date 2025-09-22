import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import './SectionUserPref.css';

export default function UserPrefs() {
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [responsive, setResponsive] = useState(false);

  return (
    <section>
    <div className="user-prefs">
      <div className="pref-item" onClick={() => setDarkMode(!darkMode)}>
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
        <span>High Contrast</span>
      </div>

      <div className="pref-item" onClick={() => setResponsive(!responsive)}>
        <FontAwesomeIcon
          icon={responsive ? faToggleOn : faToggleOff}
          size="2x"
          color={responsive ? "#4b5563" : "#9ca3af"}
        />
        <span>Responsive Design</span>
      </div>
    </div>
    </section>
  );
}
