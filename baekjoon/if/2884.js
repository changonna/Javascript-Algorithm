let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');

let hour = Number(line[0]);
let minute = Number(line[1]);

if(minute < 45) {
    if(hour == 0) hour = 23;
    else hour -= 1;
    minute += 15;
} else minute -= 45;

console.log(`${hour} ${minute}`);