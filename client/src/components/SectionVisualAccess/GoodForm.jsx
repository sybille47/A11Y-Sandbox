import { useState } from 'react';
import './GoodForm.css';

export default function GoodForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    subscribe: false,
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStatusMessage("Form submitted successfully!");
      // continue with your API call here
    } else {
      setStatusMessage("Please fix the errors in the form.");
    }
  };

  return (
    <div className="form-row">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="input-form" noValidate>

          {/* Email field */}
          <div className="form-group">
            <label htmlFor="email">Email address <span aria-hidden="true">*</span></label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Please enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              aria-describedby="email-desc"
              aria-invalid={errors.email ? "true" : "false"}
              autoComplete="email"
            />
            <p id="email-desc" className="visually-hidden">
              Enter a valid email address (e.g. name@example.com).
            </p>
            {errors.email && (
              <p className="error" role="alert">{errors.email}</p>
            )}
          </div>

          {/* Password field */}
          <div className="form-group">
            <label htmlFor="password">Password <span aria-hidden="true">*</span></label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Please enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
              aria-describedby="password-desc"
              aria-invalid={errors.password ? "true" : "false"}
              autoComplete="current-password"
            />
            <p id="password-desc" className="visually-hidden">
              Password must be at least 8 characters long.
            </p>
            {errors.password && (
              <p className="error" role="alert">{errors.password}</p>
            )}
          </div>

          <div className="form-group checkbox">
            <input
              id="subscribe"
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            <label htmlFor="subscribe">Subscribe to newsletter</label>
          </div>

          <button className="save-button" type="submit">
            Save to register your details
          </button>

          <div
            className="status-message"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {statusMessage}
          </div>
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