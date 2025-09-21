import { useState } from 'react';
import './SectionVisualAccess.css';

export default function BadForm() {
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
    console.log("Submitted (inaccessible form):", inputs);
  };

  return (
    <div className="form-row">
    <div className='form-container'>
    <form onSubmit={handleSubmit} className="input-form">
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button className="save-button" type="submit">Save</button>
    </form>
    </div>

    <div className="explanation">
      <p>
        This is a regular form without considering navigation or input using
        assistive technologies. As there are no labels, the screen reader does
        not read back what the field is for.
        The button is small and very close to the checkbox which can . make it difficult for some users to press it.
        Also note that the contrast between the different items here is very low.
      </p>
    </div>
    </div>
  );
}
