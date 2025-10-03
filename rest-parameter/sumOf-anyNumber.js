function sum(...numbers) {
    return numbers.reduce((total,num)=> total + num,0)
}

console.log(sum(3,5));
console.log(sum(7,3,5));
console.log(sum(4,8,1,4));