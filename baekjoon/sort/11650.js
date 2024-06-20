let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
 // ['5', '3 4', '1 1', '1 -1', '2 2', '3 3']
let n = Number(input[0]);
let arr = input.slice(1);
/*
input.slice(1) ['3 4', '1 1', '1 -1', '2 2', '3 3']
*/
let objArr = [];
arr.forEach((str) => {
    let [x, y] = str.split(' ').map(Number);
    objArr.push({ 'x': x, 'y': y });
});
// objArr [{x: 3, y: 4}, --- ]

objArr.sort((a, b) => {
    if (a.x === b.x) return a.y - b.y;
    return a.x - b.x;
});

let answer = '';
objArr.forEach((obj) => {
    answer += `${obj.x} ${obj.y}\n`;
});
console.log(answer);