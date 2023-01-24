/* eslint-disable no-use-before-define */
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function addTask(description) {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  renderTask(task);
  saveTasks();
}

export function renderTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
    <span class="task-description ${task.completed ? 'completed' : ''}">${
  task.description
}</span>
    <span class="edit-task">Edit</span>
    <span class="delete-task">X</span>
`;
  li.classList.add('task');
  li.index = task.index;
  taskList.appendChild(li);

  const checkbox = li.querySelector('.checkbox');
  checkbox.addEventListener('change', (e) => {
    const { index } = li;
    tasks[index - 1].completed = e.target.checked;
    li.querySelector('.task-description').classList.toggle(
      'completed',
      e.target.checked,
    );
    saveTasks();
  });

  const taskDescription = li.querySelector('.task-description');
  taskDescription.addEventListener('blur', (e) => {
    const { index } = li;
    tasks[index - 1].description = e.target.innerText;
    saveTasks();
  });

  const editButton = li.querySelector('.edit-task');
  editButton.addEventListener('click', () => {
    const { index } = li;
    const newDescription = prompt(
      'Enter new task description',
      tasks[index - 1].description,
    );
    if (newDescription) {
      tasks[index - 1].description = newDescription;
      li.querySelector('.task-description').innerText = newDescription;
      saveTasks();
    }
  });
}

export function updateIndex() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

export function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function deleteTask(li) {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const { index } = li;
  tasks.splice(index - 1, 1);
  taskList.innerHTML = '';
  tasks.forEach(renderTask);
  updateIndex();
  saveTasks();
}

export function loadTasks() {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.innerHTML = '';
  tasks.forEach(renderTask);
}

export function editTask(li) {
  const { index } = li;
  const newDescription = prompt(
    'Enter new task description',
    tasks[index].description,
  );
  if (newDescription) {
    tasks[index].description = newDescription;
    li.querySelector('.task-description').innerText = newDescription;
    saveTasks();
  }
}

export function removeCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
  taskList.innerHTML = '';
  tasks.forEach(renderTask);
  updateIndex();
  saveTasks();
}