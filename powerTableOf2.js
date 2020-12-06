const prompt = require('prompt-sync')();
const n = parseInt(prompt("Enter : "));

let result = 0;
let counter = 1;

console.log("2 power n | value");

while(result < 256){

        result = 2**counter;
        console.log("2^"+counter+"    "+result);
        counter++ ;
}
