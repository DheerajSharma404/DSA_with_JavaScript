//* Pattern_04:- Given a value n (positive integer), print the following pattern on the screen.

//*  For n = 5

//*      A
//*     ABA
//*    ABCBA
//*   ABCDCBA
//*  ABCDEDCBA

//*  For n = 8

//*         A
//*        ABA
//*       ABCBA
//*      ABCDCBA
//*     ABCDEDCBA
//*    ABCDEFEDCBA
//*   ABCDEFGFEDCBA
//*  ABCDEFGHGFEDCBA

//*********Solution********

const pattern = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    let counter = 0;
    let spaces = n - rows;
    for (let i = 1; i <= spaces; i += 1) {
      str += " ";
    }
    let leftaplha = rows;
    for (let j = 1; j <= leftaplha; j += 1) {
      str += String.fromCharCode(65 + counter);
      counter += 1;
    }
    let rightalpha = rows - 1;
    counter = rightalpha;
    for (k = 1; k <= rightalpha; k += 1) {
      str += String.fromCharCode(65 + counter - 1);
      counter -= 1;
    }
    console.log(str);
  }
};
pattern(5);
console.log("");
pattern(8);
