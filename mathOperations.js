//Math operations
const prompt = require('prompt-sync')();
const a = prompt("Enter first number : ");
const b = prompt("Enter second number : ");
const c = prompt("Enter third number : ");
console.log("Entered Numbers are : "+a+","+b+","+c);

let operation1 = a + b * c;
let operation2 = a % b + c;
let operation3 = c + a / b;
let operation4 = a * b + c;

console.log(operation1);
console.log(operation2);
console.log(operation3);
console.log(operation4);

let numberArray = [operation1,operation2,operation3,operation4];
console.log(numberArray.toString());

//Finding Maximum value in the array
let max = numberArray[0] ;
for(i=0; i<numberArray.length; i++){
    if (numberArray[i] > max) {
        max =numberArray[i];
    }
}
console.log("Maximum number is: "+max);

//Finding minimum value in the array
let min = numberArray[0];
for(i=0; i<numberArray.length; i++){
    if(numberArray[i] < min){
        min =numberArray[i];
    }
}
console.log("Minimum Number is: "+min);
