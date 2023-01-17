/* eslint-disable no-use-before-define */
import './style.css';

const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

window.onload = () => loadTasks();

addTaskButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!taskInput.value) return;
  addTask(taskInput.value);
  taskInput.value = '';
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-task')) {
    deleteTask(e.target.parentElement);
  } else if (e.target.classList.contains('task-description')) {
    toggleCompleted(e.target);
  }
});

function addTask(description) {
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

function renderTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-description ${task.completed ? 'completed' : ''}">${
  task.description
}</span>
    <span class="delete-task">X</span>
  `;
  li.classList.add('task');
  li.index = task.index;
  taskList.appendChild(li);
}

function toggleCompleted(taskEl) {
  const { index } = taskEl.parentElement;
  tasks[index].completed = !tasks[index].completed;
  taskEl.classList.toggle('completed');
  saveTasks();
}

function deleteTask(li) {
  const { index } = li;
  tasks.splice(index, 1);
  li.remove();
  updateIndex();
  saveTasks();
}

function updateIndex() {
  tasks.forEach((task, index) => {
    task.index = index;
  });
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  tasks.forEach(renderTask);
}
