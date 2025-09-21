import rating from './rating.png'
import './Intro.css';

export default function Rating () {
  return (
    <section className="accessibility">

            <div className="section-content">
              <div className="subheading">
                <h3>Accessibility rating of websites</h3>
              </div>

              <div className="description">

                <p>The level of conformance can be determined with success criteria:</p>
                <img src={rating} alt="Accessibility rating from A - low to AA - medium to AAA - highest level of accessiblity features" />
                <p>We will see in examples on the next slides what the differences are.</p>
              </div>
            </div>
          </section>
  );
}