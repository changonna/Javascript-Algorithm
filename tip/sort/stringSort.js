// 1. 문자열 오름차순 예시 (대, 소문자 구분 없이)
let arr = ['f', 'B', 'd', 'A', 'c'];

function compare(a, b) {
	let upperCaseA = a.toUpperCase();
	let upperCaseB = b.toUpperCase();
	if (upperCaseA < upperCaseB) return -1;
	else if (upperCaseA > upperCaseB) return 1;
	else return 0;
}

arr.sort(compare);

console.log(arr);