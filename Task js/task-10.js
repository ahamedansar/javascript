const prompt = require("prompt-sync")();

let answer = prompt("Do you want to fetch user data? (yes/no): ");

let fetchUser = new Promise((resolve, reject) => {
    console.log("Processing your request...");

    setTimeout(() => {
        if (answer.toLowerCase() === "yes") {
            resolve({ id: 5, name: "ashfak nasar", age: 21 });
        } else {
            reject("❌ You choose not to fetch user data.");
        }
    }, 2000);
});

fetchUser
    .then(user => console.log("✅ User data received:", user))
    .catch(error => console.error(error))
    .finally(() => console.log("🔄 Operation completed (success or fail)."));