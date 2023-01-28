//* Pattern_13:- Given a value n (positive integer), print th following pattern on the screen.

//*   For n = 5

//*   ABCDE
//*   ABCD
//*   ABC
//*   AB
//*   A

//*   For n = 8

//*   ABCDEFGH
//*   ABCDEFG
//*   ABCDEF
//*   ABCDE
//*   ABCD
//*   ABC
//*   AB
//*   A

//*********Solution********

const pattern = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    let counter = 0;
    for (let col = n; col >= rows; col -= 1) {
      str += String.fromCharCode(65 + counter);
      counter += 1;
    }
    console.log(str);
  }
};

pattern(5);
console.log("");
pattern(8);
