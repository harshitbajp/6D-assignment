import { useState } from "react";
import "../App.css";
import InputField from "./input-field";
import TextareaField from "./text-area";
import { ERROR_MESSAGES, REGEX_PATTERNS } from "../validation"; 

export default function EmployeeForm() {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    phone: "",
    email: "",
    hobbies: "",
    address: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // Handles input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // console.log("Form Data on Change:", formData); 
  };

  // Validates the form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = ERROR_MESSAGES.firstName;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = ERROR_MESSAGES.lastName;
    }

    // Validating DOB
    if (!formData.dob.trim()) {
      newErrors.dob = ERROR_MESSAGES.dobRequired;
    } else {
      const dobMatch = formData.dob.match(REGEX_PATTERNS.dob);

      if (!dobMatch) {
        newErrors.dob = ERROR_MESSAGES.dobInvalidFormat;
      } else {
        const [day, month, year] = formData.dob.split("/").map(Number);
        const dob = new Date(year, month - 1, day);

        if (
          dob.getDate() !== day ||
          dob.getMonth() !== month - 1 ||
          dob.getFullYear() !== year
        ) {
          newErrors.dob = ERROR_MESSAGES.dobInvalidDate;
        } else {
          const today = new Date();
          if (dob > today) {
            newErrors.dob = ERROR_MESSAGES.dobInFuture;
          } else if (today.getFullYear() - year < 18) {
            newErrors.dob = ERROR_MESSAGES.dobUnderage;
          }
        }
      }
    }

    // Validate phone number (10 digits)
    if (!REGEX_PATTERNS.phone.test(formData.phone)) {
      newErrors.phone = ERROR_MESSAGES.phoneInvalid;
    }

    // Validate email format
    if (!REGEX_PATTERNS.email.test(formData.email)) {
      newErrors.email = ERROR_MESSAGES.emailInvalid;
    }

    // Validate address (required and max length 100 characters)
    if (!formData.address.trim()) {
      newErrors.address = ERROR_MESSAGES.addressRequired;
    } else if (formData.address.length > 100) {
      newErrors.address = ERROR_MESSAGES.addressLength;
    }

    // console.log("Form Validation Errors:", newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data Before Submission:", formData);

    if (validateForm()) {
      alert("Data is saved, Please check the console for the data.");
      console.log("Form Data:", formData);
    } else {
      alert("Mandatory field(s) missing.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          required
        />
        <InputField
          label="Middle Name"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
        <InputField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          required
        />
        <InputField
          label="Date of Birth"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          placeholder="DD/MM/YYYY"
          error={errors.dob}
          required
        />
        <InputField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter 10-digit phone number"
          error={errors.phone}
          required
        />
        <InputField
          label="Email ID"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="user@example.com"
          error={errors.email}
          required
        />
        <InputField
          label="Hobbies"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
        />
        <TextareaField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          error={errors.address}
          required
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
