function checkEvenOdd(...numbers) {
    return numbers.map(num => ({
        number: num,
        type: num % 2 === 0 ? "Even" : "Odd"
    }));
}

// Example usage
console.log(checkEvenOdd(3, 5));
console.log(checkEvenOdd(7, 3, 5));
console.log(checkEvenOdd(4, 8, 1, 4));
