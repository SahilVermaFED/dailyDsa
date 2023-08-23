// (3.) Program to Find the square root of given number
let prompt = require('prompt-sync')()
const number = parseInt(prompt('Enter the number : '));
const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);