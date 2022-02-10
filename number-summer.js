// const prompt = require('prompt-sync')();

// let num = prompt("Enter some numbers type 'done' when complete: ");

// let total = 0;
// while (num !== "done") {
//     //input numbers
//     total = total + parseInt(num);
//     num = prompt("> ");
// }

// console.log("Your total is: " + total);


// //parseInt changes variable into a number

const prompt = require('prompt-sync')();

console.log("Enter some numbers. Type done when complete. ");

let num = prompt("> ");

let total = 0;

while (num !== "done") {
    let num2 = Number(num);
    total = total + num2;
    num = prompt("> ");
}

console.log("Your total is: " + total);