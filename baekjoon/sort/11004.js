let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// ['5 2', '4 1 2 3 5']
let [n, target] = input[0].split(' ').map(Number);

let arr = input[1].split(' ').map(Number);
let sortedArr = arr.sort((a, b) => a - b);

console.log(sortedArr[target - 1]);