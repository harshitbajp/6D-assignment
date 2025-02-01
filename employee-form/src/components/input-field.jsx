import React from 'react';
import "../App.css";

// This component is common for both mandatory and optional fields, and is decided by the required prop.
function InputField({ label, name, value, onChange, placeholder, error, required }) {
    return (
      <div className="input-group">
        <label className="input-label">
        {/* this line is for the required field */}
          {label} {required && <span className="required">*</span>}   
        </label>
        <input 
          type="text" 
          name={name} 
          value={value} 
          onChange={onChange} 
          placeholder={placeholder} 
          className={`input-field ${error ? 'input-error' : ''}`} 
        />
        {error && <p className="error-message">{error}</p>}
      </div>
    );
  }

export default InputField;