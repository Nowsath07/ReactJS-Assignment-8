document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      input.value = '';
    }
  });

  function addTask(text) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    const span = document.createElement('span');
    span.textContent = text;

    const controls = document.createElement('div');

    const doneBtn = document.createElement('button');
    doneBtn.className = 'btn btn-success btn-sm me-1';
    doneBtn.textContent = 'Done';

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-warning btn-sm me-1';
    editBtn.textContent = 'Edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'Delete';

    controls.appendChild(doneBtn);
    controls.appendChild(editBtn);
    controls.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(controls);
    taskList.appendChild(li);

    // Done functionality
    doneBtn.addEventListener('click', () => {
      span.classList.toggle('completed');
    });

    // Edit functionality
    editBtn.addEventListener('click', () => {
      const newText = prompt('Edit your task', span.textContent);
      if (newText !== null && newText.trim() !== '') {
        span.textContent = newText.trim();
      }
    });

    // Delete functionality
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });
  }
});
