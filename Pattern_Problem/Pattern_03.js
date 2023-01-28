//* Pattern_03:- Given a value n (positive integer), print the following pattern on the screen.

//*   For n = 4

//*         *
//*       * *
//*     * * *
//*   * * * *

//*   For n = 5

//*           *
//*         * *
//*       * * *
//*     * * * *
//*   * * * * *

//*********Solution********

const pattern = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    let spaces = n - rows;
    for (let col = 1; col <= spaces; col += 1) {
      str += " ";
    }
    let stars = rows;
    for (let col = 1; col <= stars; col += 1) {
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
