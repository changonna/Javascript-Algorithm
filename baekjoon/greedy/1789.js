let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let s = Number(input[0]);
let n = 1;

while (n <= s) {
    s -= n;
    n++;
}
console.log(n - 1);