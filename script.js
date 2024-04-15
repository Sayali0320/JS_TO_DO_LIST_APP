const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){  //if the input box is empty that time it shows this alert
        alert("You must write something...");
    }
    else{
        let li = document.createElement("li"); //creates html element li
        li.innerHTML = inputBox.value; //whatever text is entered in input box will added into li
        listContainer.appendChild(li); // the entered li value is displays under the list container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("Data", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("Data");
}
showList();
