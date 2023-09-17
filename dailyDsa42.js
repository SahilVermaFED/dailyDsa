// (42.) Program to Check The String Using Regex.. 
function checkString(str) {
    if ( /^S/i.test(str) && /T$/i.test(str)) {
        console.log('The string starts with S and ends with T')
    }
    else if ( /^S/i.test(str)) {
        console.log(`The string starta with S but doesn't end with T`)
    }
    else if ( /T$/i.test(str)) {
        console.log(`The string doesn't start with S but it ends with T`)
    }
    else {
        console.log(`The string niether starts with S not end with T`)
    }
}

for (let i = 0; i < 3; i++) {
const input = require('prompt-sync')()
const string = input('Enter the string: ')
checkString(string);
}

// (42.) Program to check String Using Buit-in Methods
function checkString(str) {
    if(str.startsWith('S') && str.endsWith('G')) {
        console.log('The string starts with S and ends with G');
    }
    else if(str.startsWith('S')) {
        console.log('The string starts with S but does not end with G');
    }
     else if(str.endsWith('G')) {
        console.log('The string starts does not with S but end with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}

const input = require('prompt-sync')()
const string1 = input('Enter the string: ')
checkString(string1);
