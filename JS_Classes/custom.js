// Q4: Custom Form Builder (Forms + Classes) 

class FormBuilder {
    constructor(containerId, fields) {
        this.container = document.getElementById(containerId);
        this.fields = fields;
        this.formElement = null;
        this.outputElement = document.getElementById('form-data-output');
    }

    // Method to create and render the form using innerHTML [cite: 29]
    render() {
        let formHTML = '<form id="dynamic-form">';

        this.fields.forEach(field => {
            // Use 'name' attribute from label, simplified for object key
            const fieldName = field.label.toLowerCase(); 
            
            formHTML += `
                <div class="dynamic-form-group">
                    <label for="${fieldName}">${field.label}:</label>
                    <input type="${field.type}" id="${fieldName}" name="${fieldName}">
                </div>
            `;
        });

        formHTML += '<button type="submit" id="dynamic-submit-btn">Submit</button>';
        formHTML += '</form>';

        this.container.innerHTML = formHTML;
        
        // Store form element after rendering
        this.formElement = this.container.querySelector('#dynamic-form');
        
        // Add submit event listener
        this.formElement.addEventListener('submit', this.handleSubmit.bind(this));
    }

    // Method to get form data as an object [cite: 31]
    getFormData() {
        const formData = new FormData(this.formElement);
        const dataObject = {};
        
        formData.forEach((value, key) => {
            dataObject[key] = value;
        });
        
        return dataObject;
    }

    // Handle form submission
    handleSubmit(event) {
        event.preventDefault();
        const formData = this.getFormData();
        
        console.log("Form Data:", formData);
        
        // Display data in the <pre> tag
        this.outputElement.textContent = JSON.stringify(formData, null, 2);
    }
}

// Define the fields for the form [cite: 29]
const myFormFields = [
    { type: 'text', label: 'Username' },
    { type: 'email', label: 'Email' },
    { type: 'password', label: 'Password' }
];

// Initialize and render the form
const builder = new FormBuilder('form-container', myFormFields);
builder.render();