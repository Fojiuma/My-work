const login = document.getElementById("#button");
const username = document.querySelector("#Username");
const password = document.querySelector("#password");


login.addEventListener("click", function enter(){
    let success = document.createElement('p')
    if(password && username > 6) {
        login.appendChild(success);
    }
})