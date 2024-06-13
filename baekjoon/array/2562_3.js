// 최댓값
// O(n)

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input.map(Number);

// ..., indexOf 사용
let max = Math.max(...arr);
let index = arr.indexOf(max);

console.log(max);
console.log(index + 1);