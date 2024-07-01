let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// ['5', '3 1 4 3 2']
let n = Number(input[0]); // 5
let arr = input[1].split(' ').map(Number); // [3, 1, 4, 3, 2]
let res = 0;
let sum = 0;

// 오름차순 정렬 n log n
arr.sort((a, b) => a - b); // [1, 2, 3, 3, 4]

for (let i = 0; i < n; i++) {
  res += arr[i];
  sum += res;
}
// 1 2 3 3 4
// 0+1, 1+2, 3+3, 6+3, 9+4
// 1 3 6 9 13
console.log(sum);