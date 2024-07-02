let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]); // 2
let index = 1;
let res = [];

for (let i = 0; i < testCase; i++) {
    let n = Number(input[index]); // 5
    index++;
    let arr = input.slice(index, index + n); 
    // ['3 2', '1 4', '4 1', '2 3', '5 5']
    index += n; 

    let newArr = [];
    arr.forEach((str) => {
        let [x, y] = str.split(' ').map(Number);
        newArr.push([x, y]);
    });
    // [[3, 2], [1, 4], [4, 1], [2, 3], [5, 5]]

    newArr.sort((a, b) => a[0] - b[0]);
    // [[1, 4], [2, 3], [3, 2], [4, 1], [5, 5]]
    
    let cnt = 0;
    let min = n + 1;
    newArr.forEach(([x, y]) => {
       if (min > y) {
           min = y;
           cnt++;
       }
    });
    res.push(cnt);
}

res.forEach((cnt) => {
    console.log(cnt);
});