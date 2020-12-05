//Take a number input and print the day of the week.
const prompt = require('prompt-sync')();
const dayNumber = parseInt(prompt("Enter a Number 1 to 7 : "));

switch(dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
         break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
         break;
    case 5:
        console.log("ThursDay");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Wrong Input!");
}

