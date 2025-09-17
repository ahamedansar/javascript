function squareNumber(number) {
    console.log(`The square of ${number} is ${number * number}`);
}

function getNumberInput(callBack) {
    const number = 7;
    callBack(number); 
}

getNumberInput(squareNumber);
