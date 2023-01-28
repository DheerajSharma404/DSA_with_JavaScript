//* Pattern_08:- Given a value n (positive integer), print th following pattern on the screen.

//*  For n = 3
// *****
//  ***
//   *

//*  For n = 5

// *********
//  *******
//   *****
//    ***
//     *

//*  For n = 6

// ***********
//  *********
//   *******
//    *****
//     ***
//      *

//*********Solution********

const pattern = (n) => {
  for (let row = 1; row <= n; row += 1) {
    let str = "";
    //spaces
    let spaces = row - 1;
    for (let i = 1; i <= spaces; i += 1) {
      str += " ";
    }
    //stars
    let stars = 2 * n - (2 * spaces + 1);
    for (let j = 1; j <= stars; j += 1) {
      str += "*";
    }
    console.log(str);
  }
};
pattern(3);
console.log(""); //Just to get the separation
pattern(5);
console.log(""); //Just to get the separation
pattern(6);
