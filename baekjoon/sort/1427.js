let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let str = input[0]; // '2143'
let arr = [];
//for (let i = 0; i < str.length; i++) {
//    arr.push(str.charAt(i));
//}

str.split('').forEach((c) => {
   arr.push(Number(c));
});
// [2, 1, 4, 3]

arr.sort((a, b) => b - a);
// [4, 3, 2, 1];

let answer = '';
arr.forEach((num) => {
   answer += num + ''; 
});
console.log(answer);