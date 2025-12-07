/*
Q3 - Bug Tracker: Callback to Promise Migration
Task: Modernize the Bug Tracker
*/

/*
Original function:
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}
*/

/**
 * Convert it into a Promise-based version named getBugs().
 * Simulate random API failure.
 */
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate random API failure (30% chance)
      const didFail = Math.random() < 0.3;

      if (didFail) {
        reject("Failed to fetch bugs from API.");
      } else {
        const bugs = ["UI glitch", "API timeout", "Login failure"];
        resolve(bugs);
      }
    }, 1000);
  });
}

// --- Usage ---
getBugs()
  .then((bugs) => {
    // Log all bugs neatly using console.table()
    console.log("Bugs found:");
    console.table(bugs);
  })
  .catch((error) => {
    // Handle it using .catch()
    console.error("Error fetching bugs:");
    console.error(error);
  });