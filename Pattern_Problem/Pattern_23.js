//* Pattern_04:- Given a value n (positive integer), print the following pattern on the screen.

//*  For n  = 4
//*  E
//*  ED
//*  EDC
//*  EDCB

//*  For n = 5

//*  F
//*  FE
//*  FED
//*  FEDC
//*  FEDCB

//*  For n = 6

//*  G
//*  GF
//*  GFE
//*  GFED
//*  GFEDC
//*  GFEDCB

//*********Solution********

const pattern = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    let counter = 0;
    for (let col = 1; col <= rows; col += 1) {
      str += String.fromCharCode(65 + n - counter);
      counter++;
    }
    console.log(str);
  }
};
pattern(4);
console.log(""); //Just to get the separation
pattern(5);
console.log(""); //Just to get the separation
pattern(6);
