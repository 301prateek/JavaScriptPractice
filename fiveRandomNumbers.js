//Generating 5 random numbers
let num1=Math.floor(Math.random()* 999) + 100;
let num2=Math.floor(Math.random()* 999) + 100;
let num3=Math.floor(Math.random()* 999) + 100;
let num4=Math.floor(Math.random()* 999) + 100;
let num5=Math.floor(Math.random()* 999) + 100;
//Printing all random numbers
console.log("First Random Number: "+num1);
console.log("Second Random Number: "+num2);
console.log("Third Random Number: "+num3);
console.log("Fourth Random Number: "+num4);
console.log("Fifth Random Number: "+num5);

//Array of elements
let numbers = Array();
numbers.push(num1);
numbers.push(num2);
numbers.push(num3);
numbers.push(num4);
numbers.push(num5);

//Finding Maximum value in the array
let max = numbers[0] ;
for(i=0; i<numbers.length; i++){
    if (numbers[i] > max) {
        max =numbers[i];
    }
}
console.log("Largest number is: "+max);

//Finding minimum value in the array
let min = numbers[0];
for(i=0; i<numbers.length; i++){
    if(numbers[i] < min){
        min =numbers[i];
    }
}
console.log("Smallest Number is: "+min);




