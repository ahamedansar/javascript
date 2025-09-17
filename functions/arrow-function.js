// arrow function is a shorter syntax for writing funsction in js
// introduce in es6 ( egma script 2015)


// const handleSubmit = () => {

// }

//----function declaration----
// function add(a,b){
//     return a + b;
// }
// console.log(add(2,4));

//using arrow function
const add = (a,b) => a+b;

console.log(add(2,2));

//....single parameter (no parenthesis needed)
const square = x => x * x;

console.log("square of 4:", square(4));



//----a parameters( empty parenthesis)

const greet = () => console.log("hlo...");
greet();


//multi-line funciton

const divide = (a,b) => {
    const result = a / b;
    return result;
}
console.log("division of 10 by 4:",divide(10,4));