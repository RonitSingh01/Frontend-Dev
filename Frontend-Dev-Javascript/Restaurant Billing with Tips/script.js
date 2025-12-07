/********************************************************************
 * Restaurant Billing with Tips
 * ------------------------------------------------------------------
 * Rules:
 *  - GST = 5% of base food cost
 *  - Service tax = 10% if dining in (else 0%)
 *  - If total bill > ₹2000 → recommended tip = 8%
 *
 * Must display:
 *   1. Base amount
 *   2. Tax details
 *   3. Tip amount
 *   4. Final total (rounded to 2 decimals)
 ********************************************************************/


// ===== Sample Input Values =====
let baseCost = 2200;       // Base food cost entered by user
let isDiningIn = true;      // true = dining in, false = takeaway



/********************************************************************
 * Step 1: Calculate GST (5%)
 ********************************************************************/
let gst = baseCost * 0.05;



/********************************************************************
 * Step 2: Calculate Service Tax (10% only if dining in)
 ********************************************************************/
let serviceTax = 0;

if (isDiningIn === true) {
    serviceTax = baseCost * 0.10;
}



/********************************************************************
 * Step 3: Calculate Subtotal (before tips)
 ********************************************************************/
let subtotal = baseCost + gst + serviceTax;



/********************************************************************
 * Step 4: Recommended Tip (8%) if subtotal > ₹2000
 ********************************************************************/
let tip = 0;

if (subtotal > 2000) {
    tip = subtotal * 0.08;
}



/********************************************************************
 * Step 5: Final Total Amount
 ********************************************************************/
let finalTotal = subtotal + tip;



/********************************************************************
 * Step 6: Print Full Summary
 ********************************************************************/
console.log("=== Restaurant Billing Summary ===");
console.log("Base Food Cost: ₹" + baseCost);
console.log("--------------------------------------");
console.log("GST (5%): ₹" + gst.toFixed(2));
console.log("Service Tax (10% if dining in): ₹" + serviceTax.toFixed(2));
console.log("Subtotal (before tip): ₹" + subtotal.toFixed(2));
console.log("--------------------------------------");
console.log("Tip (8% if total > ₹2000): ₹" + tip.toFixed(2));
console.log("--------------------------------------");
console.log("Final Total Bill: ₹" + finalTotal.toFixed(2));
