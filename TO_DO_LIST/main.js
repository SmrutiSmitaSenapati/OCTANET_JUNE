document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const prioritySelect = document.getElementById('prioritySelect');
    const taskList = document.getElementById('taskList');
    const gifContainer = document.getElementById('gifContainer');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        const taskPriority = prioritySelect.value;
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            if (taskPriority === 'high') {
                li.classList.add('high-priority');
            }
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'x';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });
            li.appendChild(deleteButton);
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });
            taskList.appendChild(li);
            taskInput.value = '';

            sortTasks();
            showGif();
        }
    }

    function sortTasks() {
        const tasks = Array.from(taskList.children);
        tasks.sort((a, b) => {
            if (a.classList.contains('high-priority') && !b.classList.contains('high-priority')) {
                return -1;
            }
            if (!a.classList.contains('high-priority') && b.classList.contains('high-priority')) {
                return 1;
            }
            return 0;
        });
        tasks.forEach(task => taskList.appendChild(task));
    }

    function showGif() {
        gifContainer.style.display = 'block';
        setTimeout(() => {
            gifContainer.style.display = 'none';
        }, 3000);
    }
});
