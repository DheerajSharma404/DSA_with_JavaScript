//*************** QUESTION ***************/

/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of anotherm such as cinema, formed from iceman. */
//*************** EXAMPLE ***************/
/**
 * validAnagram("","") => true
 * validAnagram("aaz","zza") => false
 * validAnagram("anagram","nagaram") => true
 * validAnagram("rat","car") => false
 * validAnagram("awesome","awesom") => false
 * validAnagram("qwerty","qeywrt") => true
 * validAnagram("texttwisttime","timetwisttext") => true
 */

//*************** SOLUTION'S ***************/

//****** BRUTE FORCE *******/

//! TIME_COMPLEXITY = O(N^2)
//! SPACE_COMPLEXITY = O(1)
const isValidAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;

  for (let val of str1) {
    let correctIndex = str2.indexOf(val);
    if (correctIndex === -1) {
      return false;
    }
    str2 = str2.slice(0, correctIndex) + str2.slice(correctIndex + 1);
  }

  return true;
};

console.log(isValidAnagram("", ""));
console.log(isValidAnagram("awesome", "awesomp"));
console.log(isValidAnagram("texttwisttime", "timetwisttext"));
console.log(isValidAnagram("rat", "car"));
console.log(isValidAnagram("qwerty", "qeywrt"));

//****** FREQUENCY COUNTER PATTERN ( ONE WAY OF SOLVING THE QUESTION) *******/

//! TIME_COMPLEXITY = O(N)
//! SPACE_COMPLEXITY = O(N)
// Type definition for frequency counter.
type FrequencyCounter2 = { [key: string]: number };
const isValidAnagram2 = (str1: string, str2: string): boolean => {
  // Check if they are of equal length.
  if (str1.length !== str2.length) return false;

  // Create to object to maintaine there counts.
  let frequencyCounter1: FrequencyCounter2 = {};
  let frequencyCounter2: FrequencyCounter2 = {};

  // Populate the frequecy counter.
  // How does the "OR" works?
  // OR will return the oprand1 if its truthy value.
  //And if oprand1 is falsy value it reutrn the oparand2.
  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // Check if the key exist or not
  // And if it does check if the frequency is same of not.
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(isValidAnagram2("", ""));
console.log(isValidAnagram2("awesome", "awesom"));
console.log(isValidAnagram2("texttwisttime", "timetwisttext"));
console.log(isValidAnagram2("rat", "car"));
console.log(isValidAnagram2("qwerty", "qeywrt"));

//****** FREQUENCY COUNTER PATTERN ( ANOTHER WAY OF SOLVING THE QUESTION) *******/

//! TIME_COMPLEXITY = O(N)
//! SPACE_COMPLEXITY = O(N)
const isValidAnagram3 = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;

  let lookUp: FrequencyCounter2 = {};

  for (let val of str1) {
    lookUp[val] = lookUp[val] ? (lookUp[val] += 1) : (lookUp[val] = 1);
  }

  for (let val of str2) {
    if (!lookUp[val]) {
      return false;
    } else {
      lookUp[val] -= 1;
    }
  }

  return true;
};

console.log(isValidAnagram3("rat", "car"));
console.log(isValidAnagram3("qwerty", "qeywrt"));
console.log(isValidAnagram3("", ""));
