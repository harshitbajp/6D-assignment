export const ERROR_MESSAGES = {
    firstName: "First Name is required",
    lastName: "Last Name is required",
    dobRequired: "Date of Birth is required",
    dobInvalidFormat: "Please enter a valid Date of Birth in DD/MM/YYYY format",
    dobInvalidDate: "Invalid Date. Please check the day, month, and year.",
    dobInFuture: "Date of Birth cannot be in the future",
    dobUnderage: "You must be at least 18 years old",
    phoneInvalid: "Phone must be 10 digits",
    emailInvalid: "Invalid Email format",
    addressRequired: "Address is required",
    addressLength: "Address must be within 100 characters",
  };
  
  export const REGEX_PATTERNS = {
    dob: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, // Validates DD/MM/YYYY format
    phone: /^\d{10}$/, // Validates 10-digit phone number
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Validates email format
  };
  