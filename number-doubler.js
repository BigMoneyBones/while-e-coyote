const prompt = require('prompt-sync')();

//user input is = to 'n'
let n = Number(prompt("Enter a number, watch the magic happen: "));

//As long as the user input is less than 100, while loop will continue to run
while (n < 100) {
    
//'n' will be multiplied by 2 with each pass of the loop
    n*=2;
    
//The doubled value of 'n' will be logged with each pass of the loop until it is equal to or greater then 100.
    console.log (n);

// Ex.
//  User inputs '1'. 1 will be multiplied by 2, then log 2 to the screen. 
//  The loop will repeat, now multiplying '2' by 2, logging 4 to the screen. etc..
} 