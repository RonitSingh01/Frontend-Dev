/*
Q2 - Task Scheduler: Micro vs Macro Challenge
Task: Demonstrate Task Order
*/

// Log "Start"
console.log("Start");

// One setTimeout() callback (macrotask)
setTimeout(() => {
  console.log("Macrotask: setTimeout() callback");
}, 0);

// One resolved Promise.then() callback (microtask)
Promise.resolve().then(() => {
  console.log("Microtask: Promise.then() callback");
});

// One synchronous log
console.log("Synchronous log");

// Finally, log "End"
console.log("End");

/*
Explanation of Execution Order:

1.  **Main Call Stack:**
    * `console.log("Start")` runs.
    * `setTimeout(..., 0)` is called. Its callback is placed in the **Macrotask Queue**.
    * `Promise.resolve().then(...)` is called. Its callback is placed in the **Microtask Queue**.
    * `console.log("Synchronous log")` runs.
    * `console.log("End")` runs.
    * The main script finishes, and the call stack is now empty.

2.  **Event Loop Check:**
    * The Event Loop checks the **Microtask Queue** first. It finds the Promise callback.
    * `console.log("Microtask: Promise.then() callback")` runs.
    * The Microtask Queue is now empty.

3.  **Event Loop Check (Next Tick):**
    * The Event Loop checks the Microtask Queue again (it's empty).
    * It then checks the **Macrotask Queue**. It finds the `setTimeout` callback.
    * `console.log("Macrotask: setTimeout() callback")` runs.

**Final Output:**
Start
Synchronous log
End
Microtask: Promise.then() callback
Macrotask: setTimeout() callback
*/