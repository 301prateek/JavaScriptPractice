const prompt = require('prompt-sync')();
const number1 = parseInt(prompt('Enter the starting number of range : '));
const number2 = parseInt(prompt('Enter the end number of the range: '));
let temp = 0;

for (let i= number1; i <= number2; i++) {
    for (let j = 1; j <= i/2; j++){
        if(i%j == 0){
            temp += 1;
        }
        if(temp > 1){
            break;
        }
    }
    if(temp == 1){
        console.log("Prime Number: "+i);
    }
    temp =0
}
