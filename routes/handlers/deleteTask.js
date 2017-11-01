const { deleteTaskById, reWriteTasksList } = require('../../services/tasks')

function deleteTask (req, res) {
  const { taskId } = req.body
  deleteTaskById(taskId)
  reWriteTasksList()
  res.status(200).send(`task w/ id ${taskId} has been removed succesfully`)
}

module.exports = deleteTask
