/*
 * Question 3: Create an object 'user' with a property 'name' and a
 * method 'showName' written as an arrow function. [cite: 14, 15]
 * Log the output and explain why this.name is undefined. Then fix it. [cite: 16]
 */

console.log("--- Question 3 Output ---");

// --- Part 1: The Problem with Arrow Function ---

const user = {
    name: "Disha",
    showName: () => {
        // 'this' in an arrow function is not bound to the 'user' object.
        // Instead, it's inherited from the surrounding (lexical) scope.
        // In a browser, this is typically the global 'window' object.
        console.log("Using arrow function:");
        console.log(this.name); // Will log 'undefined' (or window.name)
    }
};

user.showName(); // Logs undefined

/*
 * **Explanation (as requested [cite: 16]):**
 * The output is 'undefined' because arrow functions do not have their own 'this'
 * context. They inherit 'this' from the parent scope (the "lexical scope").
 * In this case, the 'user' object is created in the global scope. The 'this'
 * inside the arrow function refers to the global object (e.g., 'window' in a 
 * browser), which does not have a 'name' property.
 */

// --- Part 2: The Fix using a Normal Function --- [cite: 16]

const fixedUser = {
    name: "Disha (Fixed)",
    
    // Fix: Use a normal function (or the method shorthand)
    // A normal function's 'this' is determined by how it is *called*.
    // When called as 'fixedUser.showName()', 'this' is bound to 'fixedUser'.
    showName: function() {
        console.log("Using normal function (fix):");
        console.log(this.name); // Will log "Disha (Fixed)"
    }
    
    // Shorthand method syntax also works:
    // showName() {
    //     console.log(this.name);
    // }
};

fixedUser.showName(); // Logs "Disha (Fixed)"

console.log("-------------------------");