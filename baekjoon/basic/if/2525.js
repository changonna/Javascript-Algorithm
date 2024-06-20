let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// .map(Number) : 전체를 돌면서 Number로 type 변환
let [h, m] = input[0].split(' ').map(Number);
let cookTime = Number(input[1]);

let totalMin = (h * 60) + m + cookTime;

let res_h = parseInt(totalMin / 60);
let res_m = (totalMin % 60);

if (res_h >= 24) res_h -= 24;

console.log(`${res_h} ${res_m}`);