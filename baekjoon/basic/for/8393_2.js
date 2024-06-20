// 시간복잡도 O(1)

// 등차 수열 1항부터 N항까지의 합. 첫째 항 a, 마지막 항 l
// 공식 Sn = N(a + l)/2

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let total = n * (1 + n) / 2;
console.log(total);