let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[0].split(' ').map(Number);

const sortedArr = arr.sort(function(a, b) {
    return a - b;
});

let answer = '';
sortedArr.forEach((num) => {
    answer += num + " ";
});
console.log(answer);