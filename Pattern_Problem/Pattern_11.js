//* Pattern_11:- Given a value n (positive integer), print th following pattern on the screen.

//*  For n = 9

// **** ****
// ***   ***
// **     **
// *       *
// *       *
// **     **
// ***   ***
// **** ****

//*  For n = 11

// ***** *****
// ****   ****
// ***     ***
// **       **
// *         *
// *         *
// **       **
// ***     ***
// ****   ****
// ***** *****

//*********Solution********

const upperComponent = (n) => {
  for (let rows = 1; rows <= (n - 1) / 2; rows += 1) {
    let str = "";
    //leftStar
    let leftStar = (n - 1) / 2 - rows + 1;
    for (let i = 1; i <= leftStar; i += 1) {
      str += "*";
    }
    //spaces
    let spaces = 2 * rows - 1;
    for (let j = 1; j <= spaces; j += 1) {
      str += " ";
    }
    //rightStars
    let rightStar = (n - 1) / 2 - rows + 1;
    for (let k = 1; k <= rightStar; k += 1) {
      str += "*";
    }
    console.log(str);
  }
};

const lowerComponent = (n) => {
  for (let rows = 1; rows <= (n - 1) / 2; rows += 1) {
    let str = "";
    //leftStar
    let leftStars = rows;
    for (let i = 1; i <= leftStars; i += 1) {
      str += "*";
    }
    //spaces
    let spaces = n - 2 * rows;
    for (let j = 1; j <= spaces; j += 1) {
      str += " ";
    }
    //rightStars
    let rightStars = rows;
    for (let k = 1; k <= rightStars; k += 1) {
      str += "*";
    }
    console.log(str);
  }
};
const pattern = (n) => {
  upperComponent(n);
  lowerComponent(n);
};

pattern(9);
console.log("");
pattern(11);
