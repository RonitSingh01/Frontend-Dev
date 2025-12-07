// Get elements from DOM
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');
const bmiValueSpan = document.getElementById('bmiValue');
const categoryDiv = document.getElementById('category');
const infoTextDiv = document.getElementById('infoText');
const progressBar = document.getElementById('progressBar');

// Add event listener to calculate button
calculateBtn.addEventListener('click', calculateBMI);

// Allow calculation on Enter key press
weightInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateBMI();
});

heightInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateBMI();
});

function calculateBMI() {
    // Get input values
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    
    // Validate inputs
    if (!weight || weight <= 0) {
        alert('Please enter a valid weight!');
        return;
    }
    
    if (!height || height <= 0) {
        alert('Please enter a valid height!');
        return;
    }
    
    // Calculate BMI using arithmetic operators
    // BMI = weight / (height * height)
    const bmi = weight / (height * height);
    
    // Round BMI to 1 decimal place
    const bmiRounded = Math.round(bmi * 10) / 10;
    
    // Display BMI value
    bmiValueSpan.textContent = bmiRounded;
    
    // Determine category and info using comparison operators
    let category = '';
    let categoryClass = '';
    let info = '';
    
    if (bmi < 18.5) {
        // Underweight
        category = 'Underweight';
        categoryClass = 'underweight';
        info = 'You may need to gain weight. Consider consulting with a healthcare provider for personalized advice.';
    } else if (bmi >= 18.5 && bmi < 25) {
        // Normal weight
        category = 'Normal Weight';
        categoryClass = 'normal';
        info = 'Great! You have a healthy weight. Maintain your current lifestyle with balanced diet and regular exercise.';
    } else if (bmi >= 25 && bmi < 30) {
        // Overweight
        category = 'Overweight';
        categoryClass = 'overweight';
        info = 'You may benefit from losing some weight. Consider a balanced diet and regular physical activity.';
    } else {
        // Obese (bmi >= 30)
        category = 'Obese';
        categoryClass = 'obese';
        info = 'Your health may be at risk. Please consult with a healthcare provider for guidance on weight management.';
    }
    
    // Update category display
    categoryDiv.textContent = category;
    categoryDiv.className = 'category ' + categoryClass;
    
    // Update info text
    infoTextDiv.textContent = info;
    
    // Update progress bar position
    // Calculate position on the bar (0-40 BMI range mapped to 0-100%)
    let barPosition = (bmi / 40) * 100;
    if (barPosition > 100) barPosition = 100;
    progressBar.style.setProperty('--bmi-position', barPosition + '%');
    
    // Show result section with animation
    resultDiv.classList.remove('hidden');
}