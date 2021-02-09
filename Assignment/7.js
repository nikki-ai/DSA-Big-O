// 7. Compute the sequence

// What does the following algorithm do?
// What is its runtime complexity? Explain your answer

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

console.log(compute(10));
// This algorithm takes in a number and creates an empty array
// called result. It then loops through comparing the number to 
// 1 to see what the number is. If the number is >= 1 it pushes
// 0 to the result, if the number is >= 2 it pushes 1, 
// otherwise it pushes the ?????????

// Can't figure out what this is doing even after running it
// But it's Linear Time (O(n)) because it only has one for loop
// and it's run time will increase proportionately to the input
// size.
