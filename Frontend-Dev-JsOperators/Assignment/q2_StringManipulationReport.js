var product = " wireless headphones PRO ".trim().toLowerCase();
product = product.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
product = product.replace('Pro', 'Pro Edition');
console.log('Cleaned Title:', product);
console.log('Length:', product.length);
