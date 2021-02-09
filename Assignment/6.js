// 6. Creating pairs:

// What is the Big O of the following algorithm?
// Explain your answer

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}

// Polynomial Time O(n^k) (O(n^2) in this case)
// Two nested for loops 
