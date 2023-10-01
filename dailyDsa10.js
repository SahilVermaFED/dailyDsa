function checkPrime(num, div = 2) {
    if (num <= 2) {
        return (num == 2) ? true : false;
    } else if (div * div > num) {
        return true;
    } else if (num % div == 0) {
        return false;
    } else {
        return checkPrime(num, div + 1);
    }
}
console.log(checkPrime(9));
console.log(checkPrime(29));