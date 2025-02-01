import React from 'react';
import "../App.css";

function TextareaField({ label, name, value, onChange, error, required }) {
  return (
    <div className="input-group">
      <label className="input-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={`textarea-field ${error ? "input-error" : ""}`}
        maxLength={100}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default TextareaField;
