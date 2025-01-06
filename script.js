document.getElementById("due-date-input").addEventListener("click", function() {
    this.showPicker(); 
});

document.getElementById("add-task").addEventListener("click", function() {
    const taskInput = document.getElementById("todo-input");
    const categoryInput = document.getElementById("category-input");
    const dueDateInput = document.getElementById("due-date-input");
    const taskText = taskInput.value.trim();
    const categoryText = categoryInput.value.trim();
    const dueDate = dueDateInput.value;
    
    if (taskText === "" || categoryText === "") {
        alert("Please enter both task and category!");
        return;
    }
    
    if (!dueDate) {
        alert("Please enter a due date!");
        return;
    }

    const date = new Date();
    const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  
    const dueDateTime = new Date(dueDate);
    const timeRemaining = Math.max(dueDateTime - date, 0);
    const hoursLeft = Math.floor(timeRemaining / (1000 * 60 * 60)); 
    const minutesLeft = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <span class="category">${categoryText || "No category"}</span>
        <span class="timestamp">${timestamp}</span>
        <span class="time-remaining">${hoursLeft}h ${minutesLeft}m left</span>
        <button onclick="removeTask(this)">Delete</button>
        <button class="complete" onclick="markComplete(this)">Complete</button>
    `;
    
    document.getElementById("todo-list").appendChild(li);
    

    updateProgressBar();

    taskInput.value = "";
    categoryInput.value = "";
    dueDateInput.value = "";
});

function removeTask(button) {
    const task = button.parentElement;
    task.remove();
    updateProgressBar();
}

function markComplete(button) {
    const task = button.parentElement;
    task.querySelector('.task-text').classList.add("completed");
    
 
    updateProgressBar();
    
    task.classList.add('completed-task');
}

function updateProgressBar() {
    const totalTasks = document.querySelectorAll("li").length;
    const completedTasks = document.querySelectorAll(".completed").length;
    
    let progress = 0;
    if (totalTasks > 0) {
        progress = (completedTasks / totalTasks) * 100;
    }
    
    if (completedTasks === totalTasks && totalTasks > 0) {
        progress = 100;
    }

    if (totalTasks === 0) {
        progress = 0;
    }

    document.getElementById("progress-bar").value = progress;
}

