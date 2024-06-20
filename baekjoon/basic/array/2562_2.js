// 최댓값
// O(n)

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input.map(Number);

// reduce, indexOf 사용
let max = arr.reduce((a, b) => Math.max(a, b));
let index = arr.indexOf(max);

console.log(max);
console.log(index + 1);