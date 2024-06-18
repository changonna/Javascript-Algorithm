/* Javascript 핵심 문법 */

a = 7;
b = 3;
console.log(a / b); // 2.33333
// 몫만 남기기 : parseInt()
console.log(parseInt(a / b)); // 2



/* 출력 시간 단축 
메모리를 더 사용한다.
여러 출력 결과를 한 줄에 하나씩 출력할 때
console.log()를 실행하지 않고,
하나의 문자열에 결과를 저장해서 한꺼번에 출력하는 것이 대개 더 빠르게 수행됩니다.
*/
let answer = "";
for (let i = 1; i <= 100; i++) {
  answer += i + "\n"; // 문자열로 변환하여 기록
}
console.log(answer);



/* 1. 입력 데이터가 file로 주어질 경우
readline 모듈보다 fs를 이용해 파일 전체 읽어 처리하
*/
let fs = require("fs");
let input1 = fs.readFileSync("input.txt").toString().split("\n");

console.log(input1);

/* 2. readline 모듈
 */
const rl = require("readline").createInterface({
  // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때 마다 호출
  input: process.stdin,
  output: process.stdout,
});

let input2 = [];
rl.on("line", function (line) {
  input2.push(line);
}).on("close", function () {
  // 콘솔 입력 창에서 Ctrl + C 입력하여 호출(입력의 종료)
  console.log(input2);
  process.exit();
});



/* Int -> String */
let aa = "777";
let bb = Number(aa);
console.log(typeof bb);

/* String -> Int */
let cc = 777;
let dd = String(cc);
console.log(typeof dd);



/* Array.prototype.reduce() 
reduce() 메소드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환합니다.
reducer의 형태 : (accumulator, currentValue) => 반환값
*/

let data = [5, 2, 9, 8, 4];

// minValue 구하기
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue); // 2

// 원소의 합계 구하기
let summary = data.reduce((a, b) => a + b);
console.log(summary); // 28



/* 배열 초기화 */
// 직접 값을 설정하여 초기화
let arr1 = [8, 1, 4, 5, 7];
// 길이가 5이고 모든 원소의 값이 0인 배열 초기화
let arr2 = new Array(5).fill(0);



/* 집합 자료형 */
let mySet = new Set(); // 집합 객체 생성

// 여러개의 원소 삽입
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3); // 중복 원소는 삽입 X

console.log(`원소의 개수: ${mySet.size}`); // 3
console.log(`원소 7을 포함하고 있는가 ${mySet.has(7)}`); // True

// 원소 5를 제거
mySet.delete(5);

for (let item of mySet) console.log(item); // 3 7



/* 소수점 아래 특정 자리에서 반올림 */
// toFixed(n): n번째까지 표시
let x = 123.456;
console.log(x.toFixed(2)); // 123.46



/* Escape Sequence */
// 예약 문자, 특수 문자 를 출력하기 위해
console.log('탭\t탭');
console.log('\\역 슬래시 \\');
console.log('\"큰 따옴표\"');
console.log('\'작은 따옴표\'');
