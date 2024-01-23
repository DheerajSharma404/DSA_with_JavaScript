//*************** QUESTION ***************/

/* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
 */

//*************** EXAMPLE ***************/
/**
 * countUniqueValues([1,1,1,1,1,1,1,2]) => 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) => 7
 * countUniqueValue([]) => 0
 * countUniqueValues([-2, -1,-1,0,1]) => 4
 */

//*************** SOLUTION'S ***************/

//****** BRUTE FORCE *******/

//! TIME_COMPLEXITY = O(N)
//! SPACE_COMPLEXITY = O(N)

// We can also create a set out the array and return the size of the set
// Set contains all the unique element.
// Here we are using and addition array  to store the unique element. But we can also use the same array to store the unique element
const iscountUniqueValues = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  let uniqueArray: number[] = []; //
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray.length + 1;
};
console.log(iscountUniqueValues([1, 1, 1, 1, 1, 1, 1, 2]));
console.log(iscountUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(iscountUniqueValues([]));
console.log(iscountUniqueValues([-2, -1, -1, 0, 1]));

//****** MUTLIPLE POINTER PATTERN *******/

//! TIME_COMPLEXITY = O(N)
//! SPACE_COMPLEXITY = O(1)
const iscountUniqueValues2 = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};
console.log(iscountUniqueValues2([1, 1, 1, 1, 1, 1, 1, 2]));
console.log(iscountUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(iscountUniqueValues2([]));
console.log(iscountUniqueValues2([-2, -1, -1, 0, 1]));
