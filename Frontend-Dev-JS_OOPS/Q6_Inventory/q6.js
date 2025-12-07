
const products = [
 {id:1,name:"Laptop",category:"Electronics",price:50000,stock:5},
 {id:2,name:"Shoes",category:"Fashion",price:2000,stock:50},
 {id:3,name:"Mobile",category:"Electronics",price:15000,stock:2},
 {id:4,name:"T-shirt",category:"Fashion",price:500,stock:100}
];

function getLowStockProducts(){
  return products.filter(p=>p.stock < 10);
}

function sortProductsByPrice(){
  return [...products].sort((a,b)=>a.price-b.price);
}

function calculateTotalInventoryValue(){
  return products.reduce((acc,p)=>acc + p.price*p.stock,0);
}

function groupByCategory(){
  return products.reduce((acc,p)=>{
    if(!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  },{});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
