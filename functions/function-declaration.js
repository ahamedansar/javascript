// function declaration is the one of the ways to define function



// syntax
//function functionName(){
//            //function bodyy
//}


function greet(name) {
    //inside () called parameter
    console.log("hello, " + name);

}
greet("ansar"); //arguments indside greet ()

// key feature

// 1.hoisting functions: calling a function before the defining it
// 2. named functions: function declaration must have a function name
// 3. Global scope function: A function declared outside of any block or function. It can be accessed anywhere in the program.
// 4. Local scope function: A function declared inside another function or block. It can only be accessed within that specific function or block.