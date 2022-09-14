function readInput(){
    return document.getElementById("input-text").value
}


function addTask(){
    document.getElementById("task").innerHTML += 
              "<li>" + readInput() + "</li>";
}
