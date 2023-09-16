// (12.) Program to generate multiplication table
let input = require('prompt-sync')();
var number = parseInt(input(`Enter a number for which a multiplication table makes: `));
var range = parseInt(input(`Enter a range: `));
for (i = 1; i <= range; i++) {
    var result = i * number;
    console.log(number + " * " + i + " = " + result)
} 