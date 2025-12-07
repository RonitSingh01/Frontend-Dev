// ================================
// Library Fine Calculator
// ================================

function calculateFine() {

    // Read delay values from input field
    let input = document.getElementById("delayInput").value;

    if (!input.trim()) {
        alert("Please enter delay days!");
        return;
    }

    // Convert comma-separated values into an array of numbers
    let daysArray = input.split(",").map(v => parseInt(v.trim()));

    let totalFine = 0;
    let delayCount = daysArray.length;

    let summary = "<h2>Fine Summary</h2>";

    // Loop through all delayed books
    for (let i = 0; i < daysArray.length; i++) {
        let days = daysArray[i];
        let fine = 0;

        // Calculate fine based on delay days
        if (days >= 1 && days <= 5) {
            fine = days * 10;
        } else if (days >= 6 && days <= 10) {
            fine = days * 20;
        } else if (days >= 11) {
            fine = days * 50;
        }

        totalFine += fine;

        summary += `<p>Book ${i + 1}: Delayed ${days} days → Fine = ₹${fine}</p>`;
    }

    // Extra penalty if user has more than 3 delayed books
    let extraPenalty = 0;

    if (delayCount > 3) {
        extraPenalty = 200;
        totalFine += extraPenalty;
        summary += `<p><strong>Extra Penalty (More than 3 delayed books): ₹${extraPenalty}</strong></p>`;
    }

    summary += `<h3>Total Fine: ₹${totalFine}</h3>`;

    document.getElementById("result").innerHTML = summary;
}
