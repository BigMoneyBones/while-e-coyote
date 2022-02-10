//input: string
//output: log a string that doubles in length with each pass until total string length is greater than or equal to 10.

const prompt = require('prompt-sync')();

let input = prompt("Enter a string: ")
let combined = "";
let initialLength = 0;


    //As long as the string length is less than 10, the while statement will repeat.
while (initialLength <= 10){
    
    //creating a new string by adding user input
    combined += input

    //log the current added string
    console.log(combined);

    //show length of current string
    initialLength += input.length;

} 
