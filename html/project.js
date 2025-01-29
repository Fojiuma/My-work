const login = document.getElementById("button");
const username = document.getElementById("username");
const password = document.getElementById("password");
const mainDiv = document.getElementById("main-div");
const successMessage = document.getElementById("success-message");

login.addEventListener("click", () => {
  if (username.value.length && password.value.length < 6) {
    successMessage.textContent = "your blah blah blah";
    successMessage.style.color = "red";
    successMessage.style.fontSize = "1.5rem";   
  } else if(username.value == "" && password.value == ""){
    successMessage.textContent = "input something!"
    successMessage.style.color = "red";
    successMessage.style.fontSize = "1.5rem"; 
  } else {
    
    successMessage.textContent = "successful";
    successMessage.style.color = "green";
    successMessage.style.fontSize = "1.2rem";
    window.open("http://127.0.0.1:5500/html/notepad.html")
  }
  
});
