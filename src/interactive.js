import { saveTasks } from './functionality.js';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export default function toggleCompleted(taskEl) {
  // eslint-disable-next-line no-prototype-builtins
  if (!taskEl.parentElement.hasOwnProperty('index')) return;
  const { index } = taskEl.parentElement;
  tasks[index].completed = !tasks[index].completed;
  taskEl.classList.toggle('completed');
  taskEl.parentElement.querySelector('.checkbox').checked = tasks[index].completed;
  saveTasks();
}
