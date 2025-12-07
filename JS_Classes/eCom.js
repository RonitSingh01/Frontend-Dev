// Q1: E-Commerce Product Manager (Classes + Objects) 

class Product {
    constructor(id, name, price, category) {
        this.id = id; [cite,8]
        this.name = name; [cite,8]
        this.price = price; [cite,8]
        this.category = category; [cite,8]
    }

    // Method to apply a discount [cite,11]
    applyDiscount(percentage) {
        if (percentage > 0 && percentage < 100) {
            this.price -= this.price * (percentage / 100);
            console.log(`Applied ${percentage}% discount. New price for ${this.name}: ${this.price}`);
        } else {
            console.log("Invalid discount percentage.");
        }
    }

    // Method to display product details [cite: 12]
    displayDetails() {
        return `ID: ${this.id}\nName: ${this.name}\nPrice: $${this.price}\nCategory: ${this.category}`;
    }
}

// Create multiple product objects and store them in an array [cite: 13]
const products = [
    new Product(1, "Laptop", 1200, "Electronics"),
    new Product(2, "Smartphone", 800, "Electronics"),
    new Product(3, "Coffee Maker", 150, "Appliances"),
    new Product(4, "Headphones", 1100, "Electronics"),
    new Product(5, "Office Chair", 250, "Furniture")
];

// Apply a discount to one product
products[0].applyDiscount(10); // Apply 10% discount to Laptop [cite: 11]

// Display all product details in console
console.log("--- ALL PRODUCTS ---");
products.forEach(product => {
    console.log(product.displayDetails()); [cite, 12]
    console.log("--------------------");
});

// Display products with price > 1000 [cite, 14]
console.log("--- PRODUCTS WITH PRICE > 1000 ---");
const expensiveProducts = products.filter(product => product.price > 1000); [cite, 14]

let outputString = "";
expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
    outputString += product.displayDetails() + "\n--------------------\n";
});

// Display filtered results on the HTML page
document.getElementById("output").textContent = outputString;