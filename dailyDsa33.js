//(33.) Program to check Whether the string is palidrome or not
function checkPalidrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != str.charAt(str.length - i - 1)) {
            return false;
        }
    } return true;
}

console.log(checkPalidrome("pop"));   // condition true
console.log(checkPalidrome("poop"));  // condition true
console.log(checkPalidrome("poBop")); // condition true