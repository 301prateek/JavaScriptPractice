const prompt = require('prompt-sync')();
const n = parseInt(prompt("Enter : "));

console.log("2 power n | value");

for(let i=1; i<=n; i++){
    let result = 2**i;
    console.log("  2^"+i+"     |     "+result);
}
