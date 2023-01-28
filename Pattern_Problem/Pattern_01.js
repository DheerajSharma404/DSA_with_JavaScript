//* Pattern_01:- Given a value n (positive integer), print th following pattern on the screen.

//*   For n = 4

//  ****
//  ****
//  ****
//  ****

//*   For n = 6

//  ******
//  ******
//  ******
//  ******

//*   For n = 5

//  *****
//  *****
//  *****
//  *****

//*********Solution********

const pattern = (n) => {
  for (let rows = 1; rows <= n; rows += 1) {
    let str = "";
    for (let col = 1; col <= n; col += 1) {
      str += "*";
    }
    console.log(str);
  }
};
pattern(4);
console.log(""); //Just to get the separation
pattern(6);
console.log(""); //Just to get the separation
pattern(3);
