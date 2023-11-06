const fs = require('fs');
let fileContent = fs.readFileSync('B-input.txt', 'utf8').trim();

let array = fileContent.split(' ').map(el => +el);
console.log(array);

let a = array[0];
let b = array[1];
let c = array[2];
let d = array[3];

let denom = b * d;
let num = a*d + b*c;
console.log(num, denom)

let i = 2;
while (i <= denom && i <= num) {
    if (num % i == 0 && denom % i == 0) {
        num = num / i;
        denom = denom / i;
    } else {
        i++;
    }
}

let result = num.toString() + ' ' + denom.toString();
console.log(result);

fs.writeFileSync('B-output.txt', result);