const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const Info = document.getElementById("alert-info");
function addTask(){
    if (inputBox.value === ""){
        Info.innerHTML = "Please input a task."
    }else{
       let li = document.createElement("li");
       li.innerHTML = inputBox.value;
       listContainer.appendChild("li");
    }
}