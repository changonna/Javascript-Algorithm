// 최댓값
// O(n)

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input.map(Number);

// 초기값 설정
let index = 0;
let max = 0;

// for문 사용
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        index = i;
    }
}

console.log(max);
console.log(index + 1);