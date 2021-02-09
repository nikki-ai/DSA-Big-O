// 2. Even or odd

// What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Constant time O(1), This is only performing simple arithmetic
// without the use of for loops 