//* Pattern_12:- Given a value n (positive integer), print th following pattern on the screen.

//*  For n = 5

// *****
// *   *
// *   *
// *   *
// *****

//*  For n = 7

// *******
// *     *
// *     *
// *     *
// *     *
// *     *
// *******

//*  For n = 10

// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********

//*********Solution********

const pattern = (n) => {
  for (let i = 1; i <= n; i += 1) {
    let str = "";
    for (let j = 1; j <= n; j += 1) {
      if (i === 1 || j === 1 || i === n || j === n) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
};
pattern(5);
console.log("");
pattern(7);
console.log("");
pattern(10);
