// 상수

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [str1, str2] = input[0].split(' ');
let [newStr1, newStr2] = ['', ''];
for(i = 0; i < 3; i++) {
    newStr1 = newStr1.concat(str1[2-i]);
    newStr2 = newStr2.concat(str2[2-i]);
}

console.log(Math.max(Number(newStr1), Number(newStr2)));