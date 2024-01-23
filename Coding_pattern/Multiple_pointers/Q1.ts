//*************** QUESTION ***************/

/* Write a function call sumZero which accepts a sorted array of integers. The function should find the first pair whwere the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. */

//*************** EXAMPLE ***************/
/**
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,0,1,3]) // undefined
 * sumZero([1,2,3]) // undefined
 * sumZero([-4,-3,-2,-1,0,1,2,10]) // [-2,2]
 * sumZero([-4,-3,-2,-1,0,5,-4]) // [-4,4]
 */

//*************** SOLUTION'S ***************/

//****** BRUTE FORCE *******/

//! TIME_COMPLEXITY = O(N^2)
//! SPACE_COMPLEXITY = O(1)
const isSumZero = (arr: number[]): number[] | undefined => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};
console.log(isSumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(isSumZero([-2, 0, 1, 3])); // undefined
console.log(isSumZero([1, 2, 3])); // undefined
console.log(isSumZero([-4, -3, -2, -1, 0, 1, 2, 10])); // [-2,2]
console.log(isSumZero([-4, -3, -2, -1, 0, 5, -4])); // [-4,4]

//****** MULTIPLE POINTER PATTERN *******/

//! TIME_COMPLEXITY = O(N)
//! SPACE_COMPLEXITY =  O(1)

const isSumZero2 = (arr: number[]): number[] | undefined => {
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

console.log(isSumZero2([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(isSumZero2([-2, 0, 1, 3])); // undefined
console.log(isSumZero2([1, 2, 3])); // undefined
console.log(isSumZero2([-4, -3, -2, -1, 0, 1, 2, 10])); // [-2,2]
console.log(isSumZero2([-4, -3, -2, -1, 0, 5, -4])); // [-4,4]
