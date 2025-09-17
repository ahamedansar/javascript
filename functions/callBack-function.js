//function passing another fn as an arguement
//asynchronous operationd5 
// customise behaviour of general purpose function"
//avoid blocking code excecution

//these is our callBack function
function greetUser(name){
    console.log(`Hello , ${name}`);
}

//this fn takes another fn(callBack fn) as  a paremeter
//this fn takes another function(callBack fn) as a parameter
function getUserInput(callBack){
    const name = "AHAMED ANSAR NASIM B H !";
    callBack(name); //calling the callBack fn

}
getUserInput(greetUser);

//callBcak or pyramid of doom

// multiple nested callBack make the code difficult to read and maintain is called callBack hell

















