function readInput(){
    return document.getElementById("input-text").value;
}

function clearInput(){
    document.getElementById("input-text").value = "";
}

function addTask(){
    document.getElementById("tasks").innerHTML += 
              "<li>" + readInput() + "</li>";
    clearInput();
}

function clearList(){
    document.getElementById("tasks").innerHTML = "";
}

function addTaskEnter(){
    let input = document.getElementById("input-text");
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
}

function listIsEmpty(){
    let tasks = document.getElementById("tasks");
    console.log(tasks.children)
    if (tasks.childElementCount === 0){
        tasks.innerHTML += "<h2>Ainda não há itens inseridos</h2>";
    }
}