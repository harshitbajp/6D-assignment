# Employee Form Project

## Overview

This is a React-based Employee Form project designed to capture personal details of an employee such as their name, date of birth, phone number, email, hobbies, and address. The form has built-in validation to ensure that the entered data is accurate and follows the correct format.

## Features

- **Form Fields**:
  - First Name
  - Middle Name (Optional)
  - Last Name
  - Date of Birth (DD/MM/YYYY format)
  - Phone Number (10 digits)
  - Email ID
  - Hobbies (Optional)
  - Address (max 100 characters)

- **Validation**:
  - Required fields like First Name, Last Name, Date of Birth, Phone Number, Email ID, and Address.
  - Date of Birth is validated to ensure it's in the correct format and the person is at least 18 years old.
  - Phone Number should be exactly 10 digits.
  - Email ID should follow a standard email format.
  - Address should be within 100 characters.
  
- **Responsive UI**:
  - The form is built to be responsive for different screen sizes.

## Project Structure

/src /components - EmployeeForm.js # The main form component - InputField.js # Reusable component for text inputs - TextareaField.js # Reusable component for textarea

constants.js # Stores validation messages and regex patterns
App.css # CSS for styling
App.js # Main application component
markdown
Copy
Edit

## Dependencies

- **React**: Used to create the form and handle state management.
- **CSS**: For styling the form and ensuring responsiveness.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/employee-form.git
    ```

2. Navigate into the project folder:
    ```bash
    cd employee-form
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and go to `http://localhost:5173` to see the form in action.

## Usage

1. Fill in the required fields (First Name, Last Name, Date of Birth, Phone Number, Email, Address).
2. The form will validate the input and show error messages if any of the fields are missing or incorrect.
3. If the form passes validation, you will see a success message, and the form data will be logged in the console.

## Constants (Configuration)

- **Validation Messages**: Defined in `constants.js` as `ERROR_MESSAGES`. This allows you to easily modify validation messages across the app.
- **Regular Expressions**: Also stored in `constants.js` as `REGEX_PATTERNS` for easy maintenance.
