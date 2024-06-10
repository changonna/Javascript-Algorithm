// 3자리 숫자 곱셈 
// 풀이방법 : 3자리로 정해졌기 때문에 숫자가 아닌 문자열로 풀자.

let fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().split('\n');

let num1 = input[0];
let num2 = input[1];

let x1 = num2[2] // 일의 자리
let x2 = num2[1] // 십의 자리
let x3 = num2[0] // 백의 자리

console.log(num1 * x1);
console.log(num1 * x2);
console.log(num1 * x3);
console.log(num1 * num2);