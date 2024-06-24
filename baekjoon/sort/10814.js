let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = [];
let obj = {};
for (let i = 1; i <= n; i++) {
    let [age, name] = input[i].split(' ');
    arr.push({
        age: Number(age),
        name: name
    });
}
arr.sort((a, b) => a.age - b.age);


let answer = '';
arr.forEach((person) => {
    answer += `${person.age} ${person.name}\n`;
});
console.log(answer);