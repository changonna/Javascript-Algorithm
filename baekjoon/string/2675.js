// 문자열 반복

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let lineCnt = Number(input[0]);
let lines = input.slice(1);

lines.forEach((line) => {
    let n = Number(line.split(' ')[0]);
    let str = line.split(' ')[1];

    let res = '';
    for(let c of str) {
        res += c.repeat(n);
    }
    console.log(res);
});