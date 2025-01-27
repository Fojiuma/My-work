const login = document.getElementById("button");
const username = document.getElementById("username");
const password = document.getElementById("password");
const mainDiv = document.getElementById("main-div");

login.addEventListener('click', () =>{
    if(username.value.length < 6){
        console.log("Your username should be greater than 6 chars");
    }   else if (username.value == "Fojiuma"|| password.value == "fojiuma04"){
    console.log("Successful Login")
   }
})

mainDiv.style = "red"