// 11 Tower of Hanoi

{
  /*
    Derive an algorithm to solve the Tower of Hanoi puzzle.
    Implement your algorithm using recursion. Your program 
    should display each movement of the disk from one rod to another.
    If you are given 5 disks, how do the rods look like after 7 recursive calls?
    How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
    What is the runtime of your algorithm? 
*/
}

function hanoi(disks) {
  let result = [];
  if (disks === 0) {
    return;
  } else if (disks === 1) {
    return 1;
  } else {
    for (let i = 2; i <= disks; i++) {
      result.push(i);
    }
  }
  return result;
}

console.log(hanoi(10));
console.log('???');
