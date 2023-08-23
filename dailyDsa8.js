// (8.) Program to convert Celsius to Fahrenheit {(F° = (C° * 9/5) + 32)}
let prompt = require('prompt-sync')()
let Celsius = parseInt(prompt('Enter the Celsius degree temperature : '));
Celsius *= 1.8;
Celsius += 32;
console.log(`The given celsius converted to Fahrenheit is ${Celsius}`);