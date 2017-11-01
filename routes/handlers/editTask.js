const { editTaskById, reWriteTasksList } = require('../../services/tasks')

function editTask (req, res) {
  const { taskId, newTaskTitle } = req.body
  editTaskById(taskId, newTaskTitle)
  reWriteTasksList()
  res.status(200).send(`task has been edit succesfully`)
}

module.exports = editTask
