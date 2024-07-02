let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[0].split('-'); // ['55', '50+40']
let total = 0;

for (let i = 0; i < arr.length; i++) {
    let sum = arr[i].split('+').map(Number).reduce((a, b) => a + b); // [50, 40]
    if (i == 0) total += sum;
    else total -= sum;
}

console.log(total);