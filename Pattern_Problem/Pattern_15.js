//* Pattern_13:- Given a value n (positive integer), print th following pattern on the screen.

//*  For n = 5;

//*  1
//*  22
//*  333
//*  4444
//*  55555

//*  For n = 7

//*  1
//*  22
//*  333
//*  4444
//*  55555
//*  666666
//*  7777777
//*  88888888
//*  999999999

//*  For n = 9

//*  1
//*  22
//*  333
//*  4444
//*  55555
//*  666666
//*  7777777

//*********Solution********

const pattern = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    for (let col = 1; col <= rows; col += 1) {
      str += rows;
    }
    console.log(str);
  }
};
pattern(5);
console.log("");
pattern(9);
console.log();
pattern(7);
