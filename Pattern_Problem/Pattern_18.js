//* Pattern_13:- Given a value n (positive integer), print th following pattern on the screen.

//*  For n = 5

//*  1
//*  2 3
//*  4 5 6
//*  7 8 9 10
//*  11 12 13 14 15

//*  For n = 9;

//*  1
//*  2 3
//*  4 5 6
//*  7 8 9 10
//*  11 12 13 14 15
//*  16 17 18 19 20 21
//*  22 23 24 25 26 27 28
//*  29 30 31 32 33 34 35 36
//*  37 38 39 40 41 42 43 44 45

//*********Solution********

const pattern = (n) => {
  let counter = 1;
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    for (let col = 1; col <= rows; col += 1) {
      str += counter + " ";
      counter += 1;
    }
    console.log(str);
  }
};

pattern(5);
console.log("");
pattern(9);
