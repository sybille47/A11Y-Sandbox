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
                <strong>Testing tools</strong>
              <ul>
                <li>Tools for automated testing</li>
                <li>Testing: use assistive tools</li>
                <li>AI assistance</li>
                    <li>Dev tools, e.g. contrast checkers https://webaim.org/resources/contrastchecker/</li>
                    <li>Cmd shift c contrast (PC: ctrl shift c)</li>
              </ul>

              <p>
                Testing Library has the guiding principle of: “The more your
                tests resemble the way your software is used, the more
                confidence they can give you.” You can have a rule that if we
                cannot find the element without using getByTestId, then it is
                not an accessible element. The following is an example of a
                test with keyboard and screen reader:
                » You are building a menu element. You know that this
                is an interactive button that opens a list. We can use
                getByRole(“button”). Screen reader reads
                it as a button, and a keyboard user can navigate to it
                •
                Adding accessibility tests such as part of your unit testing
                framework using Axe-chai
                •
                Using static code analysis such as Eslint plugin for JSX to
                check if you are using the correct markup
                •
                For a full page analysis that you can also integrate in
                your CI pipeline:

                » Pa11y
                » Lighthouse -> Chrome, Lighthouse tab score of 0 - 100
                » Axe
                Debugging
                Tools that are already available by default in your browser:
                •
                Accessibility features in Microsoft Edge Dev Tools
                •
                Accessibility features in Google Chrome Dev Tools
                •
                Accessibility features in Firefox’s Developer Tools
                In general, these are used for:
                •
                Checking correct markup and the accessibility tree
                •
                Checking contrast
                •
                Simulating color blindness and low vision


                Test keyboard accessibility
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