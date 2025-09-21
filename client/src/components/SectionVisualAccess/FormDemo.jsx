import { useState } from 'react';
import BadForm from './BadForm';
import GoodForm from './GoodForm';
import './SectionVisualAccess.css';

export default function FormDemo() {
  const [showGoodForm, setShowGoodForm] = useState(false);

  return (
    <section className="accessibility">
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
            Try the form without accessibility first, then switch to the accessible version.
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
    </section>
  );
}
