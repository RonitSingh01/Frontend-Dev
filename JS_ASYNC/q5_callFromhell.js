/*
Q5 - Frontend Rush: Avoiding Callback Hell
Task: Refactor Callback Hell
5 async stages: design, build, test, deploy, celebrate.
Each stage takes 1 second and logs its step.
*/

// --- Helper Functions ---

/**
 * 1. Implementation using nested callbacks (Callback Hell)
 * @param {string} stepName - Name of the build step.
 * @param {function} callback - The next function to call.
 */
function asyncStepCallback(stepName, callback) {
  setTimeout(() => {
    console.log(`Step complete: ${stepName}`);
    if (callback) {
      callback();
    }
  }, 1000);
}

/**
 * 2. Implementation returning a Promise (for async/await)
 * @param {string} stepName - Name of the build step.
 * @returns {Promise<void>}
 */
function asyncStepPromise(stepName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step complete: ${stepName}`);
      resolve();
    }, 1000);
  });
}

// --- Version 1: Callback Hell ---
console.log("--- Starting Pipeline (Callback Hell) ---");
asyncStepCallback("design", () => {
  asyncStepCallback("build", () => {
    asyncStepCallback("test", () => {
      asyncStepCallback("deploy", () => {
        asyncStepCallback("celebrate", () => {
          console.log("Pipeline finished!");
          
          // Run the async/await version AFTER this one completes
          runAsyncAwaitPipeline(); 
        });
      });
    });
  });
});


// --- Version 2: Async/Await ---
/**
 * Main function to run the async/await pipeline.
 */
async function runAsyncAwaitPipeline() {
  console.log("\n--- Starting Pipeline (Async/Await) ---");
  try {
    // The stages
    await asyncStepPromise("design");
    await asyncStepPromise("build");
    await asyncStepPromise("test");
    await asyncStepPromise("deploy");
    await asyncStepPromise("celebrate");
    console.log("Pipeline finished!");
  } catch (error) {
    console.error("Pipeline failed:", error);
  }
}

/*
Comment on why async/await improves readability:

Async/await provides a much cleaner and more readable syntax.
It allows us to write asynchronous code that looks and behaves like synchronous code.

-   **Callback Hell:** Becomes deeply nested ("pyramid of doom"). It's hard to follow the
    logical order, and error handling for each step is complex (requiring checks
    in every callback).
-   **Async/Await:** The code is flat and linear. The `await` keyword pauses the
    function execution until the Promise resolves, then continues. Error handling
    is centralized using a standard `try/catch` block, just like in synchronous code.
*/

// Note: We call runAsyncAwaitPipeline() inside the final callback of the
// hell version to ensure they run one after the other in the console.