import { useState } from 'react';
import './SectionVisualAccess.css';

export default function GoodForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted (accessible form):", inputs);
  };

  return (
    <div className="form-row">
    <div className='form-container'>
    <form onSubmit={handleSubmit} className="input-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
        />


      <div className='checkbox'>
        <label>
          <input
            type="checkbox"
            name="subscribe"
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>
      </div>

      <button className="save-button" type="submit">Save</button>
    </form>
    </div>

    <div className="explanation">
      <p>
        This is a form where accessibility has been considered on different levels:
        1. Screen readers will pick up on the labels and read out what needs to be entered.
        2. The label on the checkbox will also help to determine by sound what the checkbox is for.
        3. The button has a label that clearly mentions the action that will happen.
        4. The prompt is automatically on the first input field, so that the user can directly
        input the details without having to navigate there first. In addition the contrast ratio is higher, which makes the fields easier to make out.
      </p>
    </div>
    </div>
  );
}
