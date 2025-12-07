/*
 * Question 2: Create a function applyOperation(numbers, operation) that takes 
 * an array and a callback function. 
 * Use it to double and square each number in [1, 2, 3, 4]. [cite: 11, 12]
 */

/**
 * Applies a given operation to each element of an array.
 * @param {number[]} numbers - The array of numbers.
 * @param {function} operation - The callback function to apply to each number.
 * @returns {number[]} A new array with the results of the operation.
 */
function applyOperation(numbers, operation) {
    // Use the built-in map function, which is designed for this exact purpose.
    // It applies the 'operation' callback to every 'num' in the 'numbers' array.
    return numbers.map(operation);
}

// --- Define Callback Operations ---

/**
 * Doubles a number.
 * @param {number} num - The number to double.
 * @returns {number} The doubled number.
 */
function double(num) {
    return num * 2;
}

/**
 * Squares a number.
 * @param {number} num - The number to square.
 * @returns {number} The squared number.
 */
function square(num) {
    return num * num;
}

// --- Demonstration ---
const numbers = [1, 2, 3, 4];

console.log("--- Question 2 Output ---");

// 1. Double each number [cite: 11]
const doubledNumbers = applyOperation(numbers, double);
console.log(`Original: [${numbers}]`);
console.log(`Doubled:  [${doubledNumbers}]`); // Expected: [2, 4, 6, 8]

// 2. Square each number [cite: 12]
const squaredNumbers = applyOperation(numbers, square);
console.log(`Original: [${numbers}]`);
console.log(`Squared:  [${squaredNumbers}]`); // Expected: [1, 4, 9, 16]

console.log("-------------------------");