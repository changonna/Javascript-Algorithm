// 3자리 숫자 곱셈 
// 풀이방법 : 3자리로 정해졌기 때문에 숫자가 아닌 문자열로 풀자.

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// String을 Number로 변경하지 않고 자리수 구하기
let num1 = input[0]; 
let num2 = input[1];

let x1 = Number(num2[2]); // 1의자리
let x2 = Number(num2[1]); // 10의자리
let x3 = Number(num2[0]); // 100의 자리

// (string * number)시 변환가능하면 number, 안되면 NaN
console.log(num1 * x1);
console.log(num1 * x2);
console.log(num1 * x3);
console.log(num1 * num2);