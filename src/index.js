/* eslint-disable no-use-before-define */
import './style.css';

import {
  addTask, deleteTask, loadTasks, editTask, removeCompletedTasks,
} from './functionality.js';
import toggleCompleted from './interactive.js';

const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const removeCompletedButton = document.getElementById('remove-completed');

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
  } else if (e.target.classList.contains('edit-task')) {
    editTask(e.target.parentElement);
  }
});

removeCompletedButton.addEventListener('click', removeCompletedTasks);
