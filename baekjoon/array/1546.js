let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
const scores = input[1].split(' ').map(Number);

const max = Math.max(...scores);
const updated = [];

scores.forEach((score) => {
    updated.push(score / max * 100); 
});

let avg = updated.reduce((a, b) => a + b) / n;

console.log(avg);
