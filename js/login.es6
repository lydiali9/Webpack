let login = (username, password) => {
    if(username !== "admin" || password !== "admin") {
        console.log("incorrect login");
    }
};

login("admin", "admin");