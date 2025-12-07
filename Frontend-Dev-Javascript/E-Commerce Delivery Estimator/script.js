/*******************************************************
 * E-Commerce Delivery Estimator
 * -----------------------------------------------------
 * This script calculates the delivery fee and delivery
 * time based on:
 *  - order amount
 *  - premium membership
 *  - remote delivery location
 *
 * Output is printed ONLY in the console (per instructions).
 *******************************************************/

// ====== Input Variables (Sample Test Values) ======
let orderAmount = 450;     // Amount of the user's order
let isPremium = false;     // Whether user is a premium member
let isRemote = true;       // Whether delivery address is remote


/*******************************************************
 * Step 1: Calculate Delivery Fee
 * -----------------------------------------------------
 * Rules:
 *  - If order < ₹500 → base delivery fee = ₹50
 *  - Premium users → delivery fee is always ₹0
 *******************************************************/
let deliveryFee = 0;  // Default

// If user is NOT premium, check for order amount
if (!isPremium) {
    if (orderAmount < 500) {
        deliveryFee = 50;
    }
}

// If user IS premium → fee remains 0 (automatically applied)


/*******************************************************
 * Step 2: Calculate Total Cost
 * -----------------------------------------------------
 * Total = order amount + delivery fee (if any)
 *******************************************************/
let totalCost = orderAmount + deliveryFee;


/*******************************************************
 * Step 3: Estimate Delivery Time
 * -----------------------------------------------------
 * Rules:
 *  - Base delivery time = 3 days
 *  - If remote area → add 2 extra days
 *******************************************************/
let deliveryTime = 3;  // Normal delivery time

if (isRemote) {
    deliveryTime += 2;  // Add extra time for remote areas
}


/*******************************************************
 * Step 4: Print Results
 *******************************************************/
console.log("=== Delivery Estimator Result ===");
console.log("Order Amount: ₹" + orderAmount);
console.log("Premium Member:", isPremium);
console.log("Remote Location:", isRemote);
console.log("-------------------------------");
console.log("Delivery Fee: ₹" + deliveryFee);
console.log("Total Cost: ₹" + totalCost);
console.log("Estimated Delivery Time:", deliveryTime + " days");
