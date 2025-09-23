import { useState } from 'react';
import BadForm from './BadForm';
import GoodForm from './GoodForm';
import formLabel from './images/form_label.png';
import inputTypes from './images/input_types.png';
import requiredFields from './images/required_fields.png';
import errors from './images/errors.png';

import './SectionVisualAccess.css';

export default function FormDemo() {
  const [showGoodForm, setShowGoodForm] = useState(false);

  return (
    <section id="form" className="accessibility">
      <div className="section-content">
      <h3 className="subheading">Input forms</h3>

        <div className="description">
          <p>
            The way input fields are designed and implemented
            can make a big difference for users using screen readers or have impaired mobility.
            f you use the toggle below, you can see two registration form, one without, the other one with accessibility,
            e.g. with screen readers or reduced  mobility considered.

            Highlight the input form, and then activate the screen reader in your browser have it read out to you.
            You can find the screen reader in Safari and Chrome under Edit - Speech - Start speaking.
            Please note: Firefox doesn’t have a screen reader.

            Then try to use the keyboard to access the input form, and enter details.
          </p>
          <p>
            <em>Try the form without accessibility first, then switch to the accessible version.</em>
          </p>
        </div>
      </div>

        <div className="demo-area">
          {showGoodForm ? <GoodForm /> : <BadForm />}
          <button
            onClick={() => setShowGoodForm(!showGoodForm)}
            className="toggle-form-btn"
          >
            {showGoodForm ? "Show Inaccessible Form" : "Show Accessible Form"}
          </button>
        </div>


      <div className="section-content code-content">
        <div className="subheading">
          <h3>How can I make forms more accessible?</h3>
        </div>

        <div className="description">
          <p>
          Ensuring your forms are accessible is essential
          for meeting WCAG 2.2 standards and creating an inclusive experience for all users.
          You can take the below steps to achieve this:
          </p>

          <h4>1. Clear and Associated Labels</h4>
          <p>
            Every form control (input, checkbox, etc.) is paired with a label element that uses htmlFor
            and a matching id. This ensures screen readers can announce what each field is for.
          </p>
          <img className="code-snippets" src={inputTypes} alt="Code snippet showing input form with label" />

          <h4>2. Correct Input Types & Autocomplete</h4>
          <p>
            Using semantic input types (email, password) helps browsers and assistive tech
            validate input. Autocomplete attributes improve usability.
          </p>
          <img className="code-snippets" src={formLabel} alt="Code snippet showing the use of input types such as email or password" />

          <h4>3. Required Fields & Instructions</h4>
          <p>
            Required fields are marked with both a visual indicator (*) and the required attribute. Additional instructions are hidden visually but
            remain available to screen readers via .visually-hidden.
          </p>
          <img className="code-snippets" src={requiredFields} alt="Code snippet showing the use of input types such as email or password" />

          <h4>4. Error Handling with aria-invalid and Alerts</h4>
          <p>
            When a field has an error, it is flagged with aria-invalid="true". Error messages are presented in role="alert",
              ensuring they are read immediately by screen readers.
          </p>
          <img className="code-snippets" src={errors} alt="Code snippet showing the use of input types such as email or password" />
          </div>
      </div>
    </section>
  );
}
