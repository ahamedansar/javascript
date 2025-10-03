async function getUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let users = await response.json();
    
    
        console.log("first 5 user");
        users.slice(0,5).forEach(usr => {
        console.log(`# ${usr.id}): ${usr.username}`);
    })

    } catch (error) {
        console.error("Error fetching user:", error);

    }
}

getUser();