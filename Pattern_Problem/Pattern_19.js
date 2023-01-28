//* Pattern_13:- Given a value n (positive integer), print th following pattern on the screen.

//*   For n = 5
//*   A
//*   AB
//*   ABC
//*   ABCD
//*   ABCDE

//*   For n = 9
//*   A
//*   AB
//*   ABC
//*   ABCD
//*   ABCDE
//*   ABCDEF
//*   ABCDEFG
//*   ABCDEFGH

//*********Solution********

const pattern = (n) => {
  for (let rows = 1; rows <= n; rows++) {
    let str = "";
    let counter = 0;
    for (let col = 1; col <= i; col += 1) {
      str += String.fromCharCode(65 + counter);
      counter += 1;
    }
    console.log(str);
  }
};

pattern(5);
console.log("");
pattern(8);
