const prompt = require('prompt-sync')();

//Asks user for a number input which will have the loop run the fibonacci sequence until 'n' number of passes is achieved.
let n = Number(prompt("How many Fibonacci trems would you like to display? "));

//assigns a to the value of the first number in the Fibonacci sequence.
let a = 0;
//assigns b to the value of the second number in the Fibonacci sequence.
let b = 1;

//sets the place holder for the count to start at 0
let count = 0;

//As long as user input is greater than 0, run the while statement.
if (n > 0) {
    while (count !== n) { //As long as the count is not equal to user input, the while loop will run until count = 'n'
        console.log(a)    //Screen will show 'a' as the first number in the sequence.
        if (count === 0) {
            a++           //If count is equal to 0, the loop will add 1 to the value of 'a'
        } else {
            a += b        //As soon as count is no longer equal to 0, or after the first pass, the loop will add 'a' and 'b',
            b = a - b     //    and reassign the new value to a. 
        }
        count ++
    }
}else {
    console.log("Input a valid number for 'n'") // if an invalid number or a string is input, you will be prompted to input a valid number.
}


//Ex.
//  A broken down example looks like this: 
//      User input is 5.
//      Pass 1: console logs 'a' or 0 to the screen. 0 is given +1 at the a++ statement, the else statement is ignored because count is equal to 0. count is given +1 at the count ++ statement.
//      Pass 2: console logs 'a' or 1 to the screen. The count is no longer equal to 0 so the else statement reads 1 += 1 assigning 'a' the new value of 2. if 'b' = 'a'(2) - 'b'(1) then 'b' becomes 1.
//      Pass 3: console logs 'a' or 2 to the screen. The count is no longer equal to 0 so the else statement reads 2 += 1 assigning 'a' the new value of 3. if 'b' = 'a'(3) - 'b'(1) then 'b' becomes 2.
//      Pass 4: console logs 'a' or 3 to the screen. The count is no longer equal to 0 so the else statement reads 3 += 2 assigning 'a' the new value of 5. if 'b' = 'a'(5) - 'b'(2) then 'b' becomes 3.
//      Pass 5: console logs 'a' or 5 to the screen. The count is no longer equal to 0 so the else statement reads 5 += 3 assigning 'a' the new value of 8. if 'b' = 'a'(8) - 'b'(3) then 'b' becomes 5.
//      Pass 6: console logs 'a' or 8 to the screen. The count is no longer equal to 0 so the else statement reads 8 += 5 assigning 'a' the new value of 13. if 'b' = 'a'(13) - 'b'(5) then 'b' becomes 8.
//      etc...