let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input.slice(1);
arr = [...new Set(arr)]; // 중복 제거

const compare = (a, b) => {
    if (a.length === b.length)
        return a.localeCompare(b);
    return a.length - b.length;
}
arr.sort(compare);

let answer = '';
arr.forEach((str) => {
   answer += `${str}\n`; 
});
console.log(answer);