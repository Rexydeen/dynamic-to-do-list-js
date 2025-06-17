document.addEventListener("DOMContentLoaded", function(){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    loadTasks();
if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
    
    function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("enter a task");
            return;
        }
        const li = document.createElement('li');
        li.textContent = taskText;
        const btn = document.createElement('button');
        btn.textContent = "Remove";
        btn.classList.add("remove-btn");
        btn.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(btn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
