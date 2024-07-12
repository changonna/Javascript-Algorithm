let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);

let sum = (k * (k + 1)) / 2;

if (sum > n) console.log(-1);
else {
  n -= sum;
  if (n % k === 0) console.log(k - 1);
  else console.log(k);
}
