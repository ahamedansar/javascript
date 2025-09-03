

const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter your age: ", function(age) {
  age = Number(age); // convert input to number

  let result = (age >= 22) ? "adult" : "minor";

  console.log("You are an " + result);

  rl.close(); 
});
