// 3. Are you here?

// What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

// Polynomial Time O(n^k) (O(n^2) in this case) 
// because it has 2 For Loops
