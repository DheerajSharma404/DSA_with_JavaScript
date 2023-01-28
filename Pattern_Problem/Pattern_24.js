//* Pattern_04:- Given a value n (positive integer), print the following pattern on the screen.

//*  For n = 4

//*  4 4 4 4 4 4 4
//*  4 3 3 3 3 3 4
//*  4 3 2 2 2 3 4
//*  4 3 2 1 2 3 4
//*  4 3 2 2 2 3 4
//*  4 3 3 3 3 3 4
//*  4 4 4 4 4 4 4

//*  For n = 5

//*  5 5 5 5 5 5 5 5 5
//*  5 4 4 4 4 4 4 4 5
//*  5 4 3 3 3 3 3 4 5
//*  5 4 3 2 2 2 3 4 5
//*  5 4 3 2 1 2 3 4 5
//*  5 4 3 2 2 2 3 4 5
//*  5 4 3 3 3 3 3 4 5
//*  5 4 4 4 4 4 4 4 5
//*  5 5 5 5 5 5 5 5 5

//*********Solution********

const pattern = (n) => {
  for (let rows = 0; rows < 2 * n - 1; rows += 1) {
    let str = "";
    for (let col = 0; col < 2 * n - 1; col += 1) {
      let top = rows;
      let left = col;
      let right = 2 * n - 2 - col;
      let bottom = 2 * n - 2 - rows;
      str += n - Math.min(Math.min(top, left, right, bottom)) + " ";
    }
    console.log(str);
  }
};
pattern(4);
console.log();
pattern(5);
