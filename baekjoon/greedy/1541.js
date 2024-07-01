let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// ['55-50+40']

let arr = input[0].split('-'); // ['55', '50+40']
let total = 0;

for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let nums = arr[i].split('+').map(Number); // [50, 40]
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
    }
    if (i == 0) total += sum;
    else total -= sum;
}

console.log(total);