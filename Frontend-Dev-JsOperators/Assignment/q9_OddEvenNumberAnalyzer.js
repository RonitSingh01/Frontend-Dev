var results = [];
for (var i = 1; i <= 30; i++) {
  if (i % 15 === 0) {
    results.push('FizzBuzz');
  } else if (i % 2 === 0) {
    results.push('Even');
  } else {
    results.push('Odd');
  }
}
console.log(results);
