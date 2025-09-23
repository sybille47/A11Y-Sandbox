import './ToolsRefs.css';

export default function ToolsRefs () {
  return (
    <section id="tools" className="accessibility">
            <h2 className="section-title">
              <span className="section-number">04</span>Tools & References
            </h2>

            <div className="section-content">
              <div className="subheading">
                <h3>Tools</h3>
              </div>

              <div className="description">
              <strong>Tools for testing and debugging</strong>
              <p>
                Most browsers have accessibility tools that are already available by default:
                <br />
                In general, these are used for:
              </p>
              <ul>
                <li>Checking correct markup and the accessibility tree</li>
                <li>Checking contrast</li>
                <li>Simulating color blindness and low vision</li>
              </ul>
              <br />
              <p>
                For a full page analysis that you can also integrate in
                your CI pipeline:
                </p>
                <ul>
                  <li>Pa11y</li>
                  <li>Lighthouse Chrome</li>
                  <li>Axe</li>
                </ul>
                <br />
                <strong>Test keyboard accessibility</strong>
                <p>
                To test if your service is accessible using the keyboard, you
                can try to navigate without your mouse. All available features
                must be accessible.
                Note: the focus must be visible enough on all
                focusable elements.
              </p>
              </div>
            </div>
          </section>
  );
}