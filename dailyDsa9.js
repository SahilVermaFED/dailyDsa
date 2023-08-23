// (9.) Program to check if a number is  +ve, -ve, or 0
function num(a) {
    if (a >= 1) {
        return "Number is Positive";
    }
    else if (a <= -1) {
        return 'Number is Negative';
        
    }
    else {
        return 'Zero';
    }
}
console.log(num(0));