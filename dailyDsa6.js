// (6.) Program to Convert Kilometers to Miles
let input = require('prompt-sync')()
let a = parseInt(input('Enter the Km in number to change in miles : '));
a /= 1.609;
console.log(`The conversion of the given value of Km in miles is ${a}` );