
//means take all values in an array and make them into one single value (like sum, product, max, etc).

let numbers = [1, 2, 3, 4]
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);


// acc = accumalotor (0)
//num = each elements in the array

// 0=1 = 1
// 1+2 = 3
// 3+3 = 6
// 6=4 = 10
