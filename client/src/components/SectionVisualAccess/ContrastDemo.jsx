import { useState, useEffect } from "react";
import lowImg from './images/low.png';
import mediumImg from './images/medium.png';
import highImg from './images/high.png';

import "./SectionVisualAccess.css";

const images = [
  { src: lowImg, alt: "Low contrast example", caption: "Contrast ratio of about 2:1" },
  { src: mediumImg, alt: "Medium contrast example", caption: "Contrast ratio of about 4.5:1" },
  { src: highImg, alt: "High contrast example", caption: "Contrast ratio of about 7:1 or higher" },
];

export default function ContrastDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Show popup once per session
  useEffect(() => {
    const shownSlides = JSON.parse(sessionStorage.getItem("shownPopups") || "[]");

    if (!shownSlides.includes(currentIndex)) {
      setShowPopup(true);

      // Mark this slide as shown
      shownSlides.push(currentIndex);
      sessionStorage.setItem("shownPopups", JSON.stringify(shownSlides));

      const timer = setTimeout(() => setShowPopup(false), 2500);
      return () => clearTimeout(timer);
    } else {
      setShowPopup(false);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="contrast" className="accessibility">

    <div className="section-content">
        <h3 className="subheading">Contrast ratios</h3>
      <div className="description">
          <p>
            When designing accessible websites, contrast ratio plays a crucial role in ensuring that text and interactive elements are readable for all users,
            including those with visual impairments.
          </p>
          <h4>What Is Contrast Ratio?</h4>
          <p>
            Contrast ratio is the measure of luminance difference between two
            colors, typically text and its background. It’s expressed as a ratio
            ranging from 1:1 (no contrast, e.g., white on white) to 21:1
            (maximum contrast, e.g., black on white). Higher contrast makes
            content easier to read.
          </p>
          <em>Try the different contrasts by moving the buttons in the carousel.</em>
    </div>
</div>
      <div className="demo-area-carousel" role="region" aria-label="Contrast ratio carousel">
        <div className="carousel" aria-live="polite">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">‹</button>

          <div className="carousel-image">
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
            <p className="sr-only">
              Slide {currentIndex + 1} of {images.length}
            </p>

            {showPopup && <div className="image-popup">{images[currentIndex].caption}</div>}
          </div>

          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">›</button>
        </div>

        {/* Dots navigation */}
        {/* <div className="carousel-dots" role="tablist">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div> */}
      </div>


      <div className="section-content code-content">
        <div className="subheading">
          <h3>How can I find the right contrast ratio?</h3>
        </div>

        <div className="description">
          <p>
            The Web Content Accessibility Guidelines (WCAG) set standards that
            developers and designers must meet to provide inclusive digital
            experiences.
          </p>

          <h4>What Is Contrast Ratio?</h4>
          <p>
            Contrast ratio is the measure of luminance difference between two
            colors, typically text and its background. It’s expressed as a ratio
            ranging from 1:1 (no contrast, e.g., white on white) to 21:1
            (maximum contrast, e.g., black on white). Higher contrast makes
            content easier to read.
          </p>

          <h4>WCAG Requirements</h4>
          <p>
            WCAG 2.1 specifies minimum contrast thresholds to improve
            accessibility:
          </p>
          <ul>
            <li>Normal text: Must have a contrast ratio of at least 4.5:1.</li>
            <li>
              Large text (18pt+ or 14pt bold+): Minimum of 3:1.
            </li>
            <li>
              UI components and graphical objects: At least 3:1 against adjacent
              colors.
            </li>
          </ul>

          <h4>AAA Level Compliance</h4>
          <div className="contrast-ratios">
            Normal text requires 7:1. <br />
            Large text requires 4.5:1.
          </div>
        </div>
      </div>
    </section>
  );
}
