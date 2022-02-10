//input: string
//output: log a string that doubles in length with each pass until total string length is greater than or equal to 10.

const prompt = require('prompt-sync')();

//Asks user for initial string input. 
let input = prompt("Enter a string: ")

//Declares a variable for the new string to be created when adding initial input with each pass of the loop.
let combined = "";

//Sets a starting point for the number of characters to be counted in the string.
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

//Ex.
//  User inputs abc. abc is equal to '3' characters long.
//      The string will now add abc to itself creating abcabc which is 6 characterslong.
//          This process will continue until the number of characters in the string is greater than or equal to 10.