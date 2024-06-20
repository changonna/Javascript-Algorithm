// 나머지
// O(n)

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input.map(Number);
// set 사용
let modSet = new Set();

for (let i = 0; i < 10; i++)
  modSet.add(arr[i] % 42);

console.log(modSet.size);