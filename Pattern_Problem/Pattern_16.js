//* Pattern_13:- Given a value n (positive integer), print th following pattern on the screen.

//*  For n = 4

//*  1234
//*  123
//*  12
//*  1

//*  For n = 6

//*  123456
//*  12345
//*  1234
//*  123
//*  12
//*  1

//*  For n = 8

//*  12345678
//*  1234567
//*  123456
//*  12345
//*  1234
//*  123
//*  12
//*  1

//*********Solution********

const pattern = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    for (let col = 1; col <= n - rows + 1; col += 1) {
      str += col;
    }
    console.log(str);
  }
};

pattern(4);
console.log("");
pattern(6);
console.log("");
pattern(8);
