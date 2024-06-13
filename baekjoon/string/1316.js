// 2중 for문 사용, str 사용

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let words = input.slice(1);
let cnt = 0;

outer: for (let i = 0; i < n; i++) {
    let word = words[i];
    let str = "";
    for (let j = 0; j < word.length; j++) {
        let char = word.charAt(j);
        if (!str.includes(char)) { // 나온 값이 아니면
            str += char;
        } else if (word.charAt(j - 1) === char) { // 바로 이전과 같으면 
            
        } else {
            continue outer;
        }
    }
    cnt++;
}

console.log(cnt);