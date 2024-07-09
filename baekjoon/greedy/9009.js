let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = Number(input[0]);
let targets = input.slice(1).map(Number);
let res = '';

// 피보나치 수열
let fibo = [0, 1];
for (let i = 2; fibo[i - 1] + fibo[i - 2] <= 1e9; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
fibo.sort((a, b) => b - a);

targets.forEach((n) => {
    let resArr = [];
    fibo.forEach((item) => {
       if (n >= item && item !== 0) {
           n -= item;
           resArr.push(item);
       } 
    });
    resArr.sort((a, b) => a - b); // 오름차순 정렬
    resArr.forEach((num) => {
        res += `${num} `;
    });
    res += '\n';
});

console.log(res);