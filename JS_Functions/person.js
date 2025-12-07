/*
 * Question 5: Create a Person constructor (name) and a Student constructor
 * (inherits from Person, adds 'branch'). 
 * Add methods to print name and branch using prototypes. [cite: 20]
 * Demonstrate the prototype chain. [cite: 20]
 */

console.log("--- Question 5 Output ---");

// --- 1. Base Constructor: Person ---
function Person(name) {
    this.name = name;
}

// Add method to Person's prototype [cite: 20]
Person.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
};

// --- 2. Sub-Constructor: Student ---
function Student(name, branch) {
    // Call the parent constructor (Person) to set 'this.name'
    // 'call(this, ...)' executes the 'Person' function with 'this'
    // set to the new Student object.
    Person.call(this, name);
    
    // Add the new property for Student
    this.branch = branch;
}

// --- 3. Link the Prototypes for Inheritance ---

// Create a new object using Person.prototype as its prototype.
// This links Student.prototype to Person.prototype.
Student.prototype = Object.create(Person.prototype);

// Fix the constructor property.
// After the line above, Student.prototype.constructor points to Person.
// We must reset it to point back to Student.
Student.prototype.constructor = Student;

// Add method to Student's prototype [cite: 20]
Student.prototype.printBranch = function() {
    console.log(`Branch: ${this.branch}`);
};

// --- 4. Demonstration --- [cite: 20]
const s1 = new Student("Ravi", "Computer Science");

// Call method from Person.prototype (inherited)
s1.printName(); // Logs "Name: Ravi"

// Call method from Student.prototype
s1.printBranch(); // Logs "Branch: Computer Science"

// Demonstrate the prototype chain works [cite: 20]
console.log("Demonstrating prototype chain:");
console.log(s1 instanceof Student); // true
console.log(s1 instanceof Person);  // true (proves inheritance)
console.log(s1.hasOwnProperty('name')); // true (own property, set by Person.call)
console.log(s1.hasOwnProperty('printName')); // false (it's on the prototype)

console.log("-------------------------");