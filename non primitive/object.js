const person = {
    name: "ansar",
    age: 22,
    qualifiaction: "BCA",
    isStudent: false
}
console.log(person.name)
console.log(person.age)

//add or modify datas

person.city = "Kasaragod"
person.age = 32;
console.log(person)

//delete city from person details

delete person.city;
console.log("final person detail is: ", person);