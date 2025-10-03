function multiple(...numbers) {
    return numbers.reduce((total,num)=> total * num,5)
}

console.log(multiple(3,5));
console.log(multiple(7,3,5));
console.log(multiple(4,8,1,4));