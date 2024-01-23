//*************** QUESTION ***************/
/* Write a function called sumZero which accepts a sorted array of integers. The function should find the pair where the sum is O. Return an array that includes both valuses that sum to zero or undefine if a pair does not exist. */
//*************** EXAMPLE ***************/
/**
 * sumZero([-3,-2, -1, 0, 1, 2, 3])  => [-3,3]
 * sumZero([-2, -1, 0,3])  => undefine
 * sumZero([1, 2, 3])  => undefine
 */

//*************** SOLUTION'S ***************/

//****** BRUTE FORCE *******/

//! TIME_COMPLEXITY = O(N^2)
//! SPACE_COMPLEXITY = O(1)
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, -1, 0, 3]));
console.log(sumZero([1, 2, 3]));

//****** MULTIPLE POINTER PATTERN  *******/

//! TIME_COMPLEXITY = O(N)
//! SPACE_COMPLEXITY = O(1)
const sumZero2 = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};
console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero2([-2, -1, 0, 3]));
console.log(sumZero2([1, 2, 3]));
