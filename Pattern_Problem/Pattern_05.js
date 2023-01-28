//* Pattern_05:- Given a value n (positive integer), print the following pattern on the screen.

//*   For n = 4

//*  * * * *
//*  * * *
//*  * *
//*  *

//*   For n = 5

//*   * * * * *
//*   * * * *
//*   * * *
//*   * *
//*   *

//*********Solution********

const pattern = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    for (let col = n; col >= rows; col -= 1) {
      str += "*";
    }
    console.log(str);
  }
};
pattern(4);
console.log("");
pattern(8);
console.log("");

pattern(10);
