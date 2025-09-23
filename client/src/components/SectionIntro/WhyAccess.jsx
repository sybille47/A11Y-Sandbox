import './Intro.css';

export default function WhyAccess () {
  return (
    <section className="accessibility">

            <div className="section-content">
              <div className="subheading">
                <h3>Why make websites accessible to everyone?</h3>
              </div>
              <div className="description">
                <p>What makes a website good to use for people with disabilities will also benefit people without disabilities on mobile devices, different kinds of browsers or computers.
                    In fact, a lot of innovations that we take for granted today were created for disabled people, e.g. automated captions on video content, created for deaf people, or text to speech, created for the blind.
                    In web design, accessibility improvements create ripple effects of usability. High color contrast ratios help users with visual impairments, but they also make websites more readable in bright sunlight or
                    on older monitors. Clear, simple navigation assists people with cognitive disabilities while making sites easier for anyone to use when they're tired, distracted, or in a hurry. Keyboard navigation supports
                    users who can't use a mouse, but it also benefits power users who prefer keyboard shortcuts.
                    <br />
                    <br />
                    The mobile revolution perfectly illustrates this principle. Many accessibility guidelines – like ensuring touch targets are large enough, providing clear focus indicators, and designing for one-handed use – became essential
                    for mobile usability. The constraints of small screens and touch interfaces pushed designers toward solutions that were already being championed by accessibility advocates.
                    <br />
                    <br />
                    The business case is equally compelling. The global disability market represents over 1.3 billion people with significant spending power. But beyond this direct market, accessible design improves search engine optimization,
                    reduces development costs through cleaner code, and creates more robust products that work across diverse devices and situations.
                </p>
              </div>
            </div>
          </section>
  );
}