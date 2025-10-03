

const students = [
    {name:'rabaah', age:24, grade: 'B'},
    {name:'ashfak', age:21, grade: 'C'},
    {name:'ansar', age:22, grade: 'A+'},
    {name:'ashfaq', age:22, grade: 'A'},
]


//accessing datas


console.log(students[0].name);
console.log(students[2].grade, (students[2].name));

//looping through object array
students.forEach(stdnts => {
    console.log(`${stdnts.name} is ${stdnts.age} years old ${stdnts.grade} grade`);
})