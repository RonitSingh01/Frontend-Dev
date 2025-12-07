var count = 0;
function increment() {
  count++;
  console.log('Count:', count);
}
function decrement() {
  count--;
  console.log('Count:', count);
}
function simulateClicks() {
  increment();
  increment();
  decrement();
}
simulateClicks();
