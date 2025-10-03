const numbers = [10,20,30,40];


//Basic Destructuring
const [a,b] = numbers;
console.log(a);
console.log(b);

// skipping value

const [, , c] = numbers;
console.log(c);


const [,,,d] = numbers;
console.log(d);


//using spread operator

const [x, ...rest] = numbers;
console.log(a);
console.log(rest);