// (1.) Program to Check number is odd or even
// function num(a) {
//     if (a%2 == 0) {
//         return `Number is even`
//     }
//     else {
//         return `Number is odd`
//     }
// }
// console.log(num(3))


// (1.) Program to Check number is odd or even
// let prompt = require('prompt-sync')()
// let num = prompt('Enter a number : ')
// const result = (num%2 ==0) ? "even" : "odd";
// console.log(`The number is ${result}.`);


// (2.) Program to Add Two Numbers
// let input = require('prompt-sync')()
// let num1 = parseInt(input('Enter the first number : '))
// let num2 = parseInt(input('Enter the second number : '))
// const Result = (num1 + num2);
// console.log(`Addition of Two numbers is ${Result}`);


// (3.) Program to Find the square root of given number
// let prompt = require('prompt-sync')()
// const number = parseInt(prompt('Enter the number : '));
// const result = Math.sqrt(number);
// console.log(`The square root of ${number} is ${result}`);

// (4.) Program to swap two numbers using Arthmetic Operators
// let input = require('prompt-sync')()
// let a = parseInt(input('Enter the first number before swapping : '));
// let b = parseInt(input('Enter the second number before swapping : '));
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`The swapped value of a using Arthmetic Operators : ${a}`);
// console.log(`The Swapped value of a using Arthmetic Operators : ${b}`);


// (4.) Program to swap two numbers using destructuring assignment
// let prompt = require('prompt-sync')()
// let c = parseInt(prompt('Enter the first number before swapping : '));
// let d = parseInt(prompt('Enter the second number before swapping : '));
// [c, d] = [d, c]
// console.log(`The swapped value of a using destructuring assignment : ${c}`);
// console.log(`The Swapped value of a using destructuring assignment : ${d}`);    

// (5.) Program to find the largest number among three numbers
// function num(a,b,c) {
//     if (a > b && a > c) {
//         return `The largest number is ${a}`
//     }
//     else if (b > a && b > c) {
//         return `The largest number is ${b}`
//     }
//     else if (c > a && c > b) {
//         return `The largest number is ${c}`
//     }
//     else if (a == b && a > c && b > c) {
//         return `The samllest number is ${c}`
//     }
//     else if (a == c && a > b && c > b) {
//         return `The samllest number is ${b}`
//     }
//     else if (c == b && c > a && b > a) {
//         return `The samllest number is ${a}`
//     }
//     else {
//         return "All the Values are same"
//     }
// }
// console.log(num(6,7,6));

// (6.) Program to Convert Kilometers to Miles
// let input = require('prompt-sync')()
// let a = parseInt(input('Enter the Km in number to change in miles : '));
// a /= 1.609;
// console.log(`The conversion of the given value of Km in miles is ${a}` );