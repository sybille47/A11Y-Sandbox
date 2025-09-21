import React, { useRef } from "react";
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import ContrastDemo from "./components/SectionVisualAccess/ContrastDemo";
import FormDemo from "./components/SectionVisualAccess/FormDemo";

import './App.css';

import low from './assets/low.png';
import medium from './assets/medium.png';
import high from './assets/low.png';

const IMAGES = [low, medium, high];


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
      <ContrastDemo />
      <FormDemo />


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
