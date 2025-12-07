/*
 * Question 4: Create a constructor function Car(brand, model). 
 * Add a prototype method getDetails() that prints car brand and model. 
 * Create two car objects and show method sharing. [cite: 18]
 */

/**
 * Constructor function for creating Car objects.
 * @param {string} brand - The brand of the car.
 * @param {string} model - The model of the car.
 */
function Car(brand, model) {
    // 'this' refers to the new object being created
    this.brand = brand;
    this.model = model;
}

/**
 * Adds a 'getDetails' method to the Car's prototype.
 * All 'Car' instances will share this single method, saving memory.
 */
Car.prototype.getDetails = function() {
    console.log(`Car Details: ${this.brand} ${this.model}`);
};

// --- Demonstration --- [cite: 18]
console.log("--- Question 4 Output ---");

// Create two car objects (instances)
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

// Call the shared method on both objects
car1.getDetails(); // Logs "Car Details: Toyota Camry"
car2.getDetails(); // Logs "Car Details: Honda Civic"

// Show that both objects share the *exact same* function
console.log("Is getDetails shared?");
console.log(car1.getDetails === car2.getDetails); // true

/*
 * **Explanation (as requested [cite: 18]):**
 * The output is 'true', proving that both 'car1' and 'car2' are using the
 * *exact same* 'getDetails' function. This function exists only once on the
 * 'Car.prototype' object, and all instances created from the 'Car'
 * constructor can access it. This is method sharing via the prototype.
 */
console.log("-------------------------");