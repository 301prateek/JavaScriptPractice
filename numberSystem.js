//Take a number input and print unit, ten....
const prompt = require('prompt-sync')();
const number = prompt("Enter 1,10,100 or 1000 : ");

if (number == 1) {
    console.log("Units");
} 
else if (number == 10) {
    console.log("Tens");
} 
else if (number == 100) {
    console.log("Hundred");
} 
else if (number == 1000) {
    console.log("Thousand");
} 
else {
    console.log("You Entered Wrong Number....!");
} 
