// Get elements from DOM
const stepsInput = document.getElementById('steps');
const updateBtn = document.getElementById('updateBtn');
const stepsDisplay = document.getElementById('stepsDisplay');
const percentageDisplay = document.getElementById('percentageDisplay');
const statusMessage = document.getElementById('statusMessage');
const statusIcon = document.getElementById('statusIcon');
const statusText = document.getElementById('statusText');
const remainingDisplay = document.getElementById('remaining');
const caloriesDisplay = document.getElementById('calories');
const distanceDisplay = document.getElementById('distance');
const progressCircle = document.getElementById('progressCircle');

// Goal constant
const GOAL = 10000;

// Circle properties for progress animation
const radius = 85;
const circumference = 2 * Math.PI * radius;

// Add event listener
updateBtn.addEventListener('click', updateProgress);

// Allow update on Enter key
stepsInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') updateProgress();
});

function updateProgress() {
    // Get steps value
    const steps = parseInt(stepsInput.value);
    
    // Validate input
    if (!steps || steps < 0) {
        alert('Please enter a valid number of steps!');
        return;
    }
    
    // Update steps display
    stepsDisplay.textContent = steps.toLocaleString();
    
    // Calculate percentage
    const percentage = (steps / GOAL) * 100;
    const percentageCapped = percentage > 100 ? 100 : percentage;
    percentageDisplay.textContent = Math.round(percentage) + '%';
    
    // Update progress circle using comparison operators
    const offset = circumference - (percentageCapped / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    
    // Use TERNARY OPERATOR with comparison to determine status
    // steps >= 10000 ? "Goal Achieved" : "Keep Going"
    const status = steps >= GOAL ? 'achieved' : 'keep-going';
    const message = steps >= GOAL ? 'Goal Achieved! 🎉' : 'Keep Going! 💪';
    const icon = steps >= GOAL ? '✓' : '→';
    
    // Display status message
    statusMessage.className = 'status-message ' + status;
    statusIcon.textContent = icon;
    statusText.textContent = message;
    statusMessage.classList.remove('hidden');
    
    // Calculate remaining steps using comparison and ternary
    const remaining = steps >= GOAL ? 0 : GOAL - steps;
    remainingDisplay.textContent = remaining.toLocaleString();
    
    // Calculate calories (approximate: 0.04 calories per step)
    const calories = Math.round(steps * 0.04);
    caloriesDisplay.textContent = calories;
    
    // Calculate distance (approximate: 0.0008 km per step)
    const distance = (steps * 0.0008).toFixed(2);
    distanceDisplay.textContent = distance;
    
    // Add celebration effect if goal achieved
    if (steps >= GOAL) {
        celebrateGoal();
    }
}

function celebrateGoal() {
    // Add a pulse animation to the progress circle
    progressCircle.style.animation = 'pulse 0.5s ease';
    setTimeout(() => {
        progressCircle.style.animation = '';
    }, 500);
}

// Add pulse animation via style
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);