//import
const prompt = require('prompt-sync')();

let temperature = prompt("enter the temperature:");

// let temperature = 45;
if (temperature >20) {  //if its more than 20 warm and less than 20 cool
    
    console.log("its warm outside");
} else{
    console.log("its cool outside");
    
}