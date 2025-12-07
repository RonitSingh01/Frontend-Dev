function processOrder() {
    const billElement = document.getElementById("bill");

    try {
        // Read values
        let price = document.getElementById("price").value;
        let quantity = document.getElementById("quantity").value;
        let delivery = document.getElementById("day").value;

        // Convert to numbers
        price = Number(price);
        quantity = Number(quantity);
        delivery = Number(delivery);

        // Validate numbers
        if (isNaN(price) || isNaN(quantity)) {
            throw "Price and Quantity must be valid numbers!";
        }

        if (delivery < 1 || delivery > 7 || isNaN(delivery)) {
            throw "Delivery day must be between 1 and 7!";
        }

        // Convert delivery number → day name
        let dayName;
        switch (delivery) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default: dayName = "Invalid";
        }

        // Compute total using for loop
        let total = 0;
        for (let i = 0; i < quantity; i++) {
            total += price;
        }

        // debugger statement (for inspection)
        debugger;

        // Apply discount
        let discountRate = 0;

        if (total === 2000) {
            discountRate = 0.15;
        } else if (total >= 1000 && total < 2000) {
            discountRate = 0.10;
        }

        let discountAmount = total * discountRate;
        let finalAmount = total - discountAmount;

        // Display bill
        billElement.innerHTML = `
            Total Price (Before Discount): ₹${total}<br>
            Discount Applied: ${discountRate * 100}%<br>
            Discount Amount: ₹${discountAmount}<br>
            Final Bill Amount: ₹${finalAmount}<br>
            Delivery Day: ${dayName}
        `;

    } catch (error) {
        billElement.textContent = "Error: " + error;
    }
}
