//* Pattern_13:- Given a value n (positive integer), print the following pattern on the screen.

//*   For n = 5

//*  1
//*  01
//*  101
//*  0101

//*  For n = 7

//*  1
//*  01
//*  101
//*  0101
//*  10101
//*  010101

//*  For n = 10

//*  1
//*  01
//*  101
//*  0101
//*  10101
//*  010101
//*  1010101
//*  01010101
//*  101010101

//*********Solution********

const pattern = (n) => {
  let flip = 1; //for every odd number row we start with 1.
  for (let i = 1; i < n; i++) {
    let str = "";
    flip = i % 2 !== 0 ? 1 : 0;
    for (let j = 1; j <= i; j++) {
      str += flip;
      flip = 1 - flip;
    }
    console.log(str);
  }
};
pattern(5);
console.log("");
pattern(7);
console.log("");
pattern(10);
