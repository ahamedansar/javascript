async function hi() {
    try {
        // Simulate an async operation (like fetching data)
        let success = await new Promise((resolve, reject) => {
            setTimeout(() => {
                let isOk = true; // change to false to test catch block
                if (isOk) {
                    resolve("✅ Success! Data received.");
                } else {
                    reject("❌ Failed to get data.");
                }
            }, 2000);
        });

        console.log(success); // Runs if promise resolves
    } catch (error) {
        console.log("Error caught:", error); // Runs if promise rejects
    }
}

hi();
