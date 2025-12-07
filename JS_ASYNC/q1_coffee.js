/*
Q1 - The Startup Morning: Async Coffee Maker
Task: Implement an Asynchronous Coffee Process
Each step should be a function returning a Promise that resolves after 1-2 seconds.
Simulate random failure using Math.random().
*/

/**
 * Helper function to simulate an async operation with random delay and failure.
 * @param {string} taskName - The name of the task (e.g., "Boiling water").
 * @returns {Promise<string>}
 */
function simulateAsyncTask(taskName) {
  return new Promise((resolve, reject) => {
    // Random delay between 1000ms (1s) and 2000ms (2s)
    const delay = Math.floor(Math.random() * 1000) + 1000;

    setTimeout(() => {
      // Simulate a 20% chance of failure
      if (Math.random() < 0.2) {
        reject(`Error: ${taskName} failed!`);
      } else {
        const successMessage = `${taskName} complete.`;
        console.log(successMessage);
        resolve(successMessage);
      }
    }, delay);
  });
}

// Define the three asynchronous steps
const boilWater = () => simulateAsyncTask("Boiling water");
const brewCoffee = () => simulateAsyncTask("Brewing coffee");
const pourInCup = () => simulateAsyncTask("Pouring into cup");

// Use Promise chaining (.then()) to simulate the process
console.log("Starting coffee machine...");

boilWater()
  .then(() => {
    // This .then() runs after boilWater() resolves
    return brewCoffee();
  })
  .then(() => {
    // This .then() runs after brewCoffee() resolves
    return pourInCup();
  })
  .then(() => {
    // This .then() runs after pourInCup() resolves
    // Print logs for each step and finally display: "Coffee ready for the team!"
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    // Use .catch() to handle any failure
    console.error("Coffee preparation failed:");
    console.error(error);
  });