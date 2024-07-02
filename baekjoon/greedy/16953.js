let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let cnt = 1;

while (b > a) {
    if (b % 10 === 1) b = Math.floor(b / 10);
    else b /= 2;
    cnt++;
}

if (a !== b) cnt = -1;
console.log(cnt);