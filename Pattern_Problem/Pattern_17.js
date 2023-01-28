//* Pattern_13:- Given a value n (positive integer), print th following pattern on the screen.

//*  For n = 5

//*  1        1
//*  12      21
//*  123    321
//*  1234  4321
//*  1234554321

//*  For n = 8

//*  1              1
//*  12            21
//*  123          321
//*  1234        4321
//*  12345      54321
//*  123456    654321
//*  1234567  7654321
//*  1234567887654321

//*********Solution********

const pattern = (n) => {
  let spaces = 2 * (n - 1);
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    let leftStars = rows;
    //leftStars
    for (let i = 1; i <= leftStars; i += 1) {
      str += i;
    }
    //Spaces
    for (let j = 1; j <= spaces; j += 1) {
      str += " ";
    }
    //RightStars
    let rightStars = rows;
    for (let k = rightStars; k >= 1; k -= 1) {
      str += k;
    }
    console.log(str);
    spaces -= 2;
  }
};

pattern(5);
console.log("");
pattern(8);
