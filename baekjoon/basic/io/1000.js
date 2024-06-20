let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let total = 0;
for(let i = 1; i <= n; i++) {
    total += i;
}
console.log(total);