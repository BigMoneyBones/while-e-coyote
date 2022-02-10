const prompt = require('prompt-sync')();

//Asks user to input a number
let x = (Number(prompt("Enter first number: ")));

//Asks user to input a second number
let y = (Number(prompt("Enter second number: ")));


//As long as 'x / y' does not equal a whole number, the loop will repeat
while (x/y !== Math.round(x/y)) {

  
    // while (x % y !== 0){
    //   x ++                 ***Also usable solution***
    // } 
   
  
//Loop will continue to add 1 to 'x' with each pass until it can be divided by 'y' with no remainder.    
    x = x + 1;

//Each pass will log out the the value of 'x + 1' until it reaches the value allowing it to be 
//  divided by 'y'    
    console.log(x);

}

//Message output to screen telling user that 'x' is divisible by 'y'
console.log( x + " is divisible by " + y );

//Ex.
//  User inputs x:9, y:5
//      Since 9 is not divisible by 5, on the first pass it will add 1 to 9(x).
//          This now makes x = 10 which is divisible by 5, ending the loop and logging the output message.