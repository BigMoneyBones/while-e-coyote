//parseInt changes variable into a number

const prompt = require('prompt-sync')();

//Asks user to input initial number.
console.log("Enter some numbers. Type done when complete. ");

//Prompting for the number.
let num = prompt("> ");

//Variable assigned giving the while statement a number to use as a starting point.
let total = 0;

//As long as the user input ('num') does not equal the word 'done', the loop will continue to run.
while (num !== "done") {

//This means the while statement wants the user input of "num" to be a number.
    let num2 = Number(num);

//This is taking initial total or 'starting point' and adding the user input to it. 
//  **this is in the background, it will not log the sum to the screen.**
    total = total + num2;

//This is prompting for the next number immediately after entering previous number.
    num = prompt("> ");
}

//User types the word 'done' when ready to add all numbers previously inputted, resulting in this log message with a sum.
console.log("Your total is: " + total + ".");

//Ex.
//  Initial in put is 1. 
//      Immediately there is a prompt for another number.
//          We input 3. already, initial value of 0 has added 1, then added 2, and now 3. 
//              So far this is what we have: 0 + 1 + 2 + 3.

// Typing 'Done' will result in the console.log message of 'Your total is: 6.'