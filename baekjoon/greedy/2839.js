let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let cnt = 0;


function sugarDelibery(n) {
    let fiveKgBags = Math.floor(n / 5);
    n %= 5;
    
    while (fiveKgBags >= 0) {
        if (n % 3 === 0) {
            let threeKgBags = Math.floor(n / 3);
            return fiveKgBags + threeKgBags;
        }
        fiveKgBags--;
        n += 5;
    }
    return -1;
}

cnt = sugarDelibery(n);
console.log(cnt);