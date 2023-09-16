// (11.) Program to Calculate the Area of a Triangle with base and height
let prompt = require('prompt-sync')()
let height = parseInt(prompt('Enter the Height of Triangle: '));
let base = parseInt(prompt('Enter the base of Triangle: '));
AreaOfTriangle = (height * base)/2;
console.log(`The area of Traingle is ${AreaOfTriangle}`);

// (11.) Program to Calculate the Area of a Triangle with sides
let input = require('prompt-sync')()
const side1 = parseInt(input('Enter the first side length: '));
const side2 =parseInt(input('Enter the second side length: '));
const side3 = parseInt(input('Enter the third side length: '));
const parameter = (side1 + side2 + side3)/2;
const areaOfTrikon = Math.sqrt(parameter * (parameter - side1)*(parameter - side2)*(parameter - side3) );
console.log(`The area of the traingle is ${areaOfTrikon}`);