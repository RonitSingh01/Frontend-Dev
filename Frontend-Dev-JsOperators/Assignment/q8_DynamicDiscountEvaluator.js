const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];
var total = 0;
cart.forEach(product => {
  if (product.category === "electronics") {
    total += product.price * 0.9;
  } else if (product.category === "fashion") {
    total += product.price * 0.95;
  } else {
    total += product.price;
  }
});
if (total > 50000) {
  total *= 0.95;
}
console.log('Final Total:', total.toFixed(2));
    