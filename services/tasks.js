let tasks = require('../data/tasksList.json')
const fs = require('fs')

function getTasks () {
  return tasks
}

function getTask (id) {
  return tasks.find(task => task.id === +id)
}

function addTask (newTask) {
  tasks.push(newTask)
}

function getNotDoneTasks () {
  return tasks.filter(task => task.done === false)
}

function getDoneTasks () {
  return tasks.filter(task => task.done === true)
}

function markTaskAsDone (id) {
  let task = getTask(id)
  task.done = true
  return getNotDoneTasks()
}

function markAllTasksAsDone () {
  return tasks.map(function (task) { task.done = true })
}

function deleteTaskById (id) {
  tasks = tasks.filter(task => task.id !== +id)
  return getNotDoneTasks()
}

function deleteAllCompletedTasks () {
  tasks = tasks.filter(task => task.done === false)
  return tasks
}

function editTaskById (id, newTitle) {
  let task = getTask(id)
  task.title = newTitle
}

function reWriteTasksList () {
  let tasks = getTasks()
  fs.writeFileSync('./data/tasksList.json', JSON.stringify(tasks, null, 2))
}

module.exports = { tasks, getNotDoneTasks, getDoneTasks, getTasks, addTask, markTaskAsDone, reWriteTasksList, deleteTaskById, markAllTasksAsDone, deleteAllCompletedTasks, editTaskById }
