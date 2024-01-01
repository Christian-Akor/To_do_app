
let tasks = [
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Read a book', completed: false }
];

// Function to render tasks
function renderTasks() {
    const tasksContainer = document.getElementById('tasks-container');
    tasksContainer.innerHTML = '';

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
            <span ${task.completed ? 'style="text-decoration: line-through;"' : ''}>${task.text}</span>
            <button onclick="removeTask(${task.id})">Remove</button>
        `;
        tasksContainer.appendChild(taskDiv);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTaskText = taskInput.value.trim();

    if (newTaskText !== '') {
        const newTask = { id: Date.now(), text: newTaskText, completed: false };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
}

// Function to toggle task completion status
function toggleTask(taskId) {
    tasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
}

// Function to remove a task
function removeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

// Initial rendering of tasks
