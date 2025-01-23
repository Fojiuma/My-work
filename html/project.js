const login = document.getElementById("#button");
const username = document.querySelector("#Username");
const password = document.querySelector("#password");


login.addEventListener("click", function enter(){
    if(password && username > 6) {
        console.log("login successful");
    }
})