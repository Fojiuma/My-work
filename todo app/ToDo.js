const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector("list-container");
const Info = document.getElementById("alert-info");
function addTask(){
    if (inputBox.value === ""){
        Info.innerHTML = "Please input a task."
    }else{
       let li = document.createElement("li");
       li.innerHTML = inputBox.value;
       listContainer.appendChild("li");
       let span = document.createElement("span");
       span.innerHTML = "\u00d7";
       li.append(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classlist.toogle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();