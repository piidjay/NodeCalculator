const rs = require('readline-sync');

function getUserInput(message){
    return rs.question(message);
}


const allowedOperators = ['+', '-', '*', '/'];

// 1. Ask the user, "What operation would you like to perform?"

let operator = getUserInput('What operation would you like to perform? "/" "*" "-" "+": ');

let isOperator = false;
let timesYouFuckedUp = 0;

while (!isOperator) {
    
    if (!allowedOperators.includes(operator)) {
        timesYouFuckedUp++;
        console.log('YOU SHALL NOT PASS!!! 🧙');
        operator = getUserInput(`\n You messed up ${timesYouFuckedUp} times!\n`)
    } else {
        isOperator = true;
    }
}
console.log('Thank you ');

// 2.Then the user enters one of these options: "/" "*" "-" "+"

// 3.If the user enters an invalid character print, "That is not a valid operation" and then restart the program
if(allowedOperators.includes(operator)){
    
} else{
    console.log('Incorrect input operator. Please try again.');
    throw new Error('ERROR');
}

// 4.After the user enters a valid operation, ask the user, "Please enter the first number"

let firstNumber = parseInt(getUserInput('Enter a number '));


// 5.The user then enters any group of numbers. If the user enters something that is not a number, print "This is not a number" and then re-ask the question

let isNumber = false;
timesYouFuckedUp = 0;
while (!isNumber) {

    if (!parseInt(firstNumber, 10)) {
        console.log('This is not a number');
        timesYouFuckedUp++;
        firstNumber = getUserInput(`You messed up ${timesYouFuckedUp} times!\n`)
    } else {
        isNumber = true;
    }
}
console.log(`You have entered ${(firstNumber)} `);


// 6.After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before

let secondNumber = parseInt(getUserInput(`Enter another number `));

isNumber = false;
timesYouFuckedUp = 0;
while (!isNumber) {

    if (!parseInt(secondNumber, 10)) {
        timesYouFuckedUp++;
        secondNumber = getUserInput(`You messed up ${timesYouFuckedUp} times!\n`)
    } else {
        isNumber = true;
    }
}
console.log(`it worked! You have entered ${(secondNumber)} `);


// 7.Then perform the proper math operation and print the result as, "The result is: X" where is is the actual result

let total = 0;

if (operator === '+') {
    total = (firstNumber + secondNumber);
}
if (operator === '-') {
    total = (firstNumber - secondNumber);
}
if (operator === '*') {
    total = (firstNumber * secondNumber);
}
if (operator === '/') {
    total = (firstNumber / secondNumber);
}

console.log(total);

console.log('All done! Time for beers! 🍺');