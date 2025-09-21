import { useState, useEffect } from "react";
import lowImg from './images/low.png';
import mediumImg from './images/medium.png';
import highImg from './images/high.png';

import "./SectionVisualAccess.css";

const images = [
  { src: lowImg, alt: "Low contrast example" },
  { src: mediumImg, alt: "Medium contrast example" },
  { src: highImg, alt: "High contrast example" },
];

export default function ContrastDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
    <section className="accessibility">
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
            differentiate in bright or low light conditions.
          </p>
          <p>
            Contrast ratios represent how different one color is from another.
            The greater the difference, the easier the text or element is to
            perceive.
          </p>
          <p>
            <em>Try the impact of different ratios below:</em>
          </p>
        </div>
      </div>

      <div
        className="demo-area"
        role="region"
        aria-label="Contrast ratio carousel"
      >
        <div className="carousel" aria-live="polite">
          <button
            className="carousel-btn prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <div className="carousel-image">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
            />
            <p className="sr-only">
              Slide {currentIndex + 1} of {images.length}
            </p>
          </div>

          <button
            className="carousel-btn next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        {/* Dots navigation */}
        <div className="carousel-dots" role="tablist">
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
        </div>
      </div>
    </section>
  );
}






































// import './SectionVisualAccess.css';


// export default function ContrastDemo () {
//   return (
//     <section className="accessibility">
//             <h2 className="section-title">
//               <span className="section-number">02</span> Visual accessibility
//             </h2>

//             <div className="section-content">
//               <div className="subheading">
//                 <h3>Contrast ratios</h3>
//               </div>

//               <div className="description">
//                 <p>
//                   Color contrast is important for users to distinguish various text
//                   and non–text elements. Higher contrast makes the imagery easier to
//                   see, while low–contrast images may be difficult for some users to
//                   differentiate in bright or low light conditions, such as on a very
//                   sunny day or at night.
//                 </p>
//                 <p>
//                   Contrast ratios represent how different one color is from another,
//                   commonly written as 1:1 or 21:1. The greater the difference is
//                   between the two numbers in the ratio, the greater the difference
//                   in relative luminance between the colors...
//                 </p>
//                 <p>
//                   <em>Try the impact of different ratios below:</em>
//                 </p>
//               </div>
//             </div>

//             <div className="demo-area">
//               <div className="contrast-cards">
//               {/* CAROUSEL SHOULD GO HERE */}
//               </div>
//             </div>
//           </section>
//   );
// }
