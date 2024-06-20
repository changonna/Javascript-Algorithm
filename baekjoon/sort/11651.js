let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let data = [];

for(let i = 1; i < n + 1; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    data.push([x, y]);
}

data.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
   return a[1] - b[1]; 
});

let answer = '';
data.forEach((item) => {
    answer += `${item[0]} ${item[1]}\n`;
});
console.log(answer);