document.querySelector("form").addEventListener("submit", myTodo);

var todoArr = JSON.parse(localStorage.getItem("todo")) || [];

displayTodo();

function displayTodo() {
    document.querySelector("tbody").textContent = "";
todoArr.map(function (elem) {
        var tr = document.createElement("tr");
    
        var td1 = document.createElement("td");
        td1.textContent = elem.task;
    
        var td2 = document.createElement("td");
        td2.textContent = elem.priority;
    
        if(elem.priority==="High")
        {
            td2.style.backgroundColor = "red";
        }else{
            td2.style.backgroundColor = "green";
        }
    
        var td3 = document.createElement("td");
    
        td3.innerHTML = '<i class ="fa-solid fa-trash-can" id="delete"></i> Delete';
        td3.addEventListener("click",deleteTodo);
    
        tr.append(td1,td2,td3);
    
        document.querySelector("tbody").append(tr);
     });
}

function myTodo(){
    event.preventDefault();

    var task = document.getElementById("task").value;

    var priority = document.querySelector("#priority").value;

    console.log(task,priority);
    var todo = {task: task, priority: priority};
    todoArr.push(todo);
    localStorage.setItem("todo",JSON.stringify(todoArr));
    displayTodo();
}

function deleteTodo(){
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
}


