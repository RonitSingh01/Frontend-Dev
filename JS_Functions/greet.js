/*
 * Question 1: Write a function greetUser(name, callback) that prints "Hello <name>"
 * and then executes a callback function showEndMessage() which prints "Welcome to the course!".
 * 
 */

/**
 * The callback function to be executed after the greeting.
 */
function showEndMessage() {
    console.log("Welcome to the course!");
}

/**
 * Greets the user and then executes a callback.
 * @param {string} name - The name of the user to greet.
 * @param {function} callback - The function to execute after greeting.
 */
function greetUser(name, callback) {
    // Print the greeting message
    console.log(`Hello ${name}`);
    
    // Execute the callback function
    callback();
}

// Demonstrate the callback flow as requested [cite: 8]
console.log("--- Question 1 Output ---");
greetUser("Disha", showEndMessage);
console.log("-------------------------");