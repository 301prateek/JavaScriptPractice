const prompt = require('prompt-sync')();
const number = parseInt(prompt("Check is the number Prime : "));
let prime = true;

for(let i=2; i<number/2; i++){
    if(number%i == 0) { 
        prime = false;
	break;
    }
}

if (prime) {
    console.log("Number is a Prime: "+number);
} else {
    console.log("Number is not prime : "+number);
}
