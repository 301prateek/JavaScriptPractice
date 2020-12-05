//Unit Conversion
const prompt = require('prompt-sync')();
const value = parseInt(prompt("Enter a number to convert : "));

const conversion = parseInt(prompt("Enter option to convert : \n (1)Feet to Inch \n (2)Feet to Meter \n (3)Inch To Feet \n (4)Meter to Feet."));


switch(conversion){
    case 1:
        let inch = value * 12;
        console.log("Result, Feet To Inches: "+inch);
        break;
    case 2:
        let meter = value / 3.2808;
        console.log("Result, Feet To Meter: "+meter);
        break;
    case 3:
        let feet = value / 12;
        console.log("Result, Inches To Feet: "+feet);
        break;
    case 4:
        let feet2 = value / 3.28;
        console.log("Result, Meter To Feet: "+feet2);
        break;
    default:
        console.log("Please Enter Correct Option....!!!");
}
