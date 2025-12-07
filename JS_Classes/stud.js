// Q2: Student Form Validator (Forms + RegExp) 

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("student-form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    // Regular expressions for validation
    const regex = {
        name: /^[A-Za-z\s]+$/, // [cite, 17]
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // [cite, 18]
        phone: /^\d{10}$/, // [cite, 19]
        // Password: at least 1 uppercase, 1 number, 1 special char [cite, 20]
        password: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/
    };

    // Validation function
    function validateInput(input, regex) {
        const errorMsg = input.nextElementSibling;
        if (regex.test(input.value)) {
            input.classList.add("valid"); // [cite: 21]
            input.classList.remove("invalid"); // [cite: 21]
            errorMsg.style.display = "none";
            return true;
        } else {
            input.classList.add("invalid"); // [cite: 21]
            input.classList.remove("valid"); // [cite: 21]
            errorMsg.style.display = "block";
            return false;
        }
    }

    // Add event listeners for real-time validation
    name.addEventListener("input", () => validateInput(name, regex.name));
    email.addEventListener("input", () => validateInput(email, regex.email));
    phone.addEventListener("input", () => validateInput(phone, regex.phone));
    password.addEventListener("input", () => validateInput(password, regex.password));

    // Prevent form submission if invalid
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Run all validations on submit
        const isNameValid = validateInput(name, regex.name);
        const isEmailValid = validateInput(email, regex.email);
        const isPhoneValid = validateInput(phone, regex.phone);
        const isPasswordValid = validateInput(password, regex.password);

        if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
            alert("Registration Successful!");
            form.reset();
            // Clear styles
            [name, email, phone, password].forEach(input => input.classList.remove('valid'));
        } else {
            alert("Please correct the errors in the form.");
        }
    });
});