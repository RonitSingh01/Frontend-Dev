// Get elements from DOM
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');
const subtotalSpan = document.getElementById('subtotal');
const discountSpan = document.getElementById('discount');
const discountSection = document.getElementById('discountSection');
const finalAmountSpan = document.getElementById('finalAmount');

// Add event listener to calculate button
calculateBtn.addEventListener('click', calculateBill);

// Allow calculation on Enter key press
priceInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateBill();
});

quantityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateBill();
});

function calculateBill() {
    // Get input values
    const price = parseFloat(priceInput.value);
    const quantity = parseInt(quantityInput.value);
    
    // Validate inputs
    if (!price || price <= 0) {
        alert('Please enter a valid price!');
        return;
    }
    
    if (!quantity || quantity <= 0) {
        alert('Please enter a valid quantity!');
        return;
    }
    
    // Calculate subtotal using arithmetic operator (multiplication)
    const subtotal = price * quantity;
    
    // Initialize variables for discount and final amount
    let discount = 0;
    let finalAmount = subtotal;
    
    // Check if subtotal is greater than 1000 using comparison operator
    if (subtotal > 1000) {
        // Apply 10% discount using arithmetic operators
        discount = subtotal * 0.10;
        finalAmount = subtotal - discount;
        
        // Show discount section
        discountSection.classList.add('show');
        discountSpan.textContent = `-₹${discount.toFixed(2)}`;
    } else {
        // Hide discount section if not applicable
        discountSection.classList.remove('show');
    }
    
    // Display results
    subtotalSpan.textContent = `₹${subtotal.toFixed(2)}`;
    finalAmountSpan.textContent = `₹${finalAmount.toFixed(2)}`;
    
    // Show result section
    resultDiv.classList.remove('hidden');
}