// Program to find the largest number among three numbers
function num(a,b,c) {
    if (a > b && a > c) {
        return `The largest number is ${a}`
    }
    else if (b > a && b > c) {
        return `The largest number is ${b}`
    }
    else if (c > a && c > b) {
        return `The largest number is ${c}`
    }
    else if (a == b && a > c && b > c) {
        return `The samllest number is ${c}`
    }
    else if (a == c && a > b && c > b) {
        return `The samllest number is ${b}`
    }
    else if (c == b && c > a && b > a) {
        return `The samllest number is ${a}`
    }
    else {
        return "All the Values are same"
    }
}
console.log(num(6,7,6));