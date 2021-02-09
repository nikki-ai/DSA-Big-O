// 9. Random element

// What is the Big O of the following algorithm?
// Explain your answer

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Constant time O(1) There's no loops and it's only performing
// Arithmetic