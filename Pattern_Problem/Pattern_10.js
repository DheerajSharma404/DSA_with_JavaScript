//* Pattern_10:- Given a value n (positive integer), print th following pattern on the screen.

//*  For n = 4

// *
// **
// ***
// ****
// ***
// **
// *

//* For n = 5

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

//*  For n = 9

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

//*********Solution********

const upperComponent = (n) => {
  for (let i = 1; i <= n - 1; i += 1) {
    let str = "";
    let stars = i;
    for (let j = 1; j <= stars; j += 1) {
      str += "*";
    }
    console.log(str);
  }
};
const middlecComponent = (n) => {
  let str = "";
  for (let i = 1; i <= n; i += 1) {
    str += "*";
  }
  console.log(str);
};

const lowerComponent = (n) => {
  for (let i = 1; i <= n - 1; i += 1) {
    let str = "";
    let stars = n - i;
    for (let j = 1; j <= stars; j += 1) {
      str += "*";
    }
    console.log(str);
  }
};
const pattern = (n) => {
  upperComponent(n);
  middlecComponent(n);
  lowerComponent(n);
};

pattern(5);
console.log("");
pattern(9);
console.log("");
pattern(4);
