import React, { useRef } from "react";
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import './App.css';

function Section({ id, children, nextRef }) {
  const scrollToNext = () => {
    nextRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id={id}>
      <div>{children}</div>
      {nextRef && <button onClick={scrollToNext}>Next ↓</button>}
    </section>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Banner />

      <section className="visual-accessibility">
        <h2 className="section-title">
          <span className="section-number">02</span> Visual accessibility
        </h2>

        <div className="section-content">
          <div className="subheading">
            <h3>Contrast ratios</h3>
          </div>

          <div className="description">
            <p>
              Color contrast is important for users to distinguish various text
              and non–text elements. Higher contrast makes the imagery easier to
              see, while low–contrast images may be difficult for some users to
              differentiate in bright or low light conditions, such as on a very
              sunny day or at night.
            </p>
            <p>
              Contrast ratios represent how different one color is from another,
              commonly written as 1:1 or 21:1. The greater the difference is
              between the two numbers in the ratio, the greater the difference
              in relative luminance between the colors...
            </p>
            <p>
              <em>Try the impact of different ratios below:</em>
            </p>
          </div>
        </div>

        <div className="demo-area">
          {/* Your interactive contrast demo goes here */}
          <p>🔧 Contrast demo placeholder</p>
        </div>
      </section>

      {/* <section id="user-prefs">
          <h2 className="section-title">
            <span className="section-number">03</span>
            User Preferences
          </h2>
          <div className="section-content">
            <UserPrefs /> {/* 👈 render here */}
      {/* </div> */}
      {/* </section> */}
    </div>
  );
}

export default App;
