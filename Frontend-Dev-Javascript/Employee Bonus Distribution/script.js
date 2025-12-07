/********************************************************************
 * Employee Bonus Distribution
 * ------------------------------------------------------------------
 * Rules:
 *   - Rating 5  → 20% bonus
 *   - Rating 4  → 15% bonus
 *   - Rating 3  → 10% bonus
 *   - Rating <3 → 0% bonus
 *
 *   - If experience > 5 years → +5% extra bonus
 *   - If base salary > ₹1,00,000 → bonus is capped at ₹25,000
 *
 * Must print:
 *   - Raw calculated bonus
 *   - Capped final bonus
 *   - Total salary after bonus
 ********************************************************************/


// ===== Sample Input Values =====
let baseSalary = 120000;     // Employee's base annual salary
let rating = 4;              // Performance rating (1–5)
let experience = 7;          // Years of experience



/********************************************************************
 * Step 1: Determine Base Bonus Rate from Rating
 ********************************************************************/
let bonusRate = 0;

if (rating === 5) {
    bonusRate = 20;
} else if (rating === 4) {
    bonusRate = 15;
} else if (rating === 3) {
    bonusRate = 10;
} else {
    bonusRate = 0;  // No bonus for rating below 3
}



/********************************************************************
 * Step 2: Add Extra 5% Bonus for Experience > 5 years
 ********************************************************************/
if (experience > 5) {
    bonusRate += 5;
}



/********************************************************************
 * Step 3: Calculate Raw Bonus Amount
 ********************************************************************/
let rawBonus = (baseSalary * bonusRate) / 100;



/********************************************************************
 * Step 4: Apply Bonus Cap (₹25,000 if salary > 1,00,000)
 ********************************************************************/
let finalBonus = rawBonus;

if (baseSalary > 100000 && rawBonus > 25000) {
    finalBonus = 25000; // Apply cap
}



/********************************************************************
 * Step 5: Total Salary After Bonus
 ********************************************************************/
let totalSalary = baseSalary + finalBonus;



/********************************************************************
 * Step 6: Print Output
 ********************************************************************/
console.log("=== Employee Bonus Distribution ===");
console.log("Base Salary: ₹" + baseSalary);
console.log("Performance Rating:", rating);
console.log("Experience:", experience + " years");
console.log("----------------------------------------");
console.log("Calculated Bonus (Before Cap): ₹" + rawBonus.toFixed(2));
console.log("Final Bonus (After Cap): ₹" + finalBonus.toFixed(2));
console.log("Total Salary After Bonus: ₹" + totalSalary.toFixed(2));
