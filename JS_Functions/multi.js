/*
 * Question 6: Create a prototype chain: Person -> Faculty -> Professor. [cite: 21, 22, 23]
 * Each should have its own property and method. [cite: 24]
 * Show how a Professor object can access all methods up the chain. [cite: 25]
 */

console.log("--- Question 6 Output ---");

// --- Level 1: Person ---
function Person(name) {
    this.name = name; // Own property [cite: 24]
}
Person.prototype.getName = function() { // Own method [cite: 24]
    console.log(`Name: ${this.name}`);
};

// --- Level 2: Faculty (inherits from Person) --- [cite: 22]
function Faculty(name, department) {
    Person.call(this, name); // Call parent constructor
    this.department = department; // Own property [cite: 24]
}
// Link prototype chain
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.getDepartment = function() { // Own method [cite: 24]
    console.log(`Department: ${this.department}`);
};

// --- Level 3: Professor (inherits from Faculty) --- [cite: 23]
function Professor(name, department, subject) {
    Faculty.call(this, name, department); // Call parent constructor
    this.subject = subject; // Own property [cite: 24]
}
// Link prototype chain
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getSubject = function() { // Own method [cite: 24]
    console.log(`Subject: ${this.subject}`);
};

// --- Demonstration --- [cite: 25]
console.log("Creating a Professor object:");
const prof = new Professor("Dr. Evans", "Physics", "Thermodynamics");

// Show how the Professor object can access all methods up the chain [cite: 25]
console.log("Accessing methods up the chain:");

// 1. Method from Professor.prototype (own)
prof.getSubject();

// 2. Method from Faculty.prototype (level 2)
prof.getDepartment();

// 3. Method from Person.prototype (level 1)
prof.getName();

// Show the chain with 'instanceof'
console.log("Checking 'instanceof':");
console.log(prof instanceof Professor); // true
console.log(prof instanceof Faculty);   // true
console.log(prof instanceof Person);    // true

console.log("-------------------------");