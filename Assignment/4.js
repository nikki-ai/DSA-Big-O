// 4. Doubler

// What is the Big O of the following algorithm?
// Explain your answer

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// Linear Time (O(n)) There's only one for loop