//* Pattern_09:- Given a value n (positive integer), print th following pattern on the screen.

//* One kind of diamond Shape

//*   For n = 4

//*        *
//*      * * *
//*    * * * * *
//*  * * * * * * *
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
//*   * * * * * * * * *
//*     * * * * * * *
//*       * * * * *
//*         * * *
//*           *

//*********Solution********

const upper = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    //Spaces
    let spaces = n - rows;
    for (let i = 1; i <= spaces; i += 1) {
      str += " ";
    }
    //Stars
    let stars = 2 * rows - 1;
    for (let j = 1; j <= stars; j += 1) {
      str += "*";
    }
    console.log(str);
  }
};

const lower = (n) => {
  for (let row = 1; row <= n; row += 1) {
    let str = "";
    //Spaces
    let spaces = row - 1;
    for (let i = 1; i <= spaces; i += 1) {
      str += " ";
    }
    //Stars
    let stars = 2 * n - (2 * spaces + 1);
    for (let j = 1; j <= stars; j += 1) {
      str += "*";
    }
    console.log(str);
  }
};
const pattern = (n) => {
  upper(n);
  lower(n);
};
pattern(3);
console.log(""); //Just to get the separation
pattern(5);
console.log(""); //Just to get the separation
pattern(6);
