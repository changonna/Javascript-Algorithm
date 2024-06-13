// 최소, 최대
// O(n)

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

/*
  모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
 */
// min, max 벗어나는 범위 값으로 초기화
let min = 1000001; // 일단 큰 수로 초기화
let max = -1000001; // 일단 작은 수로 초기화

// for 문 사용
for (let i = 0; i < n; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
}

console.log(min, max);