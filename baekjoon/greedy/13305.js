let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let roads = input[1].split(' ').map(Number);
let prices = input[2].split(' ').map(Number);

let minPrice = prices[0];
let res = BigInt(0);
for (let i = 0; i < n - 1; i++) {
    if (minPrice > prices[i]) {
        minPrice = prices[i];
    }
    res += BigInt(minPrice) * BigInt(roads[i]);
}

console.log(String(res)); // 뒤에 붙는 'n' 제거