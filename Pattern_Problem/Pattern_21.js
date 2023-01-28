//* Pattern_13:- Given a value n (positive integer), print th following pattern on the screen.

//*   For n = 5

//*   A
//*   BB
//*   CCC
//*   DDDD
//*   EEEEE

//*   For n = 8

//*   A
//*   BB
//*   CCC
//*   DDDD
//*   EEEEE
//*   FFFFFF
//*   GGGGGGG
//*   HHHHHHHH

//*********Solution********

const pattern = (n) => {
  let counter = 0;
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    for (let col = 1; col <= rows; col += 1) {
      str += String.fromCharCode(65 + counter);
    }
    console.log(str);
    counter += 1;
  }
};
pattern(5);
console.log("");
pattern(8);
