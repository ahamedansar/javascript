// work.js

const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for input
rl.question("Enter your age: ", function(age) {
  age = Number(age); // convert input to number

  let result = (age >= 22) ? "adult" : "minor";

  console.log("You are an " + result);

  rl.close(); // close the input
});
