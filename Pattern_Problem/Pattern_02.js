//* Pattern_02:- Given a value n (positive integer), print th following pattern on the screen.

//*   For n = 3

//  *
//  **
//  ***

//*   For n = 5

//  *
//  **
//  ***
//  ****
//  *****

//*   For n = 6

//  *
//  **
//  ***
//  ****
//  *****
//  ******

//*********Solution********

const pattern = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    for (let col = 1; col <= rows; col += 1) {
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
