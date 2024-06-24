let n = 5;
let arr = ['2', '4', '-10', '4', '-9'];

let newArr = [...new Set(arr)];
// [2, 4, -10, -9]
newArr.sort((a, b) => a - b);
// [-10, -9, 2, 4]

let myMap = new Map();
for (let i = 0; i < arr.length; i++) {
    myMap.set(newArr[i], i);
}

/*
myMap {
    '-10': 0,
    '-9': 1,
    '2': 2,
    '4': 3
}
*/

let answer = '';
for (let i = 0; i < arr.length; i++) {
    answer += `${myMap.get(arr[i])} `;
}
console.log(answer);