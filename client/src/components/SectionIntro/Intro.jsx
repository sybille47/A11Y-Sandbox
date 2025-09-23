import './Intro.css';

export default function Intro () {
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
                  Accessible content is available, and its functionality can be operated by literally anyone.

                  Disabilities or situations can make it necessary to consider how all types of users can best use a product.
                  Challenges / disabilities can be categorised as permanent, temporary, and situational.
                </p>
                <p><em>Permanent</em></p>
                  <p>Permanent disabilities are disabilities that will not change or get better over a period of time.</p>
                <p><em>Temporary</em></p>
                  <p>Temporary disabilities are disabilities that will change or get better over time, such as recovering from a sports injury.</p>
                <p><em>Situational</em></p>
                  <p>Situational disabilities are disabilities that
                  wouldn’t normally be called disability, but they are scenarios
                  where one needs similar accommodations as someone with a
                  permanent or temporary disability such as using a phone one-handed while holding a baby.</p>

              </div>
            </div>
          </section>
  );
}