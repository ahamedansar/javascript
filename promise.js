//a promising js in object that represent the eventual completion or failure of an asynchroconstnous opertaion and its resulting value

//resolve - call when we operation is success
//reject - call when the opertaion error

// .then - execute is the promise is resolve
// .catch - execute when the promise is rejected
// .finally - execute regardless of whether the promise is resolve or reject


//creating promise
let mypromise = new Promise((resolve,reject) => { // creating promise object
 
        let success = false;

    setTimeout(()=>{
        if (success) {
            resolve ("promise resolved successfully")
        } else {
            reject ("promise rejected")
        }

    },2000)

})

mypromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("promise execution finished"));

