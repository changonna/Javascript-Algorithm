// 나머지
// O(n)

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const n = 42;
let arr = input.map(Number);
let res = [];
let cnt = 0;

// for문 사용
for (let i = 0; i < arr.length; i++) {
    let num = arr[i] % n;
    if (!res.includes(num)) {
        res.push(num);
        cnt++;
    }
}
console.log(cnt);