/*
Q6 - E-Commerce Dashboard: Product Card Fetcher
Task: Fetch and Display Product Data
Use async/await
*/

// Use the Fake Store API
const API_URL = "https://fakestoreapi.com/products";

/**
 * Fetches product data from the Fake Store API and logs it.
 */
async function fetchProducts() {
  console.log("Fetching products...");
  
  // Handle errors using try/catch
  try {
    const response = await fetch(API_URL);

    // Check if the HTTP request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    console.log("--- Products Loaded ---");
    
    // For each product, log details
    products.forEach(product => {
      // Product Title
      console.log(`Product Title: ${product.title}`);
      // Price (with $ prefix)
      console.log(`Price: $${product.price}`);
      // Image URL
      console.log(`Image URL: ${product.image}`);
      console.log("-------------------------");
    });

  } catch (error) {
    console.error("Error fetching data:", error.message);
    // Display "Failed to load products. Please try again."
    console.log("Failed to load products. Please try again.");
  }
}

// Run the function
fetchProducts();