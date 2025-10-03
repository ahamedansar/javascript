// async marks a fn that will return a promise
//await  poses the function execution untill a promise its resolved
//it makes asynchronous code look and behave like synchronous code



//fn declaration
// async function hello() {

// }
// //fn expression
// const sayBye = async function () {

// }
// //arrow fn
// const sayHello = async () =>{

// }

// async function hi() {
//     const datas = await ansar;


// }

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("started laughing😆!!")
        }, 2000)
    })
}
async function getData() {
    console.log("nihala");
    const result = await fetchData();
    console.log(result);
    console.log("and become laughging star");
}
getData()
