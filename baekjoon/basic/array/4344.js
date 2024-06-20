// 평균은 넘겠지
// 

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let lineCnt = Number(input[0]);
let lines = input.slice(1);

lines.forEach((line) => {
    let [cnt, ...scores] = line.split(' ').map(Number);
    let sum = scores.reduce((a, b) => a + b);
    let avg = sum / cnt;

    let aboveAvgCnt = scores.filter((score) => score > avg).length;
    let per = (aboveAvgCnt / cnt * 100).toFixed(3);

    console.log(per + '%');
});