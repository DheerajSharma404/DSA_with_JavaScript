//* Pattern_13:- Given a value n (positive integer), print th following pattern on the screen.

//*  For n = 5;
//*  1
//*  12
//*  123
//*  1234
//*  12345

//*  For n = 7

//*  1
//*  12
//*  123
//*  1234
//*  12345
//*  123456
//*  1234567

//*  For n = 9

//*  1
//*  12
//*  123
//*  1234
//*  12345
//*  123456
//*  1234567
//*  12345678
//*  123456789

ˀ;

//*********Solution********

const pattern = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    for (let col = 1; col <= rows; col += 1) {
      str += col;
    }
    console.log(str);
  }
};
pattern(5);
console.log("");
pattern(9);
console.log();
pattern(7);
