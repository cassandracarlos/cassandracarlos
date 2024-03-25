function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    } else {
        return a / b;
    }
}

console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(5, 3));
console.log("Multiplication:", multiply(5, 3));
console.log("Division:", divide(5, 3));