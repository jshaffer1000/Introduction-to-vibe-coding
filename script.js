// script.js

// Functionality to manage tasks
let tasks = [];

// Add task function
function addTask(task) {
    tasks.push({ text: task, completed: false });
    renderTasks();
}

// Delete task function
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Mark task as completed function
function markAsCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to render tasks to the DOM
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;
        if (task.completed) {
            listItem.style.textDecoration = 'line-through';
        }
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);
        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Undo' : 'Complete';
        completeButton.onclick = () => markAsCompleted(index);
        listItem.appendChild(deleteButton);
        listItem.appendChild(completeButton);
        taskList.appendChild(listItem);
    });
}

// Event listener for adding tasks
document.getElementById('add-task-form').onsubmit = function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    if (taskInput.value) {
        addTask(taskInput.value);
        taskInput.value = '';
    }
};