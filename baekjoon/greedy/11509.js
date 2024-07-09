let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let cntArr = new Array(1000001).fill(0);

for (let i = 0; i < n; i++) {
  if (cntArr[arr[i]] > 0) {
    cntArr[arr[i]]--;
  }
  cntArr[arr[i] - 1]++;
}

console.log(cntArr.reduce((a, b) => a + b));
