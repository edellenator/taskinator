var formEl = document.querySelector ("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");



var taskFormHandler = function (event){
    event.preventDefault();
    var taskNameInput = document.querySelector ("input[name='task-name']").value;
    var taskTypeInput = document.querySelector ("select[name='task-type']").value;

    //check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    // package up data as an object
    var taskDataObject = {
        name: taskNameInput,
        type: taskTypeInput,
    };

    //send it as an argument to createTaskEl
    createTaskEl(taskDataObject);

    formEl.reset();
};

var createTaskEl = function(taskDataObject) {
    var listItemEl = document.createElement ("li");
    listItemEl.className = "task-item";
    var taskInfoEl = document.createElement ("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class = 'task-name'>" + taskDataObject.name + "</h3><span class='task-type'>" + taskDataObject.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemEl);

};

formEl.addEventListener("submit", taskFormHandler);