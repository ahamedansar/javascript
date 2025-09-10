const prompt = require('prompt-sync')();

let day = prompt("enter the day:");


switch (day) {
    
    case "monday":
        console.log("start of the week");
        break;
     
    case "friday":
        console.log("end of the working day");
        break;
    
    case "sunday":
        console.log("weekend");
        break;
    
    
    
    default:
        console.log("regular day");
        break;
}