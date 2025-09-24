import { useState } from "react";
import "./Intro.css";

export default function Intro() {
  // Store flip state for each card
  const [flipped, setFlipped] = useState([false, false, false]);

  const toggleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((f, i) => (i === index ? !f : f))
    );
  };

  return (
    <section id="intro" className="accessibility">
      <h2 className="section-title">
        <span className="section-number">01</span> Introduction
      </h2>

      <div className="section-content">
        <div className="subheading">
          <h3>What is accessibility?</h3>
        </div>

        <div className="description">
          <p>
            Accessible content is content that is available, and its functionality can be
            operated by literally anyone.
          </p>
          <p>
            Disabilities or situations can make it necessary to consider how all
            types of users can best use a product. Challenges / disabilities can
            be categorised as permanent, temporary, and situational.
          </p>

          {/* Flipcards */}
          <div className="flipcards">
            {[
              {
                title: "Permanent",
                text: "Permanent disabilities are disabilities that will not change or get better over a period of time."
              },
              {
                title: "Temporary",
                text: "Temporary disabilities are disabilities that will change or get better over time, such as recovering from a sports injury."
              },
              {
                title: "Situational",
                text: "Situational disabilities are scenarios where one needs accommodations, fo example when using a phone one-handed while holding a baby."
              }
            ].map((card, i) => (
              <div
                key={i}
                className={`flipcard ${flipped[i] ? "flipped" : ""}`}
                onClick={() => toggleFlip(i)}
              >
                <div className="flipcard-inner">
                  <div className="flipcard-front">
                    <h4>{card.title}</h4>
                  </div>
                  <div className="flipcard-back">
                    <p>{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Flipcards end */}
        </div>
      </div>
    </section>
  );
}