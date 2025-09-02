//logical AND (&&)

console.log("true && true: ", true && true);
console.log("true && false: ", true && false);

let a = 2;
let b = 21;

let x = a > b && b > a
console.log('AND:', x);



//logical Or (||)

console.log("true || false: ", true || false);
console.log("false || false: ", false || false);

let m = 22;
let o = 12;

let y = o > m || o > m
console.log('OR:',y);


//logical Not (!)

console.log("!true: ", !true);
console.log("!false: ", !false);

let z =!(a>b) //!(2 > 21)

console.log("NOT:", z);