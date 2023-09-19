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

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (2.) Program to Add Two Numbers
// let input = require('prompt-sync')()
// let num1 = parseInt(input('Enter the first number : '))
// let num2 = parseInt(input('Enter the second number : '))
// const Result = (num1 + num2);
// console.log(`Addition of Two numbers is ${Result}`);

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (3.) Program to Find the square root of given number
// let prompt = require('prompt-sync')()
// const number = parseInt(prompt('Enter the number : '));
// const result = Math.sqrt(number);
// console.log(`The square root of ${number} is ${result}`);

// ------------------------------------------------------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (6.) Program to Convert Kilometers to Miles
// let input = require('prompt-sync')()
// let a = parseInt(input('Enter the Km in number to change in miles : '));
// a /= 1.609;
// console.log(`The conversion of the given value of Km in miles is ${a}` );

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (7.) Program to find the square root of a number
// let prompt = require('prompt-sync')()
// let num = parseInt(prompt('Enter the number for finding square root : '));
// result = Math.sqrt(num);
// console.log(`The square root of input value is ${result}`);

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (8.) Program to convert Celsius to Fahrenheit {(F° = (C° * 9/5) + 32)}
// let prompt = require('prompt-sync')()
// let Celsius = parseInt(prompt('Enter the Celsius degree temperature : '));
// Celsius *= 1.8;
// Celsius += 32;
// console.log(`The given celsius converted to Fahrenheit is ${Celsius}`);

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (9.) Program to check if a number is  +ve, -ve, or 0
// function num(a) {
//     if (a >= 1) {
//         return "Number is Positive";
//     }
//     else if (a <= -1) {
//         return 'Number is Negative';

//     }
//     else {
//         return 'Zero';
//     }
// }
// console.log(num(+2));

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (10.) Program to check Prime Number
// ##################################################################################

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (11.) Program to Calculate the Area of a Triangle with base and height
// let prompt = require('prompt-sync')()
// let height = parseInt(prompt('Enter the Height of Triangle: '));
// let base = parseInt(prompt('Enter the base of Triangle: '));
// AreaOfTriangle = (height * base)/2;
// console.log(`The area of Traingle is ${AreaOfTriangle}`);

// (11.) Program to Calculate the Area of a Triangle with sides
// let input = require('prompt-sync')()
// const side1 = parseInt(input('Enter the first side length: '));
// const side2 =parseInt(input('Enter the second side length: '));
// const side3 = parseInt(input('Enter the third side length: '));
// const parameter = (side1 + side2 + side3)/2;
// const areaOfTrikon = Math.sqrt(parameter * (parameter - side1)*(parameter - side2)*(parameter - side3) );
// console.log(`The area of the traingle is ${areaOfTrikon}`);

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (12.) Program to generate multiplication table
// let input = require('prompt-sync')();
// var number = parseInt(input(`Enter a number for which a multiplication table makes: `));
// var range = parseInt(input(`Enter a range: `));
// for (i = 1; i <= range; i++) {
//     var result = i * number;
//     console.log(number + " * " + i + " = " + result)
// }



// (40.) [i]. Program to create JavaScript object using instance of an object / using new keyword
const person = new Object({
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function () {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
});

console.log(person); // full string
console.log(typeof person);
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

// (40.) [ii]. Program to create JavaScript object

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (41.) Program to remove a Property from an Object using delete function
const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function () {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

delete student.greet;  // .key method used for deletion
delete student['hobbies'];  // ['key'] method is used 
console.log(student);

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (42.) Check Whether a String Starts and Ends With Certain Characters Using ((Built-in Methods))
// let prompt = require('prompt-sync')();
// let string = prompt('Enter a String: ');
// function checkString(str) {
//     if(str.startsWith('T') && str.endsWith('G')) {
//         console.log('The string starts with T and ends with G');
//     }
//     else if(str.startsWith('T')) {
//         console.log('The string starts with T but does not end with G');
//     }
//      else if(str.endsWith('G')) {
//         console.log('The string starts does not with T but end with G');
//     }
//     else {
//         console.log('The string does not start with T and does not end with G');
//     }
// }
// checkString(string);

// (42.) Program to Check The String Using Regex..
// function checkString(str) {
//     if( /^T/i.test(str) && /U$/i.test(str)) {
//         console.log('The string starts with T and ends with U');
//     }
//     else if(/^T/i.test(str)) {
//         console.log('The string starts with T but does not ends with U');
//     }
//      else if(/U$/i.test(str)) {
//         console.log('The string starts does not with T but ends with U');
//     }
//     else {
//         console.log('The string does not start with T and does not end with U');
//     }
// }
// for (let i = 0;i < 3; i++) {
//     const input = require('prompt-sync')();
//     const string2 = input('Enter a string: ')
//     checkString(string2);
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (43.) Program to check if a key exists in an Object or not using (in Operator)
// const person = {
//     id: 1,
//     name: "Don",
//     age: 23,
// }

// const hasKey = "id" in person;

// if (hasKey) {
//     console.log('The key Exists.')
// }
// else {
//     console.log("The key Doesn't Exists.")
// }

// (43.) Program to check if a key exists in an Object or not using (in Operator)
// const person2 = {
//     id: 2,
//     name: "Don",
//     age: 25,
// }

// const hasKey2 = "age" in person;

// (hasKey2) ? console.log("The key exists.")
//           : console.log("The key doesnt exists")

// (43.) Program to check if a key exists in an objet using hasOwnProperty() method
// const person3 = {
//     id: 3,
//     name: "shakira",
//     age: "50",
// }

// const hasKey3 = person3.hasOwnProperty("name");

// (hasKey3) ? console.log("The key exists.")
//     : console.log("The key doesnt exists")

// (43.) Program to check if a key exists in an objet using hasOwnProperty() method
// const person4 = {
//     id: 3,
//     name: "shaakya",
//     age: "22",
// }

// const hasKey4 = person3.hasOwnProperty("name");

// if(hasKey4) {
//     console.log("Yes, Exists..")
// } else {
//     console.log("No,Not exists..")
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (44.) Program to clone a JS Object ((Using spread <...>))
// const food = { paneer: "@", milk: "cow" };
// const cloneFood = { ...food };
// console.log(cloneFood);

// (44.) Program to clone a JS Object Using Object.assign({}, food)
// const food1 = { onion_rings: "@", milk: "boffalo" };
// const cloneFood1 = Object.assign({}, food1);
// console.log(cloneFood1);

// (44.) Program to clone a JS Object using JSON.parse(JSON.stringify(food))
// const food2 = { cheeze: "milk", peas: "plant" }
// const cloneFood2 = JSON.parse(JSON.stringify(food2));
// console.log(cloneFood2);

// ------------------------------------------------------------------------------------------------------------------------------------------------

// (45.) Program to Loop through an Object using ((for...in loop))
// const student = {
//     name: "Dev",
//     age: 24,
//     hobbies: ["Coding", " Cards", " travelling"],
// };

// for (let key in student) {
//     let value = student[key];
//     console.log(key + " - " + value);
// }

// (45.) Program to Loop through an Object using Object.entries and for...of
// const student2 = {
//     name: "chiku",
//     age: "12",
//     hobbies : ["Singing"," English-Movies"],
// }

// for (let[key,value] of Object.entries(student2)) {
//     console.log(key + " - " + value);
// }