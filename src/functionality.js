/* eslint-disable no-use-before-define */
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function addTask(description) {
  const task = {
    description,
    completed: false,
    index: tasks.length,
  };
  tasks.push(task);
  renderTask(task);
  updateIndex();
  saveTasks();
}

export function renderTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
    <span class="task-description ${task.completed ? 'completed' : ''}">${
  task.description
}</span>
    <span class="delete-task">X</span>
  `;
  li.classList.add('task');
  li.index = task.index;
  taskList.appendChild(li);

  const checkbox = li.querySelector('.checkbox');
  checkbox.addEventListener('change', (e) => {
    const { index } = li;
    tasks[index].completed = e.target.checked;
    li.querySelector('.task-description').classList.toggle(
      'completed',
      e.target.checked,
    );
    saveTasks();
  });
}

export function updateIndex() {
  tasks.forEach((task, index) => {
    task.index = index;
  });
}

export function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function deleteTask(li) {
  const { index } = li;
  tasks.splice(index, 1);
  li.remove();
  updateIndex();
  saveTasks();
}

export function loadTasks() {
  tasks.forEach(renderTask);
}

export function removeCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);

  // Iterate through the taskList's children
  for (let i = taskList.children.length - 1; i >= 0; i -= 1) {
    // check if the task is completed
    if (
      taskList.children[i]
        .querySelector('.task-description')
        .classList.contains('completed')
    ) {
      taskList.removeChild(taskList.children[i]);
    }
  }

  updateIndex();
  saveTasks();
}

export function toggleCompleted(taskEl) {
  const { index } = taskEl.parentElement;
  tasks[index].completed = !tasks[index].completed;
  taskEl.classList.toggle('completed');
  taskEl.parentElement.querySelector('.checkbox').checked = tasks[index].completed;
  saveTasks();
}
