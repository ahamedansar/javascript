//you can store function inside object are called methods.

//".this"- keyword = its refers the object  itself.(used to access properties and method)
const car = {
    brand: "toyota",
    start: function(){
        console.log('car started');
        
    }
}
car.start();   