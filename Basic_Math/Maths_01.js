const countNum = (num) => {
  let counter = 0;
  while (num > 0) {
    num = num / 10;
    counter += 1;
  }
  return counter;
};
let num = 12345;
console.log(countNum(num));
