import "./Progress.css";

export default function Progress({ currentStep, totalSteps }) {
  return (
    <div className="progress-container" aria-live="polite">
      <p className="progress-text">
        Step {currentStep} of {totalSteps}
      </p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
