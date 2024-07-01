let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let coins = input.slice(1);
let res = 0;
let start = 0;

for (let i = coins.length - 1; i >= 0; i--) {
    if (k >= coins[i]) {
        // coins중에 k보다 작은 수의 index를 start
        start = i;
        break;
    }
}

for (let i = start; i >= 0; i--) {
    if (k === 0) break;
    // Math.floor 사용하여 정수로 나타내기
    let cnt = Math.floor(k / coins[i]);
    if (cnt > 0) {
        k -= coins[i] * cnt;
        res += cnt;
    }
}

console.log(res);
