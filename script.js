const taskInput = document.getElementById('task_input');
const addTaskButton = document.getElementById('add_task_button');
const taskList = document.getElementById('task_list');

addTaskButton.addEventListener('click', function(){
    const taskText = taskInput.value.trim();
    if(taskText == ''){
        alert('Task cannot be empty!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = '';

});