var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
console.log (buttonEl);


var createTaskHandler = function (){
    var taskItemEl = document.createElement ("li");
    taskItemEl.textContent = "New task";
    taskItemEl.className = "task-item";
    tasksToDoEl.appendChild(taskItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);