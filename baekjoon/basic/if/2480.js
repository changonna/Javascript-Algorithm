let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);
let reward = 0;

if (a === b && b === c) {
    reward += 10000 + (1000 * a);
} else if (a === b || b === c || a === c) {
    if(a === b || a === c) num = a;
    else if(b === c) num = b;
    reward += 1000 + (100 * num);
} else {
    reward += 100 * Math.max(a, b, c);
}

console.log(reward);