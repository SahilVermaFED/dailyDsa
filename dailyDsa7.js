// (7.)Program to find the sqyuare root of a number
let prompt = require('prompt-sync')()
let num = parseInt(prompt('Enter the number for finding square root : '));
result = Math.sqrt(num);
console.log(`The square root of input value is ${result}`);