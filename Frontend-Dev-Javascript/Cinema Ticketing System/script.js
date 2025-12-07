/********************************************************************
 * Cinema Ticketing System
 * ------------------------------------------------------------------
 * This program calculates:
 *   - Base ticket price
 *   - Total after student/senior discount
 *   - Final amount after applying service fee (if applicable)
 *
 * Output is printed ONLY in the console.
 ********************************************************************/


// ===== Sample Input Values =====
let showTime = "evening"; // "morning" or "evening"
let isStudent = false;    // Student discount eligibility
let age = 45;             // Age for senior discount
let tickets = 4;          // Number of tickets



/********************************************************************
 * Step 1: Determine Base Ticket Price Per Ticket
 * ------------------------------------------------------------------
 *  Morning show  → ₹120
 *  Evening show  → ₹180
 ********************************************************************/
let pricePerTicket = 0;

if (showTime === "morning") {
    pricePerTicket = 120;
} else if (showTime === "evening") {
    pricePerTicket = 180;
}



/********************************************************************
 * Step 2: Calculate Base Price (before any discount)
 ********************************************************************/
let basePrice = pricePerTicket * tickets;



/********************************************************************
 * Step 3: Apply Discounts
 * ------------------------------------------------------------------
 * Student → 10% off
 * Senior (age > 60) → 20% off
 * Only one discount applies (higher priority: senior > student)
 ********************************************************************/
let discountRate = 0;

if (age > 60) {
    discountRate = 20;       // Senior discount
} else if (isStudent) {
    discountRate = 10;       // Student discount
}

let discountedTotal = basePrice - (basePrice * (discountRate / 100));



/********************************************************************
 * Step 4: Apply Service Fee
 * ------------------------------------------------------------------
 * If more than 3 tickets booked → add ₹50 flat fee
 ********************************************************************/
let finalAmount = discountedTotal;

if (tickets > 3) {
    finalAmount += 50; // Add service fee
}



/********************************************************************
 * Step 5: Print Results
 ********************************************************************/
console.log("=== Cinema Ticketing System ===");
console.log("Show Time:", showTime);
console.log("Tickets:", tickets);
console.log("---------------------------------");
console.log("Base Price: ₹" + basePrice);

console.log("Discount Applied:", discountRate + "%");
console.log("Price After Discount: ₹" + discountedTotal.toFixed(2));

if (tickets > 3) {
    console.log("Service Fee Added: ₹50");
}

console.log("Final Amount: ₹" + finalAmount.toFixed(2));
