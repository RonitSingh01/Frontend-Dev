// Get necessary DOM elements
const form = document.getElementById('registration-form');
const successMessage = document.getElementById('success-message');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

/**
 * Validates a single input field and displays/hides the error message.
 * @param {HTMLElement} input - The input element to validate.
 * @param {HTMLElement} errorDisplay - The error display div.
 * @returns {boolean} True if the field is valid, false otherwise.
 */
function validateField(input, errorDisplay) {
    let errorMessage = '';
    let isValid = true;
    const value = input.value.trim();

    // Reset visual error state
    input.classList.remove('input-error');
    errorDisplay.textContent = '';
    
    if (input.id === 'name') {
        if (value.length === 0) {
            errorMessage = 'Name is required.';
            isValid = false;
        }
    } else if (input.id === 'email') {
        // Email must be required AND must contain @
        if (value.length === 0) {
            errorMessage = 'Email is required.';
            isValid = false;
        } else if (!value.includes('@')) {
            errorMessage = 'Email must contain "@" symbol.';
            isValid = false;
        }
    } else if (input.id === 'password') {
        // Password must be min 6 chars
        if (value.length < 6) {
            errorMessage = 'Password must be at least 6 characters.';
            isValid = false;
        }
    }

    // Display error if invalid
    if (!isValid) {
        errorDisplay.textContent = errorMessage;
        input.classList.add('input-error');
    }

    return isValid;
}

/**
 * Validates the entire form on submission.
 * @param {Event} event - The form submission event.
 */
function handleFormSubmit(event) {
    // Assume form is valid initially
    let formIsValid = true;
    
    // Hide previous success message
    successMessage.style.display = 'none';

    // Validate all fields. We use the boolean AND operator to ensure 
    // all validateField functions run (to show all errors) but the result 
    // correctly captures if ANY of them failed.
    const isNameValid = validateField(nameInput, nameError);
    const isEmailValid = validateField(emailInput, emailError);
    const isPasswordValid = validateField(passwordInput, passwordError);

    formIsValid = isNameValid && isEmailValid && isPasswordValid;

    // Check if form is invalid
    if (!formIsValid) {
        // Instruction: Use preventDefault() to stop form submission
        event.preventDefault(); 
        console.log('Form submission blocked due to validation errors.');
    } else {
        // Form is valid, prevent default submission to simulate success 
        // without actual navigation/reload, and show success message.
        event.preventDefault(); 
        
        // Show success message
        successMessage.style.display = 'block';
        
        // Optional: Clear form fields
        form.reset();
        console.log('Form submitted successfully.');
    }
}

/**
 * Handles live validation as the user types (errors disappear automatically).
 * @param {Event} event - The input event object.
 */
function handleLiveInput(event) {
    const target = event.target;

    if (target === nameInput) {
        validateField(nameInput, nameError);
    } else if (target === emailInput) {
        validateField(emailInput, emailError);
    } else if (target === passwordInput) {
        validateField(passwordInput, passwordError);
    }
}


// Event Listeners
form.addEventListener('submit', handleFormSubmit);

// Instruction: On correcting input errors disappear automatically (live validation)
nameInput.addEventListener('input', handleLiveInput);
emailInput.addEventListener('input', handleLiveInput);
passwordInput.addEventListener('input', handleLiveInput);