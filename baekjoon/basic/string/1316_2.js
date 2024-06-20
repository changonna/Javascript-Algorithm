// 함수로 구분, Set 사용
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let words = input.slice(1);
let cnt = 0;

words.forEach((word) => {
    if(isGroupWord(word)) cnt++;
});
console.log(cnt);

function isGroupWord(word) {
    let mySet = new Set();
    for (let i = 0; i < word.length; i++) {
        if (!mySet.has(word[i])) {
            mySet.add(word[i])
        } else if (!word[i-1] === word[i]) {
            return false;
        }
    }
    return true;
}