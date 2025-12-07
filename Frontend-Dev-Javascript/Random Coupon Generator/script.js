// ========================================
// Random Coupon Generator
// ========================================

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Main function to generate a coupon
function generateCoupon() {

    // Step 1: Generate random number between 1 and 100
    let couponNumber = Math.floor(Math.random() * 100) + 1;

    let message = `<h2>Coupon Number: ${couponNumber}</h2>`;

    // Step 2: Determine discount offer
    if (couponNumber <= 30) {
        message += "<p>You won a <strong>10% discount</strong></p>";
    } else if (couponNumber <= 60) {
        message += "<p>You won a <strong>20% discount</strong></p>";
    } else if (couponNumber <= 90) {
        message += "<p>You won a <strong>30% discount</strong></p>";
    } else {
        message += "<p>You won a <strong>50% Mega Offer!</strong></p>";
    }

    // Step 3: Check for prime number bonus
    if (isPrime(couponNumber)) {
        message += `<p style='color: green; font-weight: bold;'>Prime number bonus applied!</p>`;
    }

    // Display output
    document.getElementById("result").innerHTML = message;
}
