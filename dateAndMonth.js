const prompt = require('prompt-sync')();
const date = prompt("Enter a date : ");
const month = prompt("Enter a Month, March to June: ");

if(month == "March" && date >= 20 && date <= 31){
    console.log("Date and Month within range :"+month+", "+date);
}
else if( month == "April" && date >= 1 && date <= 30){
    console.log("Date and Month within range :"+month+", "+date);
}
else if( month == "May" && date >= 1 && date <= 31){
    console.log("Date and Month within range :"+month+","+date);
}
else if( month == "June" && date >= 1 && date <= 20){
    console.log("Date and Month within range :"+month+", "+date);
}
else{
    console.log("Date and Month not within range....!");
}
