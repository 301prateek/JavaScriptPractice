//Program to check Leap year
const prompt = require('prompt-sync')();
const year = prompt("Enter Year : ");

if((year%4 == 0) && (year%100 != 0) || (year%400 == 0)){
    console.log("This Is a Leap Year : "+year);
}
else{
    console.log("This is Not a Leap Year : "+year);
}
