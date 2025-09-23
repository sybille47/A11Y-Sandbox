import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import './SectionUserPref.css';

export default function UserPrefs() {
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(true); // start with high contrast
  const [responsive, setResponsive] = useState(true);     // start with responsive

  // build dynamic class names for the section
  const sectionClasses = [
    "accessibility",
    darkMode ? "dark-mode" : "light-mode",
    highContrast ? "high-contrast" : "low-contrast",
    responsive ? "responsive-layout" : "fixed-layout"
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



















// import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
// import './SectionUserPref.css';

// export default function UserPrefs() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [highContrast, setHighContrast] = useState(false);
//   const [responsive, setResponsive] = useState(false);

//   return (
//     <section id="preferences" className="accessibility">
//       <h2 className="section-title">
//           <span className="section-number">03</span> User Preferences
//       </h2>

//     <div className="section-content">
//         <div className="subheading">
//           <h3>Why Your Website Should Be a People-Pleaser (In the Best Way!)</h3>
//         </div>
//       <div className="description">
//         <p>
//           Picture this: you're browsing a website at 2 AM, and BAM! You're suddenly blinded by a stark white background that could probably be seen from space. Sound familiar? This is exactly why catering to user preferences isn't just nice to have—it's essential.
//           Dark mode isn't just trendy; it's a lifesaver for night owls and people with light sensitivity. Meanwhile, responsive design ensures your site doesn't look like it's been through a digital blender when viewed on a phone. And let's not forget about contrast adjustments—because not everyone has eagle eyes, and accessibility shouldn't be an afterthought.
//           When you give users control over their experience, you're essentially saying, "Hey, I care about your comfort!" This translates to longer visits, happier users, and better engagement. Plus, it shows you understand that one size definitely doesn't fit all in the digital world.
//           Think of user preferences as the difference between a restaurant with a fixed menu and one that asks, "How would you like that prepared?" Your users will appreciate the thoughtfulness, and your website will stand out in a sea of rigid, one-size-fits-all designs.
//           The bottom line? Happy users make for successful websites. It's really that simple!
//         </p>
//         <p>
//           <em>The below box shows some of the most common options to accomodate user preferences on websites. Use the toggle to try them out!</em>
//         </p>

//       </div>
//     </div>

//     <div className="user-prefs">
//       <div className="pref-item" onClick={() => setDarkMode(!darkMode)}>
//         <FontAwesomeIcon
//           icon={darkMode ? faToggleOn : faToggleOff}
//           size="2x"
//           color={darkMode ? "#4b5563" : "#9ca3af"}
//         />
//         <span>Dark/Light mode</span>
//       </div>

//       <div className="pref-item" onClick={() => setHighContrast(!highContrast)}>
//         <FontAwesomeIcon
//           icon={highContrast ? faToggleOn : faToggleOff}
//           size="2x"
//           color={highContrast ? "#4b5563" : "#9ca3af"}
//         />
//         <span>High/Low Contrast</span>
//       </div>

//       <div className="pref-item" onClick={() => setResponsive(!responsive)}>
//         <FontAwesomeIcon
//           icon={responsive ? faToggleOn : faToggleOff}
//           size="2x"
//           color={responsive ? "#4b5563" : "#9ca3af"}
//         />
//         <span>Responsive/Fixed Layout Design</span>
//       </div>
//     </div>
//     </section>
//   );
// }
