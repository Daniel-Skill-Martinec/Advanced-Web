//It says to make it in JS so I made it using the Console
let counterValue = 0;

function updateCounter() {
  console.log("Counter: " + counterValue);
}

function increment() {
  counterValue++;
  updateCounter();
}

function decrement() {
  counterValue--;
  updateCounter();
}

function clearCounter() {
  counterValue = 0;
  updateCounter();
}

// Example usage:
increment(); // Counter: 1
increment(); // Counter: 2
decrement(); // Counter: 1
clearCounter(); // Counter: 0
