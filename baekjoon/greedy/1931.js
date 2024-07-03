let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = input.slice(1); // ['1 4', '3 5', ]
let cnt = 1;
let newArr = [];

for (let i = 0; i < n; i++) {
    let [x, y] = arr[i].split(' ').map(Number); // [1, 4] 
    newArr.push([x, y]); // [[1, 4], [3, 5] ]
}

newArr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
});
let end = newArr[0][1];
for (let i = 1; i < n; i++) {
    if (end <= newArr[i][0]) {
        cnt++;
        end = newArr[i][1];
    }
}

console.log(cnt);