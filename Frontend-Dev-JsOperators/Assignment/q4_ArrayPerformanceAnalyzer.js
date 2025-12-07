var scores = [];
for (var i = 0; i < 8; i++) {
  scores.push(Math.floor(Math.random() * 71) + 30);
}
var highest = Math.max(...scores);
var lowest = Math.min(...scores);
var avg = scores.reduce((a,b) => a + b, 0) / scores.length;
var passed = scores.filter(s => s >= 50).length;
console.log('Scores:', scores);
console.log(`Highest: ${highest}, Lowest: ${lowest}, Average: ${avg.toFixed(2)}, Passed: ${passed}`);
