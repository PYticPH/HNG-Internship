// Function to update the time display

function updateTime() {
    // Get the current time in milliseconds since the Unix epoch (January 1, 1970)
    const currentTimeMs = new Date().getTime();

    // Select the target HTML element
    const timeElement = document.getElementById('current-time');

    // Check if the element exists before trying to update its content
    if (timeElement) {
        timeElement.textContent = currentTimeMs;
    }
}

// Initial call to display the time immediately
updateTime();

// Set an interval to call the updateTime function every 100 milliseconds (0.1 second)
const intervalId = setInterval(updateTime, 100);


//Form submission handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const successMessageElement = document.querySelector('[data-testid="test-contact-success"]');
    
    // Define the fields to track and validate
    const fields = [
        { name: 'full-name', testId: 'test-contact-name' },
        { name: 'email', testId: 'test-contact-email' },
        { name: 'subject', testId: 'test-contact-subject' },
        { name: 'message', testId: 'test-contact-message' }
    ];

    //Finds and returns the error message element for a given input field name
    const getErrorElement = (fieldName) => {
        // Corrects 'full-name' to 'name' for the data-testid pattern
        const errorField = fieldName.replace('full-name', 'name');
        return document.querySelector(`[data-testid="test-contact-error-${errorField}"]`);
    };

    //Displays a custom error message next to the input field
    const showFieldError = (input) => {
        const errorElement = getErrorElement(input.name);
        if (!errorElement) return;

        let errorMessage = input.validationMessage;

        // Provide user-friendly custom messages based on validity states
        if (input.validity.valueMissing) {
            errorMessage = `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required.`;
        } else if (input.validity.typeMismatch && input.type === 'email') {
            errorMessage = `Please enter a valid email address.`;
        } else if (input.validity.patternMismatch && input.type === 'email') {
            errorMessage = `Please use the format: name@example.com.`;
        } else if (input.validity.tooShort) {
            errorMessage = `Message must be at least ${input.getAttribute('minlength')} characters long.`;
        }

        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block'; 
        input.setAttribute('aria-invalid', 'true');
    };

    //Clears any error messages and resets the input state
    const clearFieldError = (input) => {
        const errorElement = getErrorElement(input.name);
        if (!errorElement) return;

        errorElement.textContent = '';
        errorElement.style.display = 'none';
        input.setAttribute('aria-invalid', 'false');
    };

    // Clears all error and success messages.
    const clearAllMessages = () => {
        fields.forEach(field => {
            const input = document.querySelector(`[data-testid="${field.testId}"]`);
            if (input) clearFieldError(input);
        });
        successMessageElement.style.display = 'none';
        successMessageElement.textContent = '';
    };

    // Live Validation Setup
    fields.forEach(field => {
        const input = document.querySelector(`[data-testid="${field.testId}"]`);
        if (input) {
            // Validate on when user leaves the field
            input.addEventListener('blur', () => {
                if (!input.checkValidity()) {
                    showFieldError(input);
                }
            });
            // Clear or update errors while the user is typing
            input.addEventListener('input', () => {
                if (input.checkValidity()) {
                    clearFieldError(input);
                } else {
                    showFieldError(input);
                }
                // Hide the success message if the user starts typing again
                successMessageElement.style.display = 'none'; 
            });
        }
    });

    // Form Submission Handler
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default browser submission
        
        let isFormValid = true;
        clearAllMessages();

        // Final loop through all fields to perform validation
        fields.forEach(field => {
            const input = document.querySelector(`[data-testid="${field.testId}"]`);
            if (input && !input.checkValidity()) {
                showFieldError(input);
                isFormValid = false;
            }
        });

        // If validation failed, focus on the first invalid field and stop
        if (!isFormValid) {
            const firstInvalid = document.querySelector(':invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }
        
        // Reset the form
        form.reset(); 

        successMessageElement.textContent = 'Thank you! Your message has been sent successfully. ✅';
        successMessageElement.style.display = 'block';
    });
});