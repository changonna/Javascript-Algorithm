// 1. 오름차순 (a - b)
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];

arr.sort(function(a, b) {
	return a - b;
});

console.log(arr);

// 2. 내림차순
let arr2 = [1, 8, 5, 9, 21, 3, 7, 2, 15];

arr2.sort(function(a, b) {
	return b - a;
});

console.log(arr2);