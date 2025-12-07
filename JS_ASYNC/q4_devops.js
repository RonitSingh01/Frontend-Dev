/*
Q4 - DevOps Delay: Async Timeout Race
Task: Manage Concurrent Server Responses
*/

/**
 * Helper function to simulate a server response with a specific delay.
 * Simulates random failure.
 * @param {string} serverName - Name of the server.
 * @param {number} delay - Response time in ms.
 * @returns {Promise<string>}
 */
function deployServer(serverName, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate random failure (20% chance)
      if (Math.random() < 0.2) {
        reject(`Deployment failed on ${serverName}`);
      } else {
        resolve(`Deployment complete on ${serverName}`);
      }
    }, delay);
  });
}

// Server A responds in 2 seconds
const serverA = deployServer("Server A", 2000);
// Server B responds in 3 seconds
const serverB = deployServer("Server B", 3000);

// --- Use Promise.all() ---
// Waits for ALL promises to resolve. If any one fails, it rejects immediately.
console.log("--- Starting Promise.all() ---");
Promise.all([serverA, serverB])
  .then((results) => {
    console.log("All results:", results);
    // "Deployment completed for all servers"
    console.log("Deployment completed for all servers");
  })
  .catch((error) => {
    console.error("A server failed deployment (all):", error);
  });

// --- Use Promise.race() ---
// Waits for the FIRST promise to settle (either resolve or reject).
console.log("\n--- Starting Promise.race() ---");
Promise.race([serverA, serverB])
  .then((winner) => {
    // "Fastest response:"
    console.log("Fastest response:", winner);
  })
  .catch((error) => {
    console.error("The fastest server failed deployment (race):", error);
  });