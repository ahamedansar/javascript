//"use strict" is check error

const prompt = require('prompt-sync')();

let score = prompt("enter the mark:");




if (score >= 80) {
    console.log("grade: A");
}
else if (score >= 60) {
    console.log("grade: B");
}
else if (score >= 40) {
    console.log("grade: C");
}
else if (score >= 25) {
    console.log("grade: D");
}
else {
    console.log("grade: F");
}
