let fetchUser = new Promise((resolve, reject) => {
    console.log(" fetching user data...");

    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance of success
        if (success) {
            resolve({ id: 4, name: "Ahamed Ansar Nasim", age: 22 });
        } else {
            reject("Failed to fetch user data. Please try again.");
        }
    }, 2000);
});

fetchUser
    .then(user => {
        console.log("✅ User data received:");
        console.log(user);
    })
    .catch(error => {
        console.error("❌ Error:", error);
    })
    .finally(() => {
        console.log("🔄 Operation completed (success or fail).");
    });
