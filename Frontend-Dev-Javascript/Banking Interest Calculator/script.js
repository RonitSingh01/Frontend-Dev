/***************************************************************
 * Banking Interest Calculator
 * -------------------------------------------------------------
 * This program calculates the final balance after a certain
 * number of years based on:
 *   - Account type (Savings or Fixed Deposit)
 *   - Deposit amount
 *   - Applicable interest rate rules
 * 
 * Output is printed ONLY in the console.
 ***************************************************************/


// ===== Input Variables (Sample Values) =====
let accountType = "savings";   // "savings" or "fd"
let amount = 120000;           // Initial deposit
let years = 5;                 // Duration in years



/****************************************************************
 * Step 1: Determine Base Interest Rate
 * --------------------------------------------------------------
 * Rules:
 *  - Savings account → 4%
 *  - Fixed deposit → 6.5%
 ****************************************************************/
let rate = 0;

if (accountType === "savings") {
    rate = 4;
} else if (accountType === "fd") {
    rate = 6.5;
}



/****************************************************************
 * Step 2: Apply Bonus Interest
 * --------------------------------------------------------------
 * If deposit > ₹1,00,000 → +1% extra interest
 ****************************************************************/
if (amount > 100000) {
    rate += 1;
}



/****************************************************************
 * Step 3: Calculate Final Balance
 * --------------------------------------------------------------
 * Formula:
 *   total = amount * Math.pow((1 + rate/100), years)
 *
 * Math.pow(a, b) = a raised to the power b
 ****************************************************************/
let total = amount * Math.pow((1 + rate / 100), years);



/****************************************************************
 * Step 4: Print Results
 ****************************************************************/
console.log("=== Banking Interest Calculator ===");
console.log("Account Type:", accountType);
console.log("Initial Amount: ₹" + amount);
console.log("Interest Rate Applied:", rate + "%");
console.log("Years:", years);
console.log("-----------------------------------");
console.log("Final Balance: ₹" + total.toFixed(2));   // Rounded to 2 decimals
