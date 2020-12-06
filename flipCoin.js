const TAILS = 0;
const HEADS = 1;

let tailsCount = 0;
let headsCount = 0;

while(headsCount < 11){
    let coin = Math.ceil(Math.random() * 2);

    if(coin == HEADS){
        headsCount += 1;
    }else{
        tailsCount += 1;
    }
    if(tailsCount == 11){
	break;
    }
}

console.log("Heads count : "+headsCount);
console.log("Tails count : "+tailsCount);
