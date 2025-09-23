import './Home.css';

export default function Home () {
  return (
    <section id="home" className="accessibility">
            <h2 className="section-title">
              <span className="section-number"></span> Welcome to the A11Y Sandbox!
            </h2>

            <div className="section-content">
              <div className="subheading">
                <h3>What You'll Find Here and How To Navigate</h3>
              </div>

              <div className="description">
                <p className='home'>
                  Ready to master web accessibility without the snooze factor? You've come to the right place!
                  A11Y Sandbox (that's "accessibility" with the 11 letters between 'a' and 'y'!) teaches you how to build websites that work beautifully for everyone. We're talking interactive examples, practical code snippets, and real-world applications that you can use immediately.
                  No dry theory here – just hands-on learning that actually sticks!
                  </p>
                  <em>Take the scenic route:</em> Use the Next/Back buttons to go section by section for a complete journey through accessibility fundamentals.
                  <em>Jump right in:</em> Use the navigation bar (top left) to dive straight into whatever topic catches your eye – color contrast, screen readers, you name it!
                  Ready to Build a More Inclusive Web?
                  Whether you're a coding newbie or a seasoned pro, you'll discover that great accessibility is like great design – when done right, it's invisible but makes all the difference.
                  <p className='home'>
                  Let's get started! 🚀
                </p>
              </div>
            </div>
          </section>
  );
}