import './Intro.css';

export default function WhyAccess () {
  return (
    <section className="accessibility">

            <div className="section-content">
              <div className="subheading">
                <h3>How do I know that my website is accessible?</h3>
              </div>

              <div className="description">

                <p>
                  The standards that are in place are called WCAG and are organised under four principles,
                  abbreviated as POUR:
                </p>

                <div className='flip-cards'>
                  <div id='perceivable'>
                    <p><em>Perceivable</em></p>
                    <p>Information and user interface components must be presentable to users in ways they can perceive</p>
                  </div>

                    <div id='operable'>
                    <p><em>Operable</em></p>
                    <p>User interface components and navigation must be operable.</p>
                  </div>

                  <div id='understandable'>
                    <p><em>Understandable</em></p>
                    <p>Information and the operation of the user interface must be understandable.</p>
                  </div>

                  <div id='robust'>
                    <p><em>Robust</em></p>
                    <p>Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies</p>
                  </div>


                </div>


              </div>
            </div>
          </section>
  );
}