const moment = require('moment')
const { addTask, reWriteTasksList } = require('../../services/tasks')

function addNewTask (req, res) {
  const taskId = new Date().getTime()
  const taskTitle = req.body.taskTitle
  const taksDate = moment(new Date())
  let newTask = {}
  if (taskTitle) {
    newTask = { id: taskId, title: taskTitle }
    newTask.created = taksDate.format('D/MM/YYYY HH:mm')
    newTask.done = false
    addTask(newTask)
  }
  if (newTask) { reWriteTasksList() }
  res.redirect('/tasks/todo')
}

module.exports = addNewTask
