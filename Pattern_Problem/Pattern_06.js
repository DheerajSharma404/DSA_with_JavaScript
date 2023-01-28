//* Pattern_06:- Given a value n (positive integer), print the following pattern on the screen.

//*   For n = 4

//*        *
//*      * * *
//*    * * * * *
//*  * * * * * * *
//*    * * * * *
//*      * * *
//*        *

//*   For n = 5

//*           *
//*         * * *
//*       * * * * *
//*     * * * * * * *
//*   * * * * * * * * *
//*     * * * * * * *
//*       * * * * *
//*         * * *
//*           *

//*********Solution********

const upperTriangle = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    let spaces = n - rows;
    for (let col = 1; col <= spaces; col += 1) {
      str += " ";
    }
    let stars = 2 * rows - 1;
    for (let col = 1; col <= stars; col += 1) {
      str += "*";
    }
    console.log(str);
  }
};
const lowerTriangle = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    let spaces = rows;
    for (let i = 1; i <= spaces; i += 1) {
      str += " ";
    }
    let stars = 2 * (n - rows) - 1;
    for (let j = 1; j <= stars; j += 1) {
      str += "*";
    }
    console.log(str);
  }
};
const pattern = (n) => {
  upperTriangle(n);
  lowerTriangle(n);
};
pattern(3);
console.log(""); //Just to get the separation
pattern(5);
console.log(""); //Just to get the separation
pattern(6);
