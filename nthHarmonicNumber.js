const prompt = require('prompt-sync')();
const n = parseInt(prompt("Enter : "));
let sum = 0;

for (let i = 1; i <= n ; i++) {
    sum = sum + 1/i;
}

console.log("Nth harmonic number : "+sum);
